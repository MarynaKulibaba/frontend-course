// //1
const array = ['bird', 'snake', 'butterfly', 'kitten']

const filterArr = (arr) => arr.filter((item) => item.length > 5)
console.log(filterArr(array))

// 2
const arrNum = [3, 6, 8, 5, 9, 3]
const sumEvenNum = (arr) =>
  arr.reduce((accum, item) => (item % 2 === 0 ? accum + item : accum), 0)
console.log(sumEvenNum(arrNum))

// 3
const averageArrNum = (arr) =>
  arr.reduce((accum, item) => accum + item, 0) / arr.length
console.log(averageArrNum(arrNum))
