'use strict';

const userInputNumber = prompt('Enter a number');
const userInputPow = userInputNumber != null ? prompt('Enter pow') : null;

function displayPowNumber(num, pow = 1) {
     const parsedNum = parseInt(num, 10);
     const parsedPow = parseInt(pow, 10);
    if (
        typeof parsedNum !== 'number' ||
        isNaN(parsedNum) ||
        typeof parsedPow !== 'number' ||
        isNaN(parsedPow)
    ) {
        return 'помилка';
    }
    return Math.pow(parsedNum, parsedPow);

}

const resultPow = displayPowNumber(userInputNumber, userInputPow);
alert(resultPow);