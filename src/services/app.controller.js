import { useState } from "react"
import { maxGuessCount } from "../assets/constants"


// Blank array, used for iterating
export const blankArray = [...Array(maxGuessCount)]

export default function useAppController() {
  // Pick random set
  const setName = 'CORRECT'

  // Setup state
  const [guesses, setGuesses] = useState([])
  const [correctGuess, setCorrect] = useState(-1)

  // Button controller
  const click = () => {
    if (text === setName) setCorrect(guesses.length)
    setGuesses((state) => state.concat(text.trim()))
    setText('')
  }
  const keys = (ev) => { if (ev.charCode === 13) click() }

  // Simple controlled text box
  const [text, setText] = useState('')
  const change = (ev) => setText(ev.target.value)

  return {
    setName, blankArray, guesses, correctGuess, text,
    handlers: { click, keys, change }
  }
}