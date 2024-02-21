// 1
const products = {
  item1: { name: 'T-shirt', price: 299 },
  item2: { name: 'Jeans', price: 599 },
  item3: { name: 'Sneakers', price: 999 },
  item4: { name: 'Sports Bag', price: 499 },
}

const sellOut = (obj, discount) => {
  const newPrice = (100 - discount) / 100
  const keys = Object.keys(obj)
  return keys.reduce((accum, elem) => {
    const item = obj[elem]
    if (!!item && typeof item === 'object') {
      return {
        ...accum,
        [elem]: {
          name: item.name,
          price: (item.price * newPrice).toFixed(2),
        },
      }
    }
    return accum
  }, {})
}
console.log(products)
const warehouseInHolliday = sellOut(products, 10)
console.log('Cristmass discount', warehouseInHolliday)

// 2
const students = [
  { name: 'John', grade: 85 },
  { name: 'Emily', grade: 92 },
  { name: 'Michael', grade: 78 },
  { name: 'Sarah', grade: 95 },
  { name: 'William', grade: 88 },
]
const filter = (arr) => arr.filter((elem) => elem.grade > 90)
console.log(students)
console.log(filter(students))
