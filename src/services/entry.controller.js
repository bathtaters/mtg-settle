import { useCallback, useRef, useState } from "react"
import { helperText } from "../assets/constants"

export default function useEntryController(onSubmit) {
  const ref = useRef(null)
  const [ hasText, setHasText ] = useState(false)
  const [ disable, setDisable ] = useState(true)

  // Set button value based on text in box
  const onChange = useCallback((value, picked, exact, suggestions) => {
    if (!value === hasText) setHasText(!!value)
    if (disable ? exact || picked || suggestions?.length === 1 : suggestions?.length !== 1) setDisable(!disable)
  }, [disable, hasText])

  // Button click
  const handleSubmit = (ev) => { ev.preventDefault(); ref.current?.submit() }

  return {
    hasText, handleSubmit, disabled: hasText && disable,
    props: { ref, onChange, onSubmit, placeholder: helperText },
  }
}