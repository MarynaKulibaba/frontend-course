let index = 0
const iterateArray = (arr) => {
  return {
    next: function () {
      if (index < arr.length) {
        return {
          value: arr[index],
          done: false,
        }
      }
      return {
        done: true,
      }
    },
  }
}
const arrayIterator = iterateArray([11, 12, 13])
// let result = arrayIterator.next()
console.log(arrayIterator.next())
index += 1
console.log(arrayIterator.next())
index += 1
console.log(arrayIterator.next())
index += 1
console.log(arrayIterator.next())
