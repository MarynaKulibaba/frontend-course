'use strict';

const arr = [1, 2, 3, -1, -2, -3, -0];

function isValidArray(arr) {
    return Array.isArray(arr) && arr.length > 0;
}

function getPositiveNumbers(array) {
    const arrPositiveNum = [];

    if (!isValidArray(array)) {
        alert('Input arrays is empty');
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 || array[i] === 0 && !Object.is(array[i], -0)) {
            arrPositiveNum.push(array[i]);
        }
    }

    return isValidArray(arrPositiveNum) ? arrPositiveNum : null;
}
console.log(getPositiveNumbers(arr) ?? 'Array is empty');