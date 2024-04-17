const obj = {
  name: 'David',
  lname: 'Jones',
}
const arr = ['Hello']

const printGreetingtoUser = function (greet) {
  console.log(`${greet}, ${this.name} ${this.lname}`)
}

const myApply = function (func, objContext, arg) {
  const functionName = func.name || 'anonymousFunction'
  objContext[functionName] = func
  objContext[functionName](...arg)
  delete objContext[functionName]
}

console.log(myApply(printGreetingtoUser, obj, arr))
