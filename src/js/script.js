// add option
const addOption = () => {
  const optionInputs = document.getElementById('optionInputs')
  const optionCount = optionInputs.children.length + 1

  const div = document.createElement('div')
  div.className = 'option-inputs'

  const label = document.createElement('label')
  label.id = `option${optionCount}`
  label.textContent = `Варіант відповіді ${optionCount}:`

  const input = document.createElement('input')
  input.type = 'text'
  input.id = `option${optionCount}`
  input.required = true

  div.append(label)
  div.append(input)
  optionInputs.append(div)
}

const surveyForm = document.getElementById('survey-form')
const addButton = surveyForm.querySelector('.add-btn-option')
addButton.addEventListener('click', addOption)

// create survey
const createSurvey = () => {
  const optionInputs = document.getElementById('optionInputs')
  const surveyNameInput = document.getElementById('surveyName')
  const message = document.querySelector('.message')
  if (surveyNameInput.validity.valueMissing) {
    message.classList.remove('success')
    message.classList.add('error')
    message.innerText = 'Будь ласка, введіть назву опитування'
  } else if (optionInputs.children.length < 2) {
    message.classList.remove('success')
    message.classList.add('error')
    message.innerText = 'Додайте принаймні два варіанти відповідей'
  } else {
    const surveyResult = document.getElementById('surveyResult')
    surveyResult.style.display = 'block'
    const surveyNameResult = document.getElementById('surveyNameResult')
    const optionsResult = document.getElementById('optionsResult')
    surveyNameResult.textContent = `Питання: ${surveyForm.elements[0].value}`

    const arrInput = Array.from(optionInputs.getElementsByTagName('input'))
    arrInput.forEach((item) => {
      const li = document.createElement('li')
      li.textContent = item.value
      optionsResult.append(li)
    })
  }
}

const createButton = surveyForm.querySelector('.create-btn-survey')
createButton.addEventListener('click', createSurvey)
