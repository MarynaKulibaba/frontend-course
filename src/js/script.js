'use strict';

const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

let firstOperand = prompt('Enter first number');
let secondOperand = isNumber(firstOperand) ? prompt('Enter second number') : null;

if (isNumber(secondOperand) ) {
    firstOperand = +firstOperand;
    secondOperand = +secondOperand;

    console.log(`${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`);
    console.log(`${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);
    console.log(`${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`);
    console.log(`${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`);
}



