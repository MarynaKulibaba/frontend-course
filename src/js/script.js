;(function () {
  document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault()
    let message = ''
    const form = document.querySelector('form')
    message = !form.checkValidity()
      ? 'Будь ласка, заповніть усі поля'
      : (message = 'Реєстрація успішна')
    form.append(message)
  })
})()
