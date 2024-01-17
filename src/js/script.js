'use strict';

const min = 0;
const max = 100;
const shuffledNumbers = [];

for (let i = min; i < max - min + 1; i++) {
    shuffledNumbers.push(i);
}

let indexOfLastShuffledNumber = shuffledNumbers.length - 1;
const getUniqueRandomNumbers = function (){
    const randomIndex = Math.floor(Math.random() * indexOfLastShuffledNumber);
    const random = shuffledNumbers[randomIndex];
    [shuffledNumbers[indexOfLastShuffledNumber], shuffledNumbers[randomIndex]] = [
        shuffledNumbers[randomIndex],
        shuffledNumbers[indexOfLastShuffledNumber],
    ];
    indexOfLastShuffledNumber--;
    return random;
}

for (let i = 0; i <= 100; i++) console.log(getUniqueRandomNumbers());