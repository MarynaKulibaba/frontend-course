;(function () {
  const createTable = (rows, cols) => {
    const table = document.createElement('table')

    let index = 1
    for (let row = 0; row < rows; row += 1) {
      const tr = document.createElement('tr')
      for (let column = 0; column < cols; column += 1) {
        const td = document.createElement('td')
        td.textContent = index
        tr.append(td)
        index += 1
      }
      table.append(tr)
    }

    return table
  }

  const table = createTable(10, 10)
  document.body.append(table)
})()
