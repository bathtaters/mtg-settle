import { useEffect, useState } from "react"
import { alertHideDelay } from "../assets/constants"

export default function useShowAlert(message, clearMessage) {
  // Hide after <alertHideDelay> ms
  useEffect(() => {
    if (!message) return

    const timeoutId = setTimeout(() => clearMessage(), alertHideDelay)
    return () => { clearTimeout(timeoutId) }
  }, [message])

  // Click to hide
  const handleClick = () => message && clearMessage()

  return handleClick
}