import { useState } from "react"
import { maxGuessCount } from "../assets/constants"
import usePickSet from "./pickSet.controller"

// Blank array, used for iterating
export const blankArray = [...Array(maxGuessCount)]


export default function useAppController() {
  const setInfo = usePickSet()

  // Setup state
  const [guesses, setGuesses] = useState([])
  const [correctGuess, setCorrect] = useState(-1)

  // Button controller
  const click = () => {
    if (text === setInfo.name || text === setInfo.code) setCorrect(guesses.length)
    if (guesses.length + 1 === maxGuessCount) setCorrect(-2)
    setGuesses((state) => state.concat(text.trim()))
    setText('')
  }

  // Simple controlled text box
  const [text, setText] = useState('')
  const change = (val) => setText(val)

  return {
    setInfo, blankArray, guesses, correctGuess, text,
    handlers: { click, change }
  }
}