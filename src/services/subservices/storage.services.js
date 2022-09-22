import { getLocalVar, setLocalVar, rmvLocalVar, encryptData, decryptData } from "./storage.utils"

// Constants
const storageDefaults = {
  visited: false,
  current: {
    guesses: [],
    correctGuess: -1
  },
  stats: {
    guesses: {}
  },
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

export function getCache(key) {
  const data = getLocalVar(key)
  if (!data) return
  if (data.expires && data.expires < Date.now()) return rmvLocalVar(key)
  if (typeof data.data === 'string') return decryptData(data.data)
  return data.data
}

export function setCache(key, payload) {
  if (payload.expiresIn)
    payload.expires = Date.now() + payload.expiresIn
  if (payload.secret)
    payload.data = encryptData(decryptData(payload.data, payload.secret))
  delete payload.expiresIn
  delete payload.secret

  setLocalVar(key, payload, true)
}

export function newGame() {
  setLocalVar('current', storageDefaults.current, true)
}

export function loadGame() {
  let currentGame = getLocalVar('current')
  return currentGame
}

export function nextGameTime() {
  const solution = getLocalVar('solution')
  return solution?.expires
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