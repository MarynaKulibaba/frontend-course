// 'use strict'

const user = {
  name: 'Jack',
  age: 45,
}

Object.defineProperties(user, {
  name: { writable: false },
  age: { enumerable: false },
})

for (const key in user) {
  console.log(key)
}
console.log(Object.keys(user))
console.log('')

// Розширене Завдання:
Object.defineProperty(user, 'fullName', {
  get: function () {
    return `${this.name} ${this.surname}`
  },
  set: function (value) {
    if (value?.trim() !== 'undefined') {
      this.surname = value
    }
  },
})

console.log((user.surname = "Daniel's"))
console.log(user.fullName)
console.log('')

// Додаткове Завдання:
// Object.freeze() - метод, який використовується для заморожування об’єкта, що робить його незмінним.
// Заморожений об’єкт не може бути модифікований чи розширений, включаючи зміну властивостей, додавання нових властивостей або видалення існуючих.
// Стосовно властивостей даних у заморожених об'єктів — їхні значення неможливо змінити,
// адже значенням їхніх атрибутів writable та configurable встановлюється false. У строгому режимі TypeError або проігнорований.
const obj = {
  x: 10,
  y: 20,
}
Object.freeze(obj)
obj.x = 15 // Throws an error in strict mode: [Uncaught TypeError: Cannot assign to read only property 'x' of object '#<Object>']
console.log(obj.x) // Output: 10
