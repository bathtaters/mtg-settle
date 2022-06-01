import { getLocalVar, setLocalVar, rmvLocalVar, encryptData, decryptData } from "./storage.utils"

// Constants
const storageDefaults = {
  visited: false,
  current: {
    guesses: [],
    setInfo: null,
    cards: null,
    correctGuess: -1
  },
  stats: {
    guesses: {}
  }
}

// Exposed services for local storage
//  NOTE: Setters return passed value for func nesting

export function setDefaults() {
  Object.entries(storageDefaults).forEach(([key,val]) => {
    setLocalVar(key, val, false)
  })
}

export function getStats() { return getLocalVar('stats') }

export function isFirstVisit() {
  const visited = getLocalVar('visited')
  if (!visited) setLocalVar('visited', true)
  return !visited
}

export function newGame(cards) {
  setLocalVar('current', Object.assign({},
    storageDefaults.current,
    { cards: encryptData(cards) },
    { setInfo: getLocalVar('current')?.setInfo }
  ))
  return cards
}

export function clearGame() { return rmvLocalVar('current') }

export function updateSolution(setInfo) {
  if (!setInfo) return
  setLocalVar('current', Object.assign({},
    getLocalVar('current') ?? storageDefaults.current,
    { setInfo: encryptData(setInfo) }
  ))
  return setInfo
}

export function loadGame() {
  let currentGame = getLocalVar('current')
  if (!currentGame?.setInfo) return null
  delete currentGame.setInfo
  delete currentGame.cards
  return currentGame
}

export function loadEncrypted(key) {
  return decryptData(getLocalVar('current')?.[key])
}

export function updateGuesses(guesses) {
  setLocalVar('current', Object.assign(getLocalVar('current'), { guesses }))
  return guesses
}

export function endGame(correctGuess) {
  setLocalVar('current', Object.assign(getLocalVar('current'), { correctGuess }))
  
  let stats = getLocalVar('stats')
  stats.guesses[correctGuess] = (stats.guesses[correctGuess] ?? 0) + 1
  setLocalVar('stats', stats)

  return correctGuess
}