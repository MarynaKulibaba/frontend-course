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
const calculateMathOperations = function (firstOperand, secondOperand) {
    const add = firstOperand + secondOperand;
    const sub = firstOperand - secondOperand;
    const multiply = firstOperand * secondOperand;
    const division = firstOperand / secondOperand;

    const result = [];
    result.push(`${firstOperand} + ${secondOperand} =${add}`);
    result.push(`${firstOperand} - ${secondOperand} =${sub}`);
    result.push(`${firstOperand} * ${secondOperand} =${multiply}`);
    result.push(`${firstOperand} / ${secondOperand} =${division}`);
    return result;
};

const userFirstNumber = getNumberFromUserInput('Enter first number');
const userSecondNumber = getNumberFromUserInput('Enter second number');

const result = calculateMathOperations(userFirstNumber, userSecondNumber);
alert(
    `Користувач ввів ${userFirstNumber} і ${userSecondNumber}:\n${result.join(
        '\n'
    )}`
);