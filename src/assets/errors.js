// Force-disable fetching and display this error
export const FORCE_ERROR = 0//"The card database we use is currently down due to an attack, you won't be able to play until it's back up."

const serverDown = 'Settle database is experiencing issues, try back later.'

const errorDict = {
  'Network Error': serverDown,
  'Empty Fetch': serverDown,
}


const getErrorMsg = (...errors) => {
  if (FORCE_ERROR) return { message: FORCE_ERROR }

  const firstError = errors.find((err) => Boolean(err))
  if (!firstError) return
  if (firstError?.message && firstError.message in errorDict)
    return { message: errorDict[firstError.message] }
  if (firstError?.message) return { message: firstError?.message }
  return
}

export default getErrorMsg