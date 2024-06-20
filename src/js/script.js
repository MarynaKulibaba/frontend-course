const iterateArray = (arr) => {
  let index = 0
  return {
    next: function () {
      let result = { done: true }
      if (index < arr.length) {
        result = {
          value: arr[index],
          done: false,
        }
        index += 1
      }
      return result
    },
  }
}
const arrayIterator = iterateArray([11, 12, 13])

console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
