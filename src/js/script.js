import jsonData from './data.js'

function* iterateObject(usersData) {
  for (let i = 0; i < usersData.length; i += 1) {
    for (const key in usersData[i]) {
      if (typeof usersData[i][key] !== 'object') {
        yield {
          [key]: usersData[i][key],
        }
      }
    }
  }
}
const generator = iterateObject(jsonData)
// console.log(generator.next().value)

const ul = document.createElement('ul')
document.body.append(ul)
function printObjects() {
  const { value, done } = generator.next()
  if (!done) {
    const li = document.createElement('li')
    li.textContent = JSON.stringify(value)
    ul.appendChild(li)
    setTimeout(printObjects, 500)
  }
}
printObjects()
