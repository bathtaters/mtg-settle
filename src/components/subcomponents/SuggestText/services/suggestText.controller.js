import { useEffect, useState, useRef, useMemo, useImperativeHandle } from "react"
import { getSuggestions, autoSelect, autoShow } from "./suggestText.services"
import { getSelected, getNext, getPrev, validList, getNonStaticSolo, useHotkeys } from "./suggestText.utils"
import { displayEntry, enterBehavior } from "./suggestText.custom"


function useSuggestTextController(list, isHidden, onChange, onSubmit, ref) {
  
  // --- Component State --- \\

  // Setup Local State
  const textbox = useRef(null)
  const isFocused = document.activeElement === textbox.current
  const [value, setValue] = useState("")
  const [selected, setSelected] = useState(-1)
  const [picked, setPick] = useState(null)
  const [listIsVisible, setListVisible] = useState(false)
  
  // Setup List
  const isEmpty = !value || !value.trim()
  const suggestions = useMemo(() => getSuggestions(list, value), [list, value])
  useEffect(autoSelect(selected, suggestions, setSelected), [selected, suggestions])
  useEffect(autoShow(listIsVisible, isFocused, setListVisible), [listIsVisible, isFocused, value])
  const isExact = !isEmpty && (!Array.isArray(suggestions) ? suggestions : suggestions.length === 1 ? suggestions[0] : false)


  // --- Action Handlers --- \\

  // TextBox controller
  const change = (e) => {
    setValue(e.target.value) // Controlled component
    
    if (picked && e.target.value !== displayEntry(picked)) setPick(null) // Clear pick value

    if (onChange) onChange(e) // Passthrough onChange function
  }

  const getSubmitValue = () => !isHidden && (picked || isExact || (!isEmpty && getNonStaticSolo(suggestions)))

  const submit = async (forcePick) => {
    const newPick = forcePick || getSubmitValue()

    // Submit
    const result = await (onSubmit && onSubmit(newPick, value, suggestions))

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

    // Pick newPick
    setPick(newPick)
    setValue(displayEntry(newPick))
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
    boxProps:  { value, setListVisible, change, ref: textbox },
    listProps: { suggestions, selected, pick, setSelected, textbox },
    showList:  listIsVisible && validList(suggestions),
  }
}

export default useSuggestTextController