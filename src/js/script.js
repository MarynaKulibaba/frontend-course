'use strict';

//Напишіть програму, яка знаходить суму всіх непарних чисел в діапазоні від 1 до 20.
// Використовуйте цикл `for`, а також мітку для визначення суми і переривання цикла,
//якщо зустрічено парне число. Виведіть суму непарних чисел на екран

function findOddSumNum(start, end) {
    let sum = 0;

    next: for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            continue next;
        }
        sum = sum + i;
    }
    return sum;
}
console.log('Мітки в циклах: ', findOddSumNum(1, 20));