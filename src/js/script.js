'use strict';

const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);
const isPositiveNumber = (value) => isNumber(value) && value > 0;
const isInteger = (value) =>
    isNumber(value) && Number.isInteger(parseFloat(value));

// 1.
// Вам дано дві змінні x та y, змінювати їх не потрібно.
// За допомогою тернарного оператора порівняйте їх і якщо x більше за y,
// то виведіть фразу: «x більше за y», інакше виведіть фразу: «x не більше, ніж y».

const x = 10;
const y = 7;

const result = x > y ? 'x більше за y' : 'x не більше, ніж y';
alert(result);

// 2.
// Користувач вводить якесь число (num).
// Використовуючи конструкцію if..else, напишіть код, який робить запит: «Введіть число».


//3;
// Напишіть код, який пропонує користувачеві ввести ціле число. Потрібно вивести на екран скільки в тому числі цифр,
// а також позитивне чи негативне. Наприклад, "Число" + num + "однозначне позитивне".
// Достатньо буде визначити, чи є число однозначним, двоцифровим або трицифровим і більше.
// Щоб дізнатися довжину рядка, яку ввів користувач у prompt, потрібно використовувати.

const inputNumber = prompt('Enter a number');
if (isInteger(inputNumber)) {
    const sign = +inputNumber >= 0 ? 'позитивне' : 'негативне';
    let message = '';
    switch (('' +Math.abs(inputNumber)).length) {
        case 1:
            message = 'однозначне';
            break;
        case 2:
            message = 'двозначне';
            break;
        case 3:
            message = 'трьохзначне';
            break;
        case 4:
            message = 'чотирьохзначне';
            break;
        default:
            message = "п'яти чи більш ніж п'ятизначне";
    }
    message = `${message} ${sign} число`;
    alert(message);
} else {
    console.log('Invalid input. Please enter a integer number.');
}

// 4.
// Визначити яке з трьох, введених користувачем, чисел максимальне та вивести його на екран.Користувач вводить по черзі через prompt числа.
// Використовуючи конструкцію if..else, напишіть код, який повинен визначати, яке із введених чисел є найбільшим.

const firstInputNumber = prompt('Enter first number');
const secondInputNumber = isNumber(firstInputNumber)
    ? prompt('Enter second number')
    : null;
const thirdInputNumber = isNumber(secondInputNumber)
    ? prompt('Enter third number')
    : null;

if (isNumber(thirdInputNumber)) {
	const firstNumber =  +firstInputNumber;
	const secondNumber = +secondInputNumber;
    const thirdNumber = +thirdInputNumber;

    if (
        firstNumber > secondNumber &&
        firstNumber > thirdNumber
    ) {
        console.log('перше число');
    } else if (
        secondNumber > thirdNumber &&
        secondNumber > firstNumber
    ) {
        console.log('друге число');
    } else {
        console.log('третє число');
    }
} else {
    console.log('Invalid input. Please enter positive numbers.');
}

// 5.
// У трикутника сума будь-яких двох сторін має бути більшою за третю. Інакше дві сторони просто <ляжуть> на третю та трикутника не вийде.
// Користувач вводить по черзі через prompt довжини трьох сторін. Використовуючи конструкцію if..else, напишіть код, який повинен визначати,
// чи трикутник може існувати при таких довжинах.
// Т. е. потрібно порівняти суми двох будь-яких сторін з третьою стороною, що залишилася.
// Щоб трикутник існував, сума завжди має бути більшою за окрему сторону.

const firstSideTriangle = prompt('Enter first side');
const secondSideTriangle = isPositiveNumber(firstSideTriangle)
    ? prompt('Enter second side')
    : null;
const thirdSideTriangle = isPositiveNumber(secondSideTriangle)
    ? prompt('Enter third side')
    : null;

if (isPositiveNumber(thirdSideTriangle)) {
	const firstSide = +firstSideTriangle;
	const secondSide = +secondSideTriangle;
	const thirdSide = +thirdSideTriangle;

    let isPossible = false;
    if (firstSide + secondSide > thirdSide) {
        isPossible = true;
    } else if (firstSide + thirdSide > secondSide) {
        isPossible = true;
    } else if (secondSide + thirdSide > firstSide) {
        isPossible = true;
    }
    console.log(isPossible ? 'Triangle is possible' : 'Triangle is not possible');
} else {
    console.log('Invalid input. Please, enter positive numbers.');
}
