import { useEffect, useState } from "react"

// Load images
export default function useRandomImages(setName, imageCount) {
  const [artImages, setImages] = useState([])
  useEffect(() => { setImages([...Array(imageCount)].map(() => '192/176')) }, [])

  return artImages
}