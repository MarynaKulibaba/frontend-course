'use strict';


//1.Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
function printNumbers(start, end) {
    let res = '';
    for (let i = start; i <= end; i = i + 0.5) {
        res = `${res + i} `;
    }
    return res;
}
const numbersMessage = printNumbers(20, 30);
console.log(numbersMessage);

//2.Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
function convertUSDToUAH(rate) {
    const start = 10;
    const end = 100;
    let convertedArr = [];

    for (let i = start; i <= end; i = i + 10) {
        let convertedValue = i * rate;
        convertedArr.push({ dollars: i, uah: convertedValue });
    }
    return convertedArr;
}

const exchangeRateUSD = 27;
console.log(convertUSDToUAH(exchangeRateUSD));

//3.Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
function calculateSquare(num) {
    if (!Number.isInteger(num) || num < 0) {
        return '';
    }

    const start = 1;
    const end = 100;
    let result = '';

    for (let i = start; i <= end; i++) {
        if (i ** 2 < num) {
            result = result + i + ' ';
        }
    }
    return result;
}
const number = 56;
console.log('Дз 25.х: ', calculateSquare(number));

//4.Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
function isPrimeNumber(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            //число не є простим
            return false;
        }
    }
    //немає дільників, просту число
    return true;
}

const numToCheck = 13;
isPrimeNumber(numToCheck);
if (isPrimeNumber(numToCheck)) {
    console.log(`${numToCheck} є простим числом.`);
} else {
    console.log(`${numToCheck} не є простим числом.`);
}

//5.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
function isThreeRaisedToPower(number) {
    if (number < 0) return false;

    while (number % 3 === 0) {
        number = number / 3;
    }
    return number === 1;
}

const numberToCheck = 81;
if (isThreeRaisedToPower(numberToCheck)) {
    console.log(`${numberToCheck} можна виразити числом 3 у ступінь.`);
} else {
    console.log(`${numberToCheck} не можна виразити числом 3 у ступінь.`);
}