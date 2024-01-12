'use strict';


function repeatCharacter(character, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += character;
    }
    return result;
}

function padString(value, length, char, appendSide = false) {
    if (value == undefined) {
        return `Помилка, відсутній аргумент номер 1`;
    }
    if (length == undefined) {
        return `Помилка, відсутній аргумент номер 2`;
    }
    if (char == undefined) {
        return `Помилка, відсутній аргумент номер 3`;
    }
    if (appendSide == undefined) {
        return `Помилка, відсутній аргумент номер 4`;
    }
    if (typeof appendSide !== 'boolean') {
        return 'Помилка, boolean тип має бути типу boolean';
    }

    let resultString = '';


    if (value.length < length) {
    	let paddingLength = length - value.length;
    	const padding = repeatCharacter(char, paddingLength);
    	resultString = appendSide ? padding + value : value + padding;
    	return resultString;
    }
    if (length < value.length) {
    	resultString = value.substr(0, length);
    	return resultString;
    }
    return value;
}

// console.log(padString());
console.log(padString(111, 12));
console.log(padString('привіт', 8, '*'));
console.log(padString('привіт', 7, '*', true));
console.log(padString('привіт', 6, '*'));