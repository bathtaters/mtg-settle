import { useCallback, useEffect, useMemo, useState } from "react"
import { maxGuessCount, illegalGuessMsg } from "../assets/constants"
import { FORCE_ERROR } from "../assets/errors"
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
  const [alertObj, setAlert] = useState({})
  const [openModal, setModal] = useState(null)
  const [ignoreHotkeys, setIgnoreKeys] = useState(false)

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
  const newGame = () => {
    if (FORCE_ERROR) return setAlert({ message: FORCE_ERROR })
    correctGuess === -1 && endGame(-2)
    getCards(newSet().code, maxGuessCount)
    setGuesses([]); setCorrect(-1)
    setModal(null)
  }

  // Click guess controller
  const handleGuess = useCallback((text, picked) => {
    // Guess not in list
    if (text && !picked) return setAlert(illegalGuessMsg(text))
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

  // Set if we should ignore ArtBox hotkeys (left/right arrow)
  const handleSelect = (isFocused) => { setIgnoreKeys(isFocused || Boolean(openModal)) }
  useEffect(() => { setIgnoreKeys(Boolean(openModal)) }, [openModal])

  return {
    setInfo, artData,
    guesses, correctGuess,
    newGame, ignoreHotkeys,
    alertObj, setAlert,
    openModal, setModal,
    entryProps: { setList, setInfo, handleGuess, handleSelect }
  }
}