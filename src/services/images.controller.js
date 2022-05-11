import { useEffect, useState } from "react"
import useGetCards from "./pickCards.controller"
import { imageURL, getDebug } from "../assets/constants"
const { imgSrc, enable: debugging } = getDebug()

const imageDelay = 510 // as per ScryFall regulations

// Load images
const getImages = (ids, setImage, idx = 0) => {
  const cont = idx + 1 < ids.length
  if (!ids[idx]) return cont && getImages(ids, setImage, idx+1)
  
  return fetch(imageURL(ids[idx]))
    .then((res) => res.blob())
    .then(imageBlob => {
      setImage(URL.createObjectURL(imageBlob), idx)
      cont && setTimeout(() => getImages(ids, setImage, idx+1), imageDelay)
    })
    .catch((err) => console.error(err))
}



export default function useRandomImages(setCode, imageCount) {
  // Get random cards
  const { data, msg } = useGetCards(setCode, imageCount)

  // Setup state
  const [artImages, setArtImages] = useState([])
  const [locked, setLock] = useState(false)
  const setImage = (newImg, idx) => setArtImages((state) => Object.assign([], state, { [idx]: newImg }))
  
  useEffect(() => {
    if (data && !locked) {
      // Download images only the first time
      setLock(true)
      if (debugging) setArtImages((state) => state.map(() => imgSrc))
      else getImages(data.map(({ id }) => id), setImage)
    }
  }, [data, locked])

  return { msg, artImages, cards: data }
}