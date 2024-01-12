'use strict';

//1
const firstString = prompt('Введіть перший рядок');
const secondString = prompt('Введіть другий рядок');
const thirdString = prompt('Введіть третій рядок');

console.log(firstString + ' ' + secondString + ' ' + thirdString);

//2
const number = 55555;
let numToString = number.toString();
let result = '';

for (let i = 0; i < numToString.length; i++) {
 	result = result + numToString[i] + ' ';
 }
 console.log(result);