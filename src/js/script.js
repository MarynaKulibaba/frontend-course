;(function () {
  const generateList = (parentElement, array) => {
    if (!Array.isArray(array)) {
      throw new Error('not an array')
    }

    const ul = document.createElement('ul')
    parentElement?.append(ul)

    for (const element of array) {
      const li = document.createElement('li')
      ul.append(li)
      if (!Array.isArray(element)) {
        li.textContent = element
        continue
      }
      generateList(li, element)
    }
    return ul
  }

  let list = generateList(null, [1, 2, 3])
  console.log(list)
  document.body.append(list)

  list = generateList(null, [1, 2, [1.1, 1.2, 1.3], 3, [3.3, 3.4], 4])
  console.log(list)
  document.body.append(list)
})()
