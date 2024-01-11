'use strict';

const userInputNumber = prompt('Enter a number');
const userInputPow = userInputNumber != null ? prompt('Enter pow') : null;

function displayPowNumber(num, pow = 1) {
    num = parseInt(num, 10);
    pow = parseInt(pow, 10);
    if (
        typeof num !== 'number' ||
        isNaN(num) ||
        typeof pow !== 'number' ||
        isNaN(pow)
    ) {
        return 'помилка';
    }
    return Math.pow(num, pow);

}

const resultPow = displayPowNumber(userInputNumber, userInputPow);
alert(resultPow);