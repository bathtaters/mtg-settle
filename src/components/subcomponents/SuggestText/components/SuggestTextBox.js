import { forwardRef } from "react"

function SuggestTextBox({ value, placeholder, className, isHidden, setListVisible, change }, ref) {
  return (
    <input
      type="text"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="on"
      placeholder={placeholder ?? ""}
      value={value}
      className={`${className} ${isHidden ? 'hidden' : ''}`}
      onBlur={() => setListVisible(false)}
      onFocus={() => setListVisible(true)}
      onChange={change}
      ref={ref}
    />
  )
}

export default forwardRef(SuggestTextBox)