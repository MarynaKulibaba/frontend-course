const isFunction = (functionToCheck) =>
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'

const pipe = (value, ...funcs) => {
  if (!funcs.length) {
    throw new Error('pipe expects at least one function')
  }

  let result = value
  for (const func of funcs) {
    if (!isFunction(func)) {
      throw new Error('All arguments must be functions')
    }
    result = func(result)
  }
  return result
}

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ')

const capitalize = (value) =>
  value
    .split(' ')
    .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
    .join(' ')

const appendGreeting = (value) => `Hello, ${value}!`

// Testing with invalid function argument
try {
  pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '')
} catch (error) {
  console.error(error.message) // All arguments must be functions
}

// Testing with valid function arguments
const result = pipe(
  'john_doe',
  replaceUnderscoreWithSpace,
  capitalize,
  appendGreeting
)
console.log(result) // Hello, John Doe!
