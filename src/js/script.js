'use strict';

//ДЗ 26. Реалізуйте функцію generateKey

//Реалізуйте функцію generateKey(length, characters),
//яка повертає рядок випадкових символів із набору characters довжиною length.
//Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let result = '';
    for (let i = 0; i <= length - 1; i++) {
        const charIndex = Math.floor(Math.random() * characters.length) - 1;
        result += characters[charIndex];
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key);


