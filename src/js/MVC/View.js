// eslint-disable-next-line import/no-cycle
import Controller from './Controller.js'

const View = {
  container: document.getElementById('todo-items'),
  template: document.getElementById('todo-item'),

  render(items) {
    this.container.innerHTML = ''
    items.forEach((item) => {
      const clone = this.template.content.cloneNode(true)
      const wrapper = clone.querySelector('.todo-item')
      wrapper.setAttribute('data-todo-id', item.id)
      const checkbox = wrapper.querySelector('.flag')
      const input = wrapper.querySelector('.form-control')
      const deleteBtn = wrapper.querySelector('.delete-btn')

      input.value = item.text
      if (item.done) wrapper.classList.add('done')

      deleteBtn.addEventListener('click', () =>
        Controller.handleDelete(item.id)
      )
      checkbox.addEventListener('click', () => Controller.handleToggle(item.id))

      this.container.append(wrapper)
    })
  },
}
export default View
