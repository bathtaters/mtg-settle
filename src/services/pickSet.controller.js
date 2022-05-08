import { useMemo } from "react"
import setList from "../assets/setList.json"

const getRandomEntry = (array) => array[Math.floor(Math.random() * array.length)]

export default function usePickSet() {
  const set = useMemo(() => getRandomEntry(setList), [])
  return set
}
