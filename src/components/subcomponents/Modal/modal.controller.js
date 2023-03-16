import { useEffect, useState } from "react"
import { useHotkeys } from "../SuggestText/services/suggestText.utils"
import { modalFadeDelay } from "../../../assets/constants"

export default function useControlModal(modalId, openModal, setModal) {
  
  // Track modal state
  if (!modalId) console.error('MODAL is missing ID!')
  const isOpen = modalId && openModal === modalId
  const [isOpenDelayed, setOpenDelayed] = useState(isOpen)

  // Toggle modal visibility
  const toggleState = (ev) => { ev && ev.stopPropagation(); setModal((state) => state ? null : modalId) }
  
  // Allow fade in/out
  useEffect(() => {
    const delayedState = setTimeout(() => setOpenDelayed(isOpen), modalFadeDelay[+!isOpen])
    return () => { clearTimeout(delayedState) }
  }, [isOpen])

  // Exit on <Escape>
  useHotkeys({ Escape: () => setModal(null) }, { skip: !isOpen, deps: [] })

  return {
    isRendered: isOpenDelayed || isOpen,
    isVisible:  isOpenDelayed && isOpen,
    toggleState,
  }
}

export const checkCanReturnFocus = () => new Promise((res) => 
  setTimeout(res, modalFadeDelay[0] + modalFadeDelay[1] + 1000))