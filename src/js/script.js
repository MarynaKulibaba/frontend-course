// const addTask = () => {
//   const taskInput = document.getElementById('taskInput').value
//   if (taskInput.trim() !== '') {
//     const taskList = document.getElementById('taskList')
//     const newTask = document.createElement('li')
//     const checkbox = document.createElement('input')
//     checkbox.type = 'checkbox'
//     checkbox.addEventListener('change', updateCheckboxStyle)
//     const taskText = document.createElement('span')
//     taskText.textContent = taskInput
//     newTask.appendChild(checkbox)
//     newTask.appendChild(taskText)
//     taskList.appendChild(newTask)
//     document.getElementById('taskInput').value = ''
//   }
// }
//
// function updateCheckboxStyle(event) {
//   const checkbox = event.target
//   const listItem = checkbox.parentElement
//   if (checkbox.checked) {
//     listItem.style.color = 'grey'
//     listItem.style.textDecoration = 'line-through'
//   } else {
//     listItem.style.color = 'black'
//   }
// }
const container = document.getElementById('container')
const btnAddTask = document.getElementById('addTask')
const inputValue = document.getElementById('task-input')
const todoItemTemplate = document.getElementById('todo-item')
// const todoItemsContainer = document.getElementById('todo-items')

// 1. Use templates
// 2. "Modules": manager, editor, item(s) editor

const items = []

const render = () => {
  // render items into container, use todoItemTemplate
  for (let item of items) {
    console.log(item)
  }

  if (!todoItemTemplate) {
    console.error('Елемент з id="todo-item" не знайдено')
    return
  }

  const clone = document.importNode(todoItemTemplate.content, true)
  const inputElement = clone.querySelector('.form-control')
  inputElement.value = inputValue.value
  container.append(clone)
}

const addTodo = (text) => {
  items.push({ text: text, done: false })
  render()
}

btnAddTask.addEventListener('click', (e) => {
  addTodo(inputValue.value)
  inputValue.value = ''
})

// manager
//  - render
//  - keep collection of tasks
//    - item editor

// editor
//  - validate
//  - add to manager
