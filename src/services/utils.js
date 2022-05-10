export const reorderArray = (array, colCount) => {
  const colSize = Math.ceil(array.length / colCount)
  return array.reduce((result, entry, idx) => {
    result[(idx % colCount) * colSize + Math.floor(idx / colCount)] = entry
    return result
  }, [])
}