'use strict';

const usedNumbers = []

const randomNumber = function() {
    const randomNumberResult = Math.floor(Math.random() * 100)
    if (usedNumbers.includes(randomNumberResult)) return randomNumber()
    usedNumbers.push(randomNumberResult)
    return randomNumberResult
}

for (let i = 0; i <= 100; i+=1) console.log(randomNumber());



/*const min = 0;
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

for (let i = 0; i <= 100; i++) console.log(getUniqueRandomNumbers());*/


