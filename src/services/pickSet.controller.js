import { useMemo } from "react"
import setList from "../assets/setList.json"

// DEBUG BLOCK
import { getDebug } from "../assets/constants"
const { setData, enable: debugging } = getDebug()

const getRandomEntry = (array) => array[Math.floor(Math.random() * array.length)]

export default function usePickSet() {
  const set = useMemo(() => debugging ? setData : getRandomEntry(setList), []) // DEBUG
  return set
}
