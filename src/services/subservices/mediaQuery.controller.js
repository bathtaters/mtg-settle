import { useState, useEffect } from "react";

const reducedMotionQuery = '(prefers-reduced-motion: no-preference)';

export function useReducedMotion() {
  const [isEnabled, setEnabled] = useState(
    !window.matchMedia(reducedMotionQuery).matches
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(reducedMotionQuery)
    const listener = (event) => { setEnabled(!event.matches) }

    mediaQueryList.addEventListener('change', listener)
    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [])

  return isEnabled;
}