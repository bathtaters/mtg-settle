
export default function SuggestTextBox({
  inputRef, label, selected, value, placeholder, className, isHidden, setListVisible, change, showList
}) {
  return (
    <input
      type="text"
      id={label+'-textbox'}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="on"
      role="combobox"
      aria-autocomplete="list"
      aria-haspopup="listbox"
      aria-controls={label+'-list'}
      aria-owns={label+'-list'}
      aria-expanded={showList}
      aria-activedescendant={selected}
      aria-label={label || "Text box"}
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
