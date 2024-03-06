;(function () {
  document.querySelector('button').addEventListener('click', () => {
    const inputValue = document.querySelector('input').value
    const span = document.createElement('span')
    span.innerHTML = inputValue
    document.querySelector('.block').prepend(span)
    document.querySelector('input').value = ''
  })
})()
