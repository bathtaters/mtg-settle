import { useCallback, useEffect } from "react"
import useRandomImages from "../services/images.controller"
import useScrollToIndex from "../services/scroll.controller"
import { blankArray } from "../services/app.controller"

// Handle clicking carousel next/previous buttons
export const useCarouselHandler = (isPrev, scrollTo) => useCallback(() => scrollTo((idx) => idx + (isPrev ? -1 : 1)), [isPrev, scrollTo])

export default function useArtController(setCode, currentGuess, correctGuess) {
  // Image controller
  const { msg, artImages, cards } = useRandomImages(setCode, blankArray.length)

  // Scroll controller
  const { visibleIdx, setChildRef, scrollTo } = useScrollToIndex({ scrollEndDeps: [currentGuess] })

  // Scroll to correct guess at end
  useEffect(() => { if (correctGuess >= 0) scrollTo(correctGuess) }, [correctGuess, scrollTo])
  // Scroll to first picture on load
  // eslint-disable-next-line
  useEffect(() => { if (cards?.[0]) scrollTo(0) }, [cards?.[0], scrollTo])
  
  // Simplify common logic
  const maxVisible = correctGuess === -1 ? currentGuess : blankArray.length - 1

  return { msg, artImages, cards, visibleIdx, setChildRef, scrollTo, maxVisible }
}