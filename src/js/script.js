const reduce = function (arr, callback, initialValue = 0) {
  let accum = initialValue
  for (let i = initialValue; i < arr.length; i += 1) {
    accum = callback(accum, arr[i])
  }
  return accum
}
console.log(reduce([1, 2, 3, 4, 5], (accum, elem) => accum + elem, 0)) // 15
