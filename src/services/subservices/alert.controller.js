import { useCallback, useEffect, useState } from "react"
import { alertHideDelay, alertFadeDuration } from "../../assets/constants"

const alertFadeDelay = +(alertFadeDuration.match(/duration-(\d+)/)[1] ?? 300)

export default function useShowAlert(message, setAlert) {
  const [ hidden, setHidden ] = useState(true)

  const hideAlert = useCallback(() => {
    // Hide alert
    setHidden(true)

    // Clear alert data after fade duration + 5ms
    const clearAlert = setTimeout(() => setAlert({}), alertFadeDelay + 5)
    return () => { clearTimeout(clearAlert) }
  }, [setAlert])

  // Hide after <alertHideDelay> ms
  useEffect(() => {
    if (!message) return hideAlert()

    setHidden(false)
    const closeAlert = setTimeout(() => hideAlert(), alertHideDelay)
    return () => { clearTimeout(closeAlert) }
  }, [message, hideAlert])

  // Click to hide
  const handleClick = () => message && hideAlert()

  return { handleClick, hidden }
}