;(() => {
  const form = document.querySelector('#login-form')
  const button = form.querySelector('button[type=submit]')
  const message = document.querySelector('.message')
  button.addEventListener('click', (event) => {
    event.preventDefault()
    if (form.checkValidity()) {
      message.classList.remove('error')
      message.classList.add('success')
      message.innerText = 'Реєстрація успішна'
    } else {
      message.classList.remove('success')
      message.classList.add('error')
      message.innerText = 'Будь ласка, заповніть усі поля'
    }
  })
})()
