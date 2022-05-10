import { useLazyQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { databaseParams, ignoreCards } from "../assets/constants"

// DEBUG BLOCK
import { getDebug } from "../assets/constants"
import LoadingSpinner from "../components/subcomponents/LoadingSpinner"
const { cardData, enable: debugging } = getDebug()


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

  let indexes = []
  for (let i = 0; i < cardCount; i++) {
    while (indexes.length === i) {
      const nextIdx = Math.floor(Math.random() * cardList.length)
      if (!indexes.includes(nextIdx)) indexes.push(nextIdx)
    }
  }

  return normalizeCards(indexes.map((idx) => cardList[idx]))
}



export default function useGetCards(setCode, cardCount) {
  // Setup main state
  const [ cards, setCards ] = useState(null)

  // Query GraphQL server
  const [ getCards, { loading, error, called } ] = useLazyQuery(databaseParams.query, { variables: { setCode } }) // DEBUG
  
  useEffect(() => {
    if (!debugging && !cards && setCode) {
      setCards('loading')
      getCards(
        { variables: { setCode },

        // Pick random cards
        onCompleted: (data) => setCards(
          data?.sets?.[0]?.cards && pickCards(data.sets[0].cards, cardCount)
        )
      })
    }
  // eslint-disable-next-line
  }, [setCode, cardCount, getCards])

  // Error-check & return expected value
  if (debugging) return { data: cardData } // DEBUG
  if (error) return console.error(error) || { msg: `Error picking cards: ${error.message}` }
  if (!called || loading || cards === 'loading') return { msg: <LoadingSpinner /> }
  if (!cards) return { msg: 'Error picking cards: Cards not found!' }

  return { data: cards }
}