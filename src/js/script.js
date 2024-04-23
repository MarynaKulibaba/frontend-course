;(function () {
  const container = document.getElementById('container')
  const btnAddTask = document.getElementById('addTask')
  const inputValue = document.getElementById('task-input')
  const todoItemTemplate = document.getElementById('todo-item')
  // const todoItemsContainer = document.getElementById('todo-items')

  // 1. Use templates
  // 2. "Modules": manager, editor, item(s) editor

  const items = JSON.parse(localStorage.getItem('todoItems')) || []
  // const items = []
  function updateLocalStorage() {
    localStorage.setItem('todoItems', JSON.stringify(items))
  }
  const deleteItem = (index) => {
    items.splice(index, 1)
    updateLocalStorage()
    render()
  }
  const render = () => {
    // container.innerHTML = ''
    // render items into container, use todoItemTemplate
    for (let item of items) {
      console.log(item)
    }

    if (!todoItemTemplate) {
      console.error('Елемент з id="todo-item" не знайдено')
      return
    }

    items.forEach((item, index) => {
      const clone = document.importNode(todoItemTemplate.content, true)
      const inputElement = clone.querySelector('.form-control')
      const deleteButton = clone.querySelector('.delete-btn')
      inputElement.value = item.text

      deleteButton.addEventListener('click', (e) => {
        deleteItem(index)
      })

      container.append(clone)
    })
  }

  const addTodo = (text) => {
    if (!text.trim()) return alert('Lack of data!')
    items.push({ text: text, done: false })
    updateLocalStorage()
    // localStorage.setItem('todoItems', JSON.stringify(items))
    render()
  }

  btnAddTask.addEventListener('click', () => {
    addTodo(inputValue.value)
    inputValue.value = ''
  })
  window.addEventListener('load', render)
})()

// manager
//  - render
//  - keep collection of tasks
//    - item editor

// editor
//  - validate
//  - add to manager
