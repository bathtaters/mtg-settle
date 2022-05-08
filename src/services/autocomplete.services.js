const isContainedIn = (inputValue) => (item) => {
  if (!inputValue) return false
  const upper = inputValue.toUpperCase()
  if (item.name.toUpperCase().includes(upper)) return true
  return item.code.includes(upper)
}

export const itemDisplay = (item) => item?.name ?? ''

export const buildList = (isOpen, list, inputValue) => isOpen ? list.filter(isContainedIn(inputValue)) : []
