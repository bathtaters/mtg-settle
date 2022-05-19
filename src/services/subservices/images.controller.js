import { useCallback, useState } from "react"
import { imageURL } from "../../assets/constants"

const imageDelay = 510 // ms delay between image requests (per ScryFall rules)

// Load images
const getImages = (ids, setImage, idx = 0) => {
  // Trigger next request in <imageDelay> ms (Or immediately if no URL exists)
  if (idx + 1 < ids.length) setTimeout(() => getImages(ids, setImage, idx+1), ids[idx] ? imageDelay : 1)
  
  // Handle missing URL
  if (!ids[idx]) return Promise.resolve()

  // Fetch image & get URL for cache
  return fetch(imageURL(ids[idx]))
    .then((res) => res.blob())
    .then(imageBlob => {
      setImage(URL.createObjectURL(imageBlob), idx)
    })
}



export default function useFetchImages() {
  // Setup state
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const fetchImages = useCallback((cards) => {
    if (!cards?.length) return Promise.reject('Empty array sent to fetchImages')

    // Reset images
    setImages([])
    setLoading(true)

    // Download images
    let loaded = cards.length
    return getImages(
      cards.map(({ id }) => id), // Scryfall IDs
      // Callback for each image
      (newImg, idx) => {
        setImages((state) => Object.assign([], state, { [idx]: newImg }))
        if (--loaded < 1) setLoading(false) // when all are loaded
      }
    // Catch and report errors
    ).catch((err) => console.error(err) || setError(err))
  }, [])

  return [ fetchImages, { images, loading, error } ]
}