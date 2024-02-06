const addOne = (x) => x + 1
const addTwo = (x) => x + 2
const square = (x) => x * x

const callbacks = [addOne, addTwo, square]

const runCallbacks = function (arr, value) {
  let res = value
  for (let i = 0; i < arr.length; i += 1) {
    res = arr[i](res)
  }
  return res
}
const initialValue = 1
const result = runCallbacks(callbacks, initialValue)
console.log(result)

// 2
const double = (x) => x * 2
const pow = (x) => x ** 2
const negate = (x) => x - 1

const composeFunctions = function (...args) {
  const func = args
  return function (value) {
    let res = value
    for (let i = func.length - 1; i >= 0; i -= 1) {
      res = func[i](res)
    }
    return res
  }
}
const composedFunction = composeFunctions(double, pow, negate)
const result2 = composedFunction(2)
console.log(result2)
