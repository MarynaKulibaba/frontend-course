const parseJSON = (json) => {
  try {
    return JSON.parse(json)
  } catch (error) {
    return 'Invalid JSON string'
  }
}
console.log(parseJSON('{"name": "John", "age": 30}'))
console.log(parseJSON('{"name": "John", "age":'))
