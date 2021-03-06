import { useCallback, useEffect, useState } from "react"
import setList from "../assets/setList.json"
import { setInfoURL, setSymbolKey } from "../assets/constants"
import { loadEncrypted, updateSolution } from "./subservices/storage.services"
import { FORCE_ERROR } from "../assets/errors"

// Get random set
const getRandomEntry = (array) => updateSolution(array[Math.floor(Math.random() * array.length)])

// Fetch set symbol
async function fetchSymbol(setCode, callback) {
  if (FORCE_ERROR) return null

  // Get setData
  const setData = await fetch(setInfoURL(setCode)).then((res) => res.json())
  if (!setData?.[setSymbolKey]) return console.warn("Set unable to be downloaded")

  // Fetch symbol SVG
  const svgCode = await fetch(setData[setSymbolKey]).then((res) => res.text())
    .then((text) => text.replace(/fill="[^"]*"/,'')) // clear pre-set fill

  // Forward to callback
  callback && callback(svgCode)
  return svgCode
}


export default function usePickSet() {
  // Fetch stored set or new random one
  const [ setData, updateSetData ] = useState(loadEncrypted('setInfo') || getRandomEntry(setList))
  
  // Pick random set
  const pickNewSet = useCallback(() => {
    if (FORCE_ERROR) throw new Error(FORCE_ERROR)
    const newSet = getRandomEntry(setList)
    updateSetData(newSet)
    return newSet
  }, [])

  // Load symbol
  useEffect(() => {
    if (!setData.symbol && setData.code)
      fetchSymbol(
        setData.code,
        (symbol) => updateSetData((set) => Object.assign({}, set, { symbol }))
      )

  // eslint-disable-next-line
  }, [setData.code, setData.symbol])

  return [ setData, pickNewSet ]
}
