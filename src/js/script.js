const isValid = function (urlAddress, name, value) {
  const isUrlValid =
    urlAddress && typeof urlAddress === 'string' && urlAddress !== ''
  const isNameValid = name && typeof name === 'string' && name !== ''
  const isValueValid = value && typeof value === 'string' && value !== ''

  return isUrlValid && isNameValid && isValueValid
}

const updateQueryString = function (url, key, value) {
  const isValidInput = isValid(url, key, value)
  if (!isValidInput) {
    throw new Error('Invalid input parameters.')
  }
  const urlAddress = new URL(url)
  urlAddress.searchParams.set(key, value)
  return urlAddress.href
}

console.log(
  updateQueryString(
    'https://yabloki.ua/catalog-search/result/?',
    'query',
    'phone'
  )
)
