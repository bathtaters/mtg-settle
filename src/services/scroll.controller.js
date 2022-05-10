import { useCallback, useEffect, useRef, useState } from "react"

// See 'scrollIntoView' for options
// + scrollEndDeps is useEffect dependency array that scrolls to the last element

export default function useScrollToIndex({ behavior = "smooth", block = "center", inline = "center", scrollEndDeps = [] } = {}) {
  // Setup refs & state
  const [ selectedIdx, scrollTo ] = useState(-1)
  const childRefs = useRef([])
  const setChildRef = useCallback((idx) => (el) => childRefs.current[idx] = el, [childRefs])

  // On change in scrollEndDeps, scroll to last element
  useEffect(() => {
    childRefs.current.length && scrollTo(childRefs.current.length - 1)
    
  // eslint-disable-next-line
  }, scrollEndDeps)

  // Main effect
  useEffect(() => {
    
    // Catch negative idx or missing refs
    if (selectedIdx < 0) return
    const element = childRefs.current[selectedIdx]
    if (!element) return console.warn('ScrollTo element is missing')

    // Perform scroll
    element.scrollIntoView({ behavior, block, inline })

  }, [selectedIdx, behavior, block, inline])

  return { setChildRef, scrollTo, visibleIdx: selectedIdx }
}