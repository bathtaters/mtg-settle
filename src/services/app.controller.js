import { useCallback, useEffect, useMemo, useState } from "react"
import { adaptGuess } from './subservices/utils'
import { maxGuessCount, illegalGuessMsg } from "../assets/constants"
import { FORCE_ERROR } from "../assets/errors"
import fetchAPI from "./subservices/fetch.service"

import { setDefaults, loadGame, newGame, endGame, updateGuesses, nextGameTime } from "./subservices/storage.services"

// Blank array, used for iterating
export const blankArray = [...Array(maxGuessCount)]


export default function useAppController() {
  // Setup state
  const [allSets, setAllSets] = useState([])
  const [solution, setSolution] = useState({ setInfo: {} })
  const [nextGame, setNextGame] = useState()
  const [guesses, setGuesses] = useState([])
  const [correctGuess, setCorrect] = useState(-1)
  const [alertObj, setAlert] = useState({})
  const [openModal, setModal] = useState(null)
  const [ignoreHotkeys, setIgnoreKeys] = useState(false)

  // Set/Load memory
  useEffect(() => { fetchAPI('setList', null, setAlert).then((data) => data && setAllSets(data)) }, [])

  const getGame = () => {
    if (FORCE_ERROR) return setAlert({ message: FORCE_ERROR })
    
    return fetchAPI('solution', () => { newGame(); setModal(null) }, setAlert).then((data) => {
      if (!data) return
      setSolution(data)
      setNextGame(nextGameTime())

      const loaded = loadGame()
      if (!loaded) return
      setGuesses(loaded.guesses)
      setCorrect(loaded.correctGuess)
    })
  }
  useEffect(() => { setDefaults(); getGame() }, [])

  // Refresh game when it expires
  useEffect(() => {
    const timer = nextGame && setTimeout(getGame, nextGame - Date.now() + 10)
    return () => { timer && clearTimeout(timer) }
  }, [nextGame])

  // Click guess controller
  const handleGuess = useCallback((text, picked) => {
    // Guess not in list
    if (text && !picked) return setAlert(illegalGuessMsg(text))
    // Guess is correct
    if (picked.code === solution.setInfo.code) setCorrect(endGame(guesses.length))
    // Game is over
    else if (guesses.length + 1 === maxGuessCount) setCorrect(endGame(-2))
    // Update guess list
    setGuesses((state) => updateGuesses(state.concat(adaptGuess(picked, solution.setInfo.block))))
    
  }, [solution.setInfo.code, solution.setInfo.block, guesses.length])

  // Create list for auto-complete
  // eslint-disable-next-line
  const setList = useMemo(() => allSets.filter(({ name }) => !guesses.some(({ text }) => text === name)), [guesses.length, allSets.length])

  // Set if we should ignore ArtBox hotkeys (left/right arrow)
  const handleSelect = (isFocused) => { setIgnoreKeys(isFocused || Boolean(openModal)) }
  useEffect(() => { setIgnoreKeys(Boolean(openModal)) }, [openModal])

  return {
    solution, guesses, correctGuess,
    nextGame, ignoreHotkeys, getGame,
    alertObj, setAlert,
    openModal, setModal,
    entryProps: { setList, setInfo: solution.setInfo, handleGuess, handleSelect }
  }
}