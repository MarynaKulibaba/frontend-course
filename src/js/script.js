const object = {
  name: 'Jack',
  lname: 'Sparrow',
}

const printGreet = function (greet, honor) {
  console.log(`${greet} ${honor}, ${this.name} ${this.lname}`)
}

const myBind = function (func, context) {
  const args = []
  for (let i = 2; i < arguments.length; i += 1) args.push(arguments[i])
  return function () {
    for (let i = 0; i < arguments.length; i += 1) args.push(arguments[i])
    context[func.name] = func
    context[func.name](...args)
    delete context[func.name]
  }
}

const func = myBind(printGreet, object, 'Hi')
console.log(func('Captain'))
