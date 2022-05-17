import { useCallback, useEffect, useMemo, useState } from "react"
import { maxGuessCount, illegalGuessMsg } from "../assets/constants"
import usePickSet from "./pickSet.controller"
import useGetCards from "./pickCards.controller"
import allSets from "../assets/setList.json"

import { setDefaults, loadGame, endGame, updateGuesses } from "./subservices/storage.services"

// Blank array, used for iterating
export const blankArray = [...Array(maxGuessCount)]


export default function useAppController() {
  // Get set/card
  const [ setInfo, newSet ] = usePickSet()
  const [ artData, getCards ] = useGetCards()

  // Setup state
  const [guesses, setGuesses] = useState([])
  const [correctGuess, setCorrect] = useState(-1)
  const [alertMsg, setAlertMsg] = useState(null)

  // Set/Load memory
  useEffect(() => {
    if (!setInfo.code) throw new Error('Set was not selected')
    setDefaults()
    getCards(setInfo.code, maxGuessCount, false)

    const loaded = loadGame()
    if (!loaded) return
    setGuesses(loaded.guesses)
    setCorrect(loaded.correctGuess)
  // eslint-disable-next-line
  }, [])

  // Start new game
  const newGame = () => { setGuesses([]); setCorrect(-1); getCards(newSet().code, maxGuessCount); }

  // Click guess controller
  const handleGuess = useCallback((text, picked) => {
    // Guess not in list
    if (text && !picked) return setAlertMsg(illegalGuessMsg(text))
    // Guess is correct
    if (picked.code === setInfo.code) setCorrect(endGame(guesses.length))
    // Game is over
    else if (guesses.length + 1 === maxGuessCount) setCorrect(endGame(-2))
    // Update guess list
    setGuesses((state) => updateGuesses(state.concat(picked && picked.name.trim())))
    
  }, [setInfo.code, guesses.length])

  // Create list for auto-complete
  // eslint-disable-next-line
  const setList = useMemo(() => allSets.filter(({ name }) => !guesses.includes(name)), [guesses.length])

  // Allow alert to clear its messages
  const clearMsg = useCallback(() => setAlertMsg(null), [setAlertMsg])

  return { setList, setInfo, guesses, correctGuess, handleGuess, newGame, alertMsg, setAlertMsg, clearMsg, artData }
}