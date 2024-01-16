'use strict';

function padString(str, length, char, right = true) {
	if(typeof str!== 'string') throw new Error ('Str arg should be a string');
	if(typeof length !== 'number' || isNaN(length)) throw new Error ('Length should be a valid number and not a NaN');

	if(typeof char !== 'string' || char.length !==1) throw new Error ('String should be a string with length = 1');
	if(typeof right !== 'boolean') throw new Error ('Right should be a boolean');


	const paddingLength = +length - str.length;
	let resultString = '';
	if (paddingLength >= 0) {
		const padding = char.repeat(length - str.length);
		resultString = right ? padding + str : str + padding;
		return resultString;
	}
	return str.substr(0, str.length + paddingLength);
}


//console.log(padString(111, 12));
console.log(padString('привіт', 8, '*'));
console.log(padString('привіт', 7, '*', false));
console.log(padString('привіт', 6, '*'));