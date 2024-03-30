const greet = function () {
  return `Hello, my name is ${this.name}`
}

const createUser = function (name, age) {
  const user = {
    name: name,
    age: age,
  }
  user.greet = greet
  return user
}

const user1 = createUser('Klara', 17)
const user2 = createUser('John', 28)

console.log(user1)
console.log(user2)

console.log(user1.greet())
user1.name = 'bob'
console.log(user1.greet())

user1.name = 'jhon'
console.log(user1.greet())
user1.name = 'michle'
console.log(user1.greet())
console.log(user2.greet())
