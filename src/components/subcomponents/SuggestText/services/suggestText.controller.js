import { useEffect, useState, useRef, useImperativeHandle } from "react"
import { getSuggestions, autoSelect, autoShow } from "./suggestText.services"
import { getSelected, getNext, getPrev, validList, getNonStaticSolo, useHotkeys } from "./suggestText.utils"
import { displayEntry, enterBehavior, hideListWhenExact } from "./suggestText.custom"


function useSuggestTextController(list, isHidden, onChange, onSubmit, ref) {
  
  // --- Component State --- \\

  // Setup Local State
  const textbox = useRef(null)
  const [suggestions, setSuggestions] = useState(list)
  const [value, setValue] = useState("")
  const [selected, setSelected] = useState(-1)
  const [picked, setPick] = useState(null)
  const [exact, setExact] = useState(null)
  const [listIsVisible, setListVisible] = useState(false)
  
  // Basic vars
  const isFocused = document.activeElement === textbox.current
  const isEmpty = !value || !value.trim()
  const isExact = !isEmpty && exact //(!Array.isArray(suggestions) ? suggestions : suggestions.length === 1 ? suggestions[0] : false)
  const getSubmitValue = () => !isHidden && (picked || isExact || (!isEmpty && getNonStaticSolo(suggestions)))

  // Auto update state
  useEffect(() => autoSelect(selected, suggestions, setSelected), [selected, suggestions])
  useEffect(() => autoShow(listIsVisible, isFocused, setListVisible), [listIsVisible, isFocused, value])
  // eslint-disable-next-line
  useEffect(() => { getSuggestions(list, value, setSuggestions, setExact) }, [list]) // Pass prop updates to state

  // --- Action Handlers --- \\

  // TextBox controller
  const change = (e) => {
    if (e.target.value !== value) setValue(e.target.value) // Controlled component

    // Clear pick value
    const newPick = e.forcePick || (e.target.value === displayEntry(picked) && picked)
    if (picked && !newPick) setPick(null)

    // Update list
    const [newSuggestions, newExact] = getSuggestions(list, e.target.value, setSuggestions, setExact)
    onChange && onChange(e.target.value, newPick, newExact, newSuggestions) // User onChange function
  }

  const submit = async (forcePick) => {
    const newPick = forcePick || getSubmitValue()

    // Submit
    const result = await (onSubmit && onSubmit(value, newPick, exact, suggestions))

    // Reset form
    setListVisible(false)
    setPick(null)
    change({ target: { value: '' } })
    return newPick && { ...newPick, result }
  }

  const pick = (forcePick) => {
    const newPick = forcePick || isExact || getSelected(selected, suggestions)
    
    if (!newPick) return false // Ignore missing pick
    if (newPick.isStatic) return submit(newPick) // Submit static pick

    const pickDisplay = displayEntry(newPick)
    if (displayEntry(picked) === pickDisplay) return false // Already picked

    // Pick newPick
    change({ target: { value: pickDisplay }, forcePick: newPick })
    setPick(newPick)
  }

  // --- Additional Hooks --- \\

  // Allow parent to Submit
  useImperativeHandle(ref, () => ({ submit, getValue: () => ({ ...getSubmitValue(), text: value }) }))

  // Setup Keyboard UI
  useHotkeys({
    /* Enter */ 13: () => enterBehavior(pick, submit, picked, isExact, value),
    /* Esc   */ 27: () => selected < 0 ? textbox.current.blur() : setSelected(-1),
    /* Up    */ 38: () => setSelected(getPrev(selected, suggestions?.length || 0)), 
    /* Down  */ 40: () => setSelected(getNext(selected, suggestions?.length || 0)),
  }, { skip: !isFocused })


  return {
    boxProps:  { value, setListVisible, change, inputRef: textbox },
    listProps: { suggestions, selected, pick, setSelected, textbox },
    showList:  listIsVisible && (!hideListWhenExact || !exact) && validList(suggestions),
  }
}

export default useSuggestTextController