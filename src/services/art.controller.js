import { useState, useEffect } from "react"
import { maxGuessCount } from "../assets/constants"

export default function useArtController({ images, cards, loading, background, error }, currentGuess, correctGuess) {
  // Control carousel index
  const [selectedIdx, setSelectedIdx] = useState(correctGuess < 0 ? currentGuess : correctGuess)

  // Calculated state
  const maxVisible = correctGuess === -1 ? currentGuess : maxGuessCount - 1,
    disableNext = selectedIdx >= maxVisible

  // Auto-set carousel image
  useEffect(() => { setSelectedIdx(correctGuess < 0 ? maxVisible : correctGuess) }, [correctGuess, maxVisible])

  // Props to pass to Carousel
  const carouselProps = {
    selectedItem: selectedIdx,
    onChange: setSelectedIdx,
    useKeyboardArrows: false,
    swipeable: false,
  }

  return { images, cards, carouselProps, disableNext, maxVisible, loading, error }
}