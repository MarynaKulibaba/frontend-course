'use strict';

function calculatePotatoKgForBorscht(litersOfBorscht) {
    const potatoPerLiter = 4;
    const onePotatoInGrams = 75;

    let potatoWeightPerLiters = onePotatoInGrams * potatoPerLiter;
    let totalWeightPotato = +litersOfBorscht * potatoWeightPerLiters;
    return Math.ceil(totalWeightPotato / 1000);
}

function calculatePotatoCostForBorscht(totalWeightPotatoKg) {
    const pricePerKilogram = 13;
    return  totalWeightPotatoKg * pricePerKilogram;

}

const litersOfBorscht = 48;
const potatoKg = calculatePotatoKgForBorscht(litersOfBorscht); //загальна кількість картоплі
const potatoCost = calculatePotatoCostForBorscht(potatoKg); // загальна вартість картоплі
console.log(
    `Вартість картоплі для приготування ${litersOfBorscht} літрів борщу становить: ${potatoCost} грн. (${potatoKg} кг)`
);