'use strict';


const userNumber = prompt('Enter number');

function findMinDivisor(userInput) {
    const number = parseInt(userInput, 10);
    if (isNaN(number) || number < 1) {
        console.log('NaN');
        return;
    }

    if (number === 2 || number === 3) {
        // 2 і 3 є простими числами
        console.log(`Число ${number} є простим.`);
        return;
    }

    let divisor = 2;
    while (divisor <= number) {
        if (number % divisor === 0) {
            break;
        }
        divisor++;
    }
    if (divisor == number) {
        console.log(`Число ${number} є простим.`);
        return;
    }
    console.log(`Найменший дільник числа ${number}: ${divisor}`);
}

findMinDivisor(userNumber);
