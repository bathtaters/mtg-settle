
export default function SuggestTextBox({ inputRef, value, placeholder, className, isHidden, setListVisible, change }) {
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
      ref={inputRef}
    />
  )
}
