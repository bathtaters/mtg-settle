import { useEffect, useState, useCallback } from "react"
import { modalDelay } from "../../assets/constants"
import { useHotkeys } from "../../components/subcomponents/SuggestText/services/suggestText.utils"

export default function useControlModal(force) {
  // Track modal state
  const [ isOpen, setOpen ] = useState(force ?? false)
  const toggleState = (ev) => { ev && ev.stopPropagation(); setOpen((state) => !state) }
  
  // Allow programmatic open/close
  useEffect(() => {
    if (typeof force === 'boolean') setTimeout(() => setOpen(force), force ? modalDelay.open : modalDelay.close)
  }, [force])

  // Exit on <Esc>
  useHotkeys({ 27: () => setOpen(false) }, { skip: !isOpen, deps: [] })

  return [ isOpen, toggleState ]
}


export function useForceHide(autoHide) {
  const [ force, setForce ] = useState(null)

  // Force change in Modal state to FALSE
  const hide = useCallback(() => { setForce(false); setTimeout(() => setForce(null), 3) }, [])

  // Hide whenever autoHide changes to TRUE
  useEffect(() => { autoHide && hide() }, [autoHide, hide])

  return { force, hide } // force prop for ModalControl, hide function to force hide
}