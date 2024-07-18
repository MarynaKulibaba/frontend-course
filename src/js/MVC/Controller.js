import Model from './Model.js'
import View from './View.js'

const Controller = {
  init() {
    document
      .getElementById('addTask')
      .addEventListener('click', this.formHandler.bind(this))
    window.addEventListener('load', this.loadedHandler.bind(this))
  },

  formHandler() {
    const inputValue = document.getElementById('task-input').value
    if (!inputValue.trim()) return alert('Lack of data!')
    const newTodo = Model.saveTodoItem(inputValue)
    View.render(Model.todos)
    document.getElementById('task-input').value = ''
  },

  loadedHandler() {
    View.render(Model.todos)
  },

  handleDelete(id) {
    Model.deleteTodoItem(id)
    View.render(Model.todos)
  },

  handleToggle(id) {
    Model.toggleTodoItemDone(id)
    View.render(Model.todos)
  },
}

Controller.init()
export default Controller
