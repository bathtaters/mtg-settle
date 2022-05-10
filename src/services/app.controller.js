import { useMemo, useState } from "react"
import { maxGuessCount, illegalGuessMsg } from "../assets/constants"
import usePickSet from "./pickSet.controller"
import allSets from "../assets/setList.json"

// Blank array, used for iterating
export const blankArray = [...Array(maxGuessCount)]


export default function useAppController() {
  const setInfo = usePickSet()

  // Setup state
  const [guesses, setGuesses] = useState([])
  const [correctGuess, setCorrect] = useState(-1)

  // Click guess controller
  const handleGuess = (text, isInList) => {
    if (text && !isInList) return window.alert(illegalGuessMsg(text))
    if (text === setInfo.name || text === setInfo.code) setCorrect(guesses.length)
    if (guesses.length + 1 === maxGuessCount) setCorrect(-2)
    setGuesses((state) => state.concat(text.trim()))
  }

  // Create list for auto-complete
  const setList = useMemo(() => allSets.filter(({ name }) => !guesses.includes(name)), [guesses.length])

  return { setList, setInfo, guesses, correctGuess, handleGuess }
}