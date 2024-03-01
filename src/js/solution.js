;(function () {
  const ulElement = document.getElementById('ulId')
  const liElements = ulElement.querySelectorAll('li')

  const textArray = []
  for (const element of liElements) {
    textArray.push(element.textContent)
  }
  console.log('Total elements:', liElements.length)
  console.log('Text array:', textArray)
})()
