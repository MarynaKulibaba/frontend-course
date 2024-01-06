'use strict';

const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);
const isPositiveNumber = (value) => isNumber(value) && value > 0;
const isInteger = (value) =>
    isNumber(value) && Number.isInteger(parseFloat(value));

// 1.
// Вам дано дві змінні x та y, змінювати їх не потрібно.
// За допомогою тернарного оператора порівняйте їх і якщо x більше за y,
// то виведіть фразу: «x більше за y», інакше виведіть фразу: «x не більше, ніж y».

let x = 10;
let y = 7;

let result = x > y ? 'x більше за y' : 'x не більше, ніж y';
alert(result);

// 2.
// Користувач вводить якесь число (num).
// Використовуючи конструкцію if..else, напишіть код, який робить запит: «Введіть число».


//3;
// Напишіть код, який пропонує користувачеві ввести ціле число. Потрібно вивести на екран скільки в тому числі цифр,
// а також позитивне чи негативне. Наприклад, "Число" + num + "однозначне позитивне".
// Достатньо буде визначити, чи є число однозначним, двоцифровим або трицифровим і більше.
// Щоб дізнатися довжину рядка, яку ввів користувач у prompt, потрібно використовувати.

let inputNumber = prompt('Enter a number');
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

let firstInputNumber = prompt('Enter first number');
let secondInputNumber = isNumber(firstInputNumber)
    ? prompt('Enter second number')
    : null;
let thirdInputNumber = isNumber(secondInputNumber)
    ? prompt('Enter third number')
    : null;

if (isNumber(thirdInputNumber)) {
    firstInputNumber = +firstInputNumber;
    secondInputNumber = +secondInputNumber;
    thirdInputNumber = +thirdInputNumber;

    if (
        firstInputNumber > secondInputNumber &&
        firstInputNumber > thirdInputNumber
    ) {
        console.log('перше число');
    } else if (
        secondInputNumber > thirdInputNumber &&
        secondInputNumber > firstInputNumber
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

let firstSideTriangle = prompt('Enter first side');
let secondSideTriangle = isPositiveNumber(firstSideTriangle)
    ? prompt('Enter second side')
    : null;
let thirdSideTriangle = isPositiveNumber(secondSideTriangle)
    ? prompt('Enter third side')
    : null;

if (isPositiveNumber(thirdSideTriangle)) {
    firstSideTriangle = +firstSideTriangle;
    secondSideTriangle = +secondSideTriangle;
    thirdSideTriangle = +thirdSideTriangle;

    let isPossible = false;
    if (firstSideTriangle + secondSideTriangle > thirdSideTriangle) {
        isPossible = true;
    } else if (firstSideTriangle + thirdSideTriangle > secondSideTriangle) {
        isPossible = true;
    } else if (secondSideTriangle + thirdSideTriangle > firstSideTriangle) {
        isPossible = true;
    }
    console.log(isPossible ? 'Triangle is possible' : 'Triangle is not possible');
} else {
    console.log('Invalid input. Please, enter positive numbers.');
}
