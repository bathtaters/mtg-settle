// Force-disable fetching and display this error
export const FORCE_ERROR = 0//"The card database we use is currently down due to an attack, you won't be able to play until it's back up."

const mtgjsonDown = 'Card database is currently down, try back later.'

const generalErrors = {}

const networkErrors = {
  'Load failed': mtgjsonDown,
  'Failed to fetch': mtgjsonDown,
  'Preflight response is not successful': mtgjsonDown,
  'NetworkError when attempting to fetch resource.': mtgjsonDown,
}


const getErrorMsg = (...errors) => {
  if (FORCE_ERROR) return FORCE_ERROR

  const firstError = errors.find((err) => Boolean(err))
  if (!firstError) return
  if (firstError?.networkError?.message && Object.keys(networkErrors).includes(firstError.networkError.message))
    return networkErrors[firstError.networkError.message]
  if (firstError?.message && Object.keys(generalErrors).includes(firstError.message))
    return generalErrors[firstError.message]
  return firstError?.message
}

export default getErrorMsg