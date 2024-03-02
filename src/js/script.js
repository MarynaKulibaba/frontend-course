const ul = document.getElementById('ulId')
const attributes = ul.attributes

const attributesText = []

for (const attribute of attributes) {
  attributesText.push(attribute.textContent)
}

console.log('Array of attributes text :', attributesText)
console.log('Array of attributes name:', Array.from(attributes))

// изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
const myName = 'Marina'
const lastChildElement = ul.lastElementChild
console.log((lastChildElement.textContent = `Hi, My name is ${myName} `))

// Добавить первому элементу li атрибут
// ‘data-my-name‘ со значением в котором будет лежать Ваше имя
const firstLiElement = ul.firstElementChild
firstLiElement.setAttribute('data-my-name', myName)

// Удалить у тега ul атрибут ‘data-dog-tail‘
if (ul.hasAttribute('data-dog-tail')) {
  ul.removeAttribute('data-dog-tail')
}
console.log(attributes)
