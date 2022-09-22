import axios from "axios"
import { getCache, setCache } from "./storage.services"
import getErrorMsg from "../../assets/errors"
import { apiEndpoint } from "../../assets/constants"
import credentials from "../../assets/credentials.json"


export default async function fetchAPI(key, noCacheCb, setError = console.error) {
  if (!(key in apiEndpoint)) throw new Error('Fetching invalid key: '+key)
  let data = getCache(key)
  if (data) return data

  try {
    const res = await axios(credentials.apiUrl + apiEndpoint[key], {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': credentials.apiKey,
      }
    })
    data = res?.data
  } catch (err) { return setError(getErrorMsg(err)) }
  
  if (!data) return setError(getErrorMsg('Empty Fetch'))

  noCacheCb && noCacheCb(data)
  setCache(key, data)
  return getCache(key)
}
