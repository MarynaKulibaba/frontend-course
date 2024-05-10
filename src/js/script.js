const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value)

const checkNumber = (input) => {
  let message = ''
  try {
    message = 'Введіть число!'
    if (isNumber(input.value)) {
      message = +input.value % 2 === 0 ? 'Парне число' : 'Не парне число'
    }
  } catch (error) {
    message = `Невірне значення: ${error.message}`
  }
  alert(message)
}
