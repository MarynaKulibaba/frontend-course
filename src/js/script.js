'use strict';

function isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
}

function throwIfInvalid(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Invalid input. Please provide valid numbers.');
    }
}

const performOperation = function (operator, a, b) {
    switch (operator) {
        case 'add':
            return addition(a, b);
        case 'sub':
            return subtraction(a, b);
        case 'mult':
            return multiplication(a, b);
        case 'div':
            return division(a, b);
        default:
            throw new Error(
                'Invalid operator. Please choose add, sub, mult, or div.'
            );
    }
};

const getUserOperation = function (promptMessage) {
    const operations = ['add', 'sub', 'mult', 'div'];
    const input = prompt(promptMessage)?.trim().toLowerCase();

    if (!operations.includes(input)) {
        throw new Error('Invalid operator. Please choose add, sub, mult, or div.');
    }

    return input;
};

const getUserInput = function (promptMessage) {
    const input = prompt(promptMessage);
    const parsedInput = parseFloat(input);

    if (!isNumber(parsedInput)) {
        throw new Error('Invalid input. Please provide a valid number.');
    }

    return parsedInput;
};

try {
    const operator = getUserOperation(
        'Enter the operation (add, sub, mult, div):'
    );

    const number1 = getUserInput('Enter the first number:');
    const number2 = getUserInput('Enter the second number:');

    const result = performOperation(operator, number1, number2);
    console.log(`${number1} ${operator} ${number2} = ${result}`);
} catch (e) {
    console.log(e);
}

function addition(a, b) {
    throwIfInvalid(a, b);
    return a + b;
}

function subtraction(a, b) {
    throwIfInvalid(a, b);
    return a - b;
}

function multiplication(a, b) {
    throwIfInvalid(a, b);
    return a * b;
}

function division(a, b) {
    throwIfInvalid(a, b);

    if (b === 0) {
        throw new Error('Cannot divide by zero.');
    }

    return a / b;
}
