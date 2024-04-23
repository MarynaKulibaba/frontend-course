;(function () {
  const container = document.getElementById('todo-items')
  const btnAddTask = document.getElementById('addTask')
  const inputValue = document.getElementById('task-input')
  const todoItemTemplate = document.getElementById('todo-item')

  const items = JSON.parse(localStorage.getItem('todoItems')) || []
  function saveToLocalStorage() {
    localStorage.setItem('todoItems', JSON.stringify(items))
  }

  function render() {
    if (!todoItemTemplate) {
      console.error('Елемент з id="todo-item" не знайдено')
      return
    }
    container.innerHTML = ''
    items.forEach((item, index) => {
      const clone = todoItemTemplate.content
        .querySelector('.todo-item')
        .cloneNode(true)
      const checkboxElement = clone.querySelector('.flag')
      const inputElement = clone.querySelector('.form-control')
      const deleteButton = clone.querySelector('.delete-btn')

      inputElement.value = item.text
      if (item.done) clone.classList.add('done')

      deleteButton.addEventListener('click', () => {
        deleteItem(index)
      })
      checkboxElement.addEventListener('click', () => {
        doneItem(index)
      })

      container.append(clone)
    })
  }

  function deleteItem(index) {
    items.splice(index, 1)
    saveToLocalStorage()
    render()
  }

  function doneItem(index) {
    items[index].done = !items[index].done
    saveToLocalStorage()
    render()
  }

  const addTodo = (text) => {
    if (!text.trim()) return alert('Lack of data!')
    items.push({ text: text, done: false })
    saveToLocalStorage()
    render()
  }

  btnAddTask.addEventListener('click', () => {
    addTodo(inputValue.value)
    inputValue.value = ''
  })

  window.addEventListener('load', render)
})()
