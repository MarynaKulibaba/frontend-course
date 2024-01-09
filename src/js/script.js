'use strict';

//1. Даний масив із числами.
//За допомогою циклу знайдіть суму елементів цього масиву, виведіть її в консоль.
const array = [1, 2, 3, 4, 5];

function calculateArrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(calculateArrSum(array));

// Даний масив із числами. За допомогою циклу знайдіть суму квадратів елементів цього масиву.

function displayPowNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i] ** 2; //Math.pow(arr[i], 2);
    }
    console.log(`Сума квадратів елементів масиву: ${sum}`);
}
displayPowNumbers(array);