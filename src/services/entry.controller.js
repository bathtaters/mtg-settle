import { useRef, useState } from "react"
import { helperText } from "../assets/constants"

export default function useEntryController(handler) {
  const ref = useRef(null)
  const [ hasText, setHasText ] = useState(false)
  const [ disable, setDisable ] = useState(true)

  // Set button value based on text in box
  const onChange = (value, suggestions, exact, picked) => {
    if (!value === hasText) setHasText(!!value)
    if (disable ? exact || picked || suggestions?.length === 1 : suggestions?.length !== 1) setDisable(!disable)
  }

  // onSubmit for SuggestText
  const onSubmit = (match, text) => handler(text, Boolean(match))

  // Button click
  const handleClick = () => ref.current?.submit()

  return {
    hasText, handleClick, disabled: hasText && disable,
    props: { ref, onChange, onSubmit, placeholder: helperText },
  }
}