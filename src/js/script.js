const surveyForm = document.getElementById('survey-form')
const addButton = surveyForm.querySelector('.add-btn-option')
const createButton = surveyForm.querySelector('.create-btn-survey')
const optionInputs = document.getElementById('optionInputs')
const surveyNameInput = document.getElementById('surveyName')
const message = document.querySelector('.message')
const surveyResult = document.getElementById('surveyResult')
const surveyNameResult = document.getElementById('surveyNameResult')
const optionsResult = document.getElementById('optionsResult')
const arrInput = () => Array.from(optionInputs.getElementsByTagName('input'))

// add option
const addOption = () => {
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
addButton.addEventListener('click', addOption)

// create survey
const renderSurveyResult = () => {
  surveyForm.style.display = 'none'
  surveyResult.style.display = 'block'
  surveyNameResult.textContent = `Питання: ${surveyForm.elements[0].value}`

  arrInput().forEach((item) => {
    const li = document.createElement('li')
    li.textContent = item.value
    optionsResult.append(li)
  })
}

const createSurvey = () => {
  try {
    if (surveyNameInput.validity.valueMissing) {
      throw new Error('Будь ласка, введіть назву опитування')
    }
    if (optionInputs.children.length < 2) {
      throw new Error('Додайте принаймні два варіанти відповідей')
    }
    if (arrInput().some((e) => e.value.length === 0)) {
      throw new Error('Заповніть варіанти відповідей')
    }
  } catch (e) {
    message.classList.remove('success')
    message.classList.add('error')
    message.innerText = e.message
    return
  }
  renderSurveyResult()
}
createButton.addEventListener('click', createSurvey)

addOption()
