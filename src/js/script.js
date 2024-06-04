;(function () {
  const DataLocalStorageKey = 'formData'
  const form = document.getElementById('form')
  const container = document.getElementById('container')
  const formFile = document.querySelector('input[name="file"]')
  let fileData = ''

  const arrayBufferToBase64 = (buffer) => {
    let binary = ''
    const bytes = new Uint8Array(buffer)
    for (let i = 0; i < bytes.byteLength; i += 1) {
      binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
  }

  const readFile = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      fileData = arrayBufferToBase64(reader.result)
    })
    reader.addEventListener('error', () => {
      fileData = btoa('ERROR: Error reading file')
    })
    reader.readAsArrayBuffer(file)
  }

  const saveDataToLocalStorage = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    data.delete('file')
    const entries = Object.fromEntries(data.entries())
    entries.file = fileData
    localStorage.setItem(DataLocalStorageKey, JSON.stringify(entries))
  }

  const loadDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem(DataLocalStorageKey))
    container.innerHtml = ''

    if (!data) {
      container.innerText = 'Дані відсутні або порожні.'
      return
    }

    const ul = document.createElement('ul')
    ul.className = 'list-group'
    for (const key in data) {
      let value = data[key]
      if (key === 'file') {
        value = `<img width="200px" src="data:image/png;base64, ${value}" alt="Image" />`
      }
      ul.innerHTML += `<li class="list-group-item">${key} : ${value}</li>`
    }
    container.append(ul)
  }

  formFile?.addEventListener('change', readFile)
  form?.addEventListener('submit', saveDataToLocalStorage)
  if (container) {
    document.addEventListener('DOMContentLoaded', loadDataFromLocalStorage)
  }
})()
