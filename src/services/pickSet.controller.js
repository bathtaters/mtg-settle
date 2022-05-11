import { useEffect, useState } from "react"
import setList from "../assets/setList.json"
import { setInfoURL, setSymbolKey } from "../assets/constants"

// DEBUG BLOCK
import { getDebug } from "../assets/constants"
const { setData: debugData, enable: debugging } = getDebug()

// Get random set
const getRandomEntry = (array) => array[Math.floor(Math.random() * array.length)]

// Fetch set symbol
async function fetchSymbol(setCode, callback) {
  // Get setData
  const setData = await fetch(setInfoURL(setCode)).then((res) => res.json())
  if (!setData?.[setSymbolKey]) return console.warn("Set unable to be downloaded")

  // Fetch symbol SVG
  const imageBlob = await fetch(setData[setSymbolKey]).then((res) => res.blob())
  const imageURL = URL.createObjectURL(imageBlob)

  // Forward to callback
  callback && callback(imageURL)
  return imageURL
}


export default function usePickSet() {
  const [ setData, updateSetData ] = useState(debugging ? debugData : getRandomEntry(setList))
  
  useEffect(() => {
    // Async load symbol
    if (!setData.symbol && setData.code)
      fetchSymbol(setData.code, (symbol) => updateSetData((set) => Object.assign({}, set, { symbol })))

  // eslint-disable-next-line
  }, [setData.code])

  return setData
}
