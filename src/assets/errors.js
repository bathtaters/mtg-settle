const generalErrors = {}

const networkErrors = {
  'Failed to fetch': 'Card database is currently down, try back later.',
}


const getErrorMsg = (...errors) => {
  const firstError = errors.find((err) => Boolean(err))
  if (!firstError) return
  if (firstError?.networkError?.message && Object.keys(networkErrors).includes(firstError.networkError.message))
    return networkErrors[firstError.networkError.message]
  if (firstError?.message && Object.keys(generalErrors).includes(firstError.message))
    return generalErrors[firstError.message]
  return firstError?.message
}

export default getErrorMsg