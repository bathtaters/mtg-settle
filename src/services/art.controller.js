import { useState, useEffect, useCallback } from "react"
import { maxGuessCount } from "../assets/constants"
import { useHotkeys } from "../components/subcomponents/SuggestText/services/suggestText.utils"

export default function useArtController({ images, cards, loading, error }, currentGuess, correctGuess) {
  // Control carousel index
  const [selectedIdx, setSelectedIdx] = useState(correctGuess < 0 ? currentGuess : correctGuess)

  // Calculated state
  const maxVisible = correctGuess === -1 ? currentGuess : maxGuessCount - 1,
    disableNext = selectedIdx >= maxVisible

  // Auto-set carousel image
  useEffect(() => { setSelectedIdx(correctGuess < 0 ? maxVisible : correctGuess) }, [correctGuess, maxVisible])

  // Programmatically move carousel
  const pageLeft  = useCallback(() => setSelectedIdx((idx) => idx > 0          ? idx - 1 : idx), [])
  const pageRight = useCallback(() => setSelectedIdx((idx) => idx < maxVisible ? idx + 1 : idx), [maxVisible])

  // Swipe behavior
  const onSwipe = useCallback((dir) => dir === 0 ? pageRight() : dir === 2 ? pageLeft() : null, [pageLeft, pageRight])

  // Change art using Left/Right arrows
  useHotkeys({ ArrowLeft: pageLeft, ArrowRight: pageRight }, { deps: [pageLeft, pageRight] })

  // Props to pass to Carousel
  const carouselProps = {
    selectedItem: selectedIdx,
    onChange: setSelectedIdx,
    useKeyboardArrows: false,
    swipeable: false,
  }

  return { images, cards, carouselProps, disableNext, maxVisible, onSwipe, loading, error }
}