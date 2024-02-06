const indexOf = function (arr, searchElem) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === searchElem) {
      return i
    }
  }
  return -1
}
console.log(indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))

const lastIndexOf = function (arr, searchElem) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === searchElem) {
      return i
    }
  }
  return -1
}
console.log(lastIndexOf([1, 2, 3, 7, 4, 5, 6, 7, 8, 9, 10], 7))

const find = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      return arr[i]
    }
  }
  return undefined
}
console.log(find([1, 2, 3, 7, 4, 5, 6, 7, 8, 9, 10], (elem) => elem > 2))

const findIndex = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      return i
    }
  }
  return -1
}
console.log(findIndex([1, 2, 3, 7, 4, 5, 6, 7, 8, 9, 10], (elem) => elem > 5))

const includes = function (arr, searchElem) {
  return indexOf(arr, searchElem) !== -1
  // for (let i = 0; i < arr.length; i += 1) {
  // 	if (arr[i] === searchElem) {
  // 		return true;
  // 	}
  // }
  // return false;
}
console.log(includes([1, 2, 3, 7, 4, 5, 6, 7, 8, 9, 10], 100))

const every = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!callback(arr[i])) {
      return false
    }
  }
  return true
}
console.log(every([1, 2, 3, -7, 4, 5, 6, 7, 8, 9, 10], (item) => item > 0))

const some = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      return true
    }
  }
  return false
}
console.log(some([1, 2, 3, -7, 4, 5, 6, 7, 8, 9, 10], (item) => item % 2 === 0))
