import { useEffect, useState } from "react"
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