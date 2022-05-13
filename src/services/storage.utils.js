// Constants
const storagePrefix = 'mtg-settle-'
const encryptionSecret = 'GontiIsOurLordAndSavior'
const maxCharRange = 0xFF // Latin-1

// Main accessors
export const getLocalVar = (key) => JSON.parse(localStorage.getItem(storagePrefix + key))
export const rmvLocalVar = (key) => localStorage.removeItem(storagePrefix + key)
export const setLocalVar = (key, value, overwrite = true) => {
  if (!overwrite && localStorage.getItem(storagePrefix + key) != null) return -1
  localStorage.setItem(storagePrefix + key, JSON.stringify(value))
}

// Encryption
const limitChar = (a, n = maxCharRange) => ((a % n) + n) % n // Keep chars in range
const normalize = (str) => str.normalize('NFKD').replace(/[\u0300-\u036F]/g, '')

export const encryptData = (data, secret = encryptionSecret) => {
  if (!data) return data
  let result = [], str = normalize(JSON.stringify(data))
  for (let i = 0; i < str.length; i++) {
    result.push(limitChar(str.charCodeAt(i) + secret.charCodeAt(i % secret.length)))
  }
  return btoa(String.fromCharCode(...result))
}
export const decryptData = (string, secret = encryptionSecret) => {
  if (!string) return string
  let result = [], data = atob(string)
  for (let i = 0; i < data.length; i++) {
    result.push(limitChar(data.charCodeAt(i) - secret.charCodeAt(i % secret.length)))
  }
  return JSON.parse(String.fromCharCode(...result))
}
