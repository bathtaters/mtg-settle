import { useMemo, useState } from "react"
import { useGetCards } from "./dbQuery.services"
import { ignoreCards, imageURL, getDebug } from "../assets/constants"
const { imgSrc, enable: debugging } = getDebug()

const imageDelay = 510 // as per ScryFall regulations

// Load images
const getImages = (ids, setImage, idx = 0) => {
  const cont = idx + 1 < ids.length
  return fetch(imageURL(ids[idx]))
    .then((res) => res.blob())
    .then(imageBlob => {
      setImage(URL.createObjectURL(imageBlob), idx)
      cont && setTimeout(() => getImages(ids, setImage, idx+1), imageDelay)
    })
    .catch((err) => console.error(err))
}



// Rules for ignoring cards
const filterCards = (cardList) => cardList.filter((card) => 
  !Object.keys(ignoreCards.equals).some((field) => card[field] === ignoreCards.equals[field] && !console.debug('failed =',field,card)) &&
  !Object.keys(ignoreCards.matches).some((field) => ignoreCards.matches[field].test(card[field]) && !console.debug('failed test:',field,card))
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



export default function useRandomImages(setCode, imageCount) {
  const { data, msg } = useGetCards(setCode)

  const [artImages, setArtImages] = useState([...Array(imageCount)].map(() => null))
  const setImage = (newImg, idx) => setArtImages((state) => Object.assign([], state, { [idx]: newImg }))
  
  const cards = useMemo(() => {
    if (data) {
      const cards = pickCards(data, imageCount)
      if (debugging) setArtImages((state) => state.map(() => imgSrc))
      else getImages(cards.map(({ id }) => id), setImage)
      return cards
    }
    return []

  // eslint-disable-next-line
  }, [!!data, imageCount])

  return { msg, artImages, cards }
}