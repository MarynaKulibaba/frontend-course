// Task #1
function isValidNumber(number) {
  return typeof number === 'number' && !Number.isNaN(number)
}

const getFactorial = function (number) {
  if (!isValidNumber(number) || number < 0) {
    throw new Error('Invalid input')
  }
  return number > 1 ? number * getFactorial(number - 1) : 1
}

console.log(getFactorial(6))

// Task #2
const pow = function (num, degree) {
  if (!isValidNumber(num) || !isValidNumber(degree)) {
    throw new Error('Invalid input')
  }
  if (num < 0) {
    return degree % 2 === 0 ? pow(-num, degree) : -pow(-num, degree)
  }
  if (degree < 0) {
    return 1 / pow(num, -degree)
  }
  return degree !== 0 ? num * pow(num, degree - 1) : 1
}
console.log(pow(2, 2))
console.log(pow(-2, 3))
console.log(pow(2, -3))
console.log(pow(-2, -3))

// Task #3
const countSumOfPositiveNum = function (a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid input')
  }
  switch (true) {
    case a === 0:
      return b
    case a < 0 && b < 0:
      return -countSumOfPositiveNum(-a, -b)
    case a < 0:
      return countSumOfPositiveNum(a + 1, b - 1)
    default:
      return countSumOfPositiveNum(a - 1, b + 1)
  }
}

console.log(countSumOfPositiveNum(2, 3))
console.log(countSumOfPositiveNum(-2, 3))
console.log(countSumOfPositiveNum(2, -3))
console.log(countSumOfPositiveNum(-2, -4))
