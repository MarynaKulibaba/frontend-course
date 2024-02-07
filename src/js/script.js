const reduce = function (arr, callback, initialValue) {
  if (!Array.isArray(arr) || arr.length <= 0)
    throw new Error('Unexpected array')
  if (typeof callback !== 'function') throw new Error('Unexpected callback')

  let accum = initialValue
  let startIndex = 0
  if (typeof initialValue === 'undefined') {
    accum = arr[0]
    startIndex = 1
  }
  for (let i = startIndex; i < arr.length; i += 1) {
    accum = callback(accum, arr[i])
  }
  return accum
}

const array = [1, 2, 3, 4, 5]
const reduceCallback = (accum, elem) => accum + elem
console.log(reduce(array, reduceCallback, 0))
