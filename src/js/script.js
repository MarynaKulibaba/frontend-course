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
  if (
    surveyNameInput.validity.valueMissing &&
    optionInputs.children.length < 2
  ) {
    console.log('не заповнен імя та менше 2')
  }
}

const createButton = surveyForm.querySelector('.create-btn-survey')
createButton.addEventListener('click', createSurvey)
