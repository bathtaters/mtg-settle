import { useLazyQuery } from "@apollo/client"
import { useCallback, useState } from "react"
import { databaseParams, ignoreCards } from "../assets/constants"
import { newGame, loadEncrypted } from "./subservices/storage.services"
import useFetchImages from "./subservices/images.controller"


// Rules for ignoring cards
const filterCards = (cardList) => cardList.filter((card) => 
  !Object.keys(ignoreCards.equals).some((field) =>
    card[field] === ignoreCards.equals[field]
    // && !console.debug('failed =',field,card)

  ) && !Object.keys(ignoreCards.matches).some((field) =>
    ignoreCards.matches[field].test(card[field])
    // && !console.debug('failed test:',field,card)
  )
)

// Hide uneeded fields
const normalizeCards = (cardList) => cardList.map(({ name, artist, identifiers }) => ({ name, artist, id: identifiers.scryfallId }))

// Pick <cardCount> random cards from a list
function pickCards(allCards, cardCount) {
  const cardList = filterCards(allCards)
  if (cardList.length < cardCount) throw new Error(`Error: Card set is too small! [${cardList.length}, ${cardCount}]`)

  let pickedCards = []
  while (cardList.length && pickedCards.length < cardCount) {
    const nextCard = cardList.splice(Math.floor(Math.random() * cardList.length), 1)[0]
    if (!pickedCards.some(({ name }) => name === nextCard.name)) pickedCards.push(nextCard)
  }

  return normalizeCards(pickedCards)
}



export default function useGetCards() {
  // Setup main state
  const [ cards, setCards ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  // Image fetch hook
  const [ fetchImages, { images, loading: background, error: imgErr } ] = useFetchImages(cards)

  // GraphQL hook
  const [ fetchCards, { error: cardErr } ] = useLazyQuery(databaseParams.query, { onError: console.error })
  
  const getCards = useCallback((setCode, cardCount, forceRefetch = true) => {
    if (!setCode) return
    setLoading(true)
    
    if (!forceRefetch) {
      // Load cards from storage
      const stored = loadEncrypted('cards')
      if (stored) {
        setCards(stored)
        setLoading(false)

        // Load artwork
        fetchImages(stored)
        return
      }
    }

    // Load cards from GraphQL
    setCards([])
    fetchCards({ variables: { setCode } }).then(({ data, error }) => {
      if (!data?.sets?.[0]?.cards || error) return
      
      // Pick random cards
      const newCards = pickCards(data.sets[0].cards, cardCount)
      setCards(newGame(newCards))
      
      // Load artwork
      fetchImages(newCards)

    }).finally(() => setLoading(false))
    
  }, [fetchCards, fetchImages, setCards, setLoading])

  // Set error & return expected value
  return [{
    images, cards,
    loading, background,
    error: !cardErr && !imgErr && (loading || cards?.length) ? undefined :
      `Error picking cards: ${cardErr.message || imgErr.message || 'Cards not found!'}`
  }, getCards]
}