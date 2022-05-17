import { useCallback, useEffect } from "react"
import useScrollToIndex from "./subservices/scroll.controller"
import { maxGuessCount } from "../assets/constants"

// Handle clicking carousel next/previous buttons
export const useCarouselHandler = (isPrev, scrollTo) => useCallback(() =>
  scrollTo((idx) => idx + (isPrev ? -1 : 1)),
  [isPrev, scrollTo]
)

export default function useArtController({ images, cards, loading, background, error }, currentGuess, correctGuess) {
  // Scroll controller
  const { visibleIdx, setChildRef, scrollTo } = useScrollToIndex({ scrollEndDeps: [currentGuess] })

  // Scroll to correct guess at end
  useEffect(() => { if (correctGuess >= 0) scrollTo(correctGuess) }, [correctGuess, scrollTo])

  // Center current index on load
  // eslint-disable-next-line
  useEffect(() => { if (!background) scrollTo(visibleIdx) }, [background])

  // Scroll to first picture on load
  useEffect(() => {
    if (cards?.[0]) scrollTo(correctGuess < 0 ? currentGuess ?? 0 : correctGuess)
  // eslint-disable-next-line
  }, [cards?.[0], scrollTo])
  
  // Simplify common logic
  const maxVisible = correctGuess === -1 ? currentGuess : maxGuessCount - 1

  return { images, cards, visibleIdx, setChildRef, scrollTo, maxVisible, loading, error }
}