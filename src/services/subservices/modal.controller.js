import { useEffect, useState } from "react"
import { modalDelay } from "../../assets/constants"
import { useHotkeys } from "../../components/subcomponents/SuggestText/services/suggestText.utils"

export default function useControlModal(force) {
  // Track modal state
  const [ isOpen, setOpen ] = useState(force ?? false)
  const toggleState = () => { setOpen((state) => !state) }
  
  // Allow programmatic open/close
  useEffect(() => {
    if (typeof force === 'boolean') setTimeout(() => setOpen(force), modalDelay)
  }, [force])

  // Exit on <Esc>
  useHotkeys({ 27: () => setOpen(false) }, { skip: !isOpen, deps: [] })

  return [ isOpen, toggleState ]
}