// Функція для додавання нового завдання
const addTask = () => {
  const taskInput = document.getElementById('taskInput').value
  if (taskInput.trim() !== '') {
    const taskList = document.getElementById('taskList')
    const newTask = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', updateCheckboxStyle)
    const taskText = document.createElement('span')
    taskText.textContent = taskInput
    newTask.appendChild(checkbox)
    newTask.appendChild(taskText)
    taskList.appendChild(newTask)
    document.getElementById('taskInput').value = ''
  }
}

function updateCheckboxStyle(event) {
  const checkbox = event.target
  const listItem = checkbox.parentElement
  if (checkbox.checked) {
    listItem.style.color = 'grey'
    listItem.style.textDecoration = 'line-through'
  } else {
    listItem.style.color = 'black'
  }
}

// Додавання обробників подій для кнопки "Додати завдання"
document.getElementById('addTaskButton').addEventListener('click', addTask)
