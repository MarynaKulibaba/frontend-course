'use strict';

const isValidNumber = function (value) {
    return typeof value === 'number' && !isNaN(value);
};

const getNumberFromUserInput = function (promptMessage) {
    const input = prompt(promptMessage);
    const number = parseInt(input, 10);

    if (!isValidNumber(number)) {
        throw new Error('Invalid input. Please provide a valid number.');
    }

    return number;
};

try {
    const first = getNumberFromUserInput('Enter a number');
    const second = getNumberFromUserInput('Enter second');
    const third = getNumberFromUserInput('Enter third');

    const average = (first + second + third) / 3;
    console.log(`The average is: ${average}`);
} catch (e) {
    console.error(e);
}