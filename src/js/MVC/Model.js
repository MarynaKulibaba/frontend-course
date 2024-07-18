const Model = {
  key: 'todoItems',

  get todos() {
    const data = JSON.parse(localStorage.getItem(this.key))
    return data ? data : []
  },

  set todos(todoItemsArray) {
    localStorage.setItem(this.key, JSON.stringify(todoItemsArray))
  },

  addTodoItem(text) {
    const todos = this.todos
    const newItem = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      text,
      done: false,
    }
    todos.push(newItem)
    this.todos = todos
    return newItem
  },

  deleteTodoItem(id) {
    const todos = this.todos.filter((item) => item.id !== id)
    this.todos = todos
  },

  toggleTodoItemDone(id) {
    const todos = this.todos.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    )
    this.todos = todos
  },
}
export default Model
