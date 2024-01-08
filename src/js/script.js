'use strict';

'use strict';
//1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
function printNumbers(start, end) {
    let result = '';
    for (let i = start; i <= end; i++) {
        result = result + i + ', ';
    }
    //взяти з початку рядка до кінця не включаючи останій символ.
    result = result.slice(0, -1);
    return result;
}
const numbersMessage = printNumbers(10, 20);
console.log(numbersMessage);

// 2. Вивести квадрати чисел від 10 до 20.
function displayPowNumbers(start, end) {
    let result = '';
    for (let i = start; i <= end; i++) {
        result = result + i ** 2 + ', ';
    }

    result = result.slice(0, -1);
    return result;
}
const powNumbersMessage = displayPowNumbers(10, 20);
console.log(powNumbersMessage);

//3. Вивести таблицю множення на 7.
function showMultiplicationTable(multiplier) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${multiplier} = ${i * multiplier}`);
    }
}
showMultiplicationTable(7);

//4. Знайти суму всіх цілих чисел від 1 до 15.
function calcSum(start, end) {
    let sumNumber = 0;
    for (let i = start; i <= end; i++) {
        sumNumber = sumNumber + i;
    }
    return sumNumber;
}

// const sum = calcSum(1, 15);
// console.log(sum);
const startOfRange = 1;
const endOfRange = 15;
console.log(
    `Сума всіх цілих чисел від ${startOfRange} до ${endOfRange}: ${calcSum(
        startOfRange,
        endOfRange
    )}`
);

//5.Знайти добуток усіх цілих чисел від 15 до 35.
function product(start, end) {
    let productNum = 1;
    for (let i = start; i <= end; i++) {
        productNum = productNum * i;
    }
    return productNum;
}

const productResult = product(15, 35);
console.log(productResult);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
function integerMean(start, end) {
    let sum = 0;
    let mean;

    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    mean = sum / (end - start + 1);
    return mean;
}

const resultMean = integerMean(1, 500);
console.log(`Середнє арифметичне всіх цілих чисел від 1 до 500: ${resultMean}`);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
function findEvenSum(start, end) {
    let res = 0;

    for (let i = start; i <= end; i++) {
        res = i % 2 === 0 ? res + i : res;
    }
    return res;
}

const resultEvenNum = findEvenSum(30, 80);
console.log(resultEvenNum);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
function findMultipleOfThree(start, end) {
    let res = [];

    for (let i = start; i <= end; i++) {
        if (i % 3 === 0) {
            res.push(i);
        }
    }
    return res;
}

const resultOfMultiple = findMultipleOfThree(100, 200);
console.log(`Числа в діапазоні від 100 до 200 кратні 3: ${resultOfMultiple}`);

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники
//10. Визначити кількість його парних дільників.
//11. Знайти суму його парних дільників.
function findDevisors(num) {
    let count = 0;
    let sum = 0;
    let divisors = [];

    if (Number.isInteger(num) && num >= 0) {
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
                if (i % 2 === 0) {
                    count++;
                    sum = sum + i;
                }
            }
        }
    }

    return {
        divisors: divisors,
        evenCount: count,
        evenSum: sum,
    };
}
const num = 34;
const divisorsResult = findDevisors(num);
console.log(
    `Дільники числа ${num}: ${divisorsResult.divisors}.\nКількість парних дільників: ${divisorsResult.evenCount}.\nСума парних дільників: ${divisorsResult.evenSum} `
);

//12. Надрукувати повну таблицю множення від 1 до 10.
//1
function printMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        let line = '';
        for (let j = 1; j <= 10; j++) {
            line +=
                `${j.toString().padStart(2)} * ` +
                `${i.toString().padEnd(2, ' ')} = ` +
                `${(i * j).toString().padEnd(3, ' ')} | `;
        }
        console.log(line.slice(0, -2));
    }
}

printMultiplicationTable();

//2
// function printMultiplicationTable() {
// 	for (let i = 1; i <= 10; i++) {
// 		for (let j = 1; j <= 10; j++) {
// 			console.log(`${i} * ${j} = ${i * j}`);
// 		}
// 	}
// }

// printMultiplicationTable();

