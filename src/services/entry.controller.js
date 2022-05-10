import { useRef, useState } from "react"

export default function useEntryController(handler) {
  const ref = useRef(null)
  const [ hasText, setHasText ] = useState(false)

  // Set button value based on text in box
  const onChange = (ev) => !ev.target.value === hasText && setHasText(!!ev.target.value)

  // onSubmit for SuggestText
  const onSubmit = (match, text) => handler(text, Boolean(match))

  // Button click
  const handleClick = () => ref.current?.submit()

  return {
    hasText, handleClick,
    props: { ref, onChange, onSubmit },
  }
}