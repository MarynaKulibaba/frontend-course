'use strict';

const age = +prompt('Ваш вік?');
const inRange = !(isNaN(age) || age > 130 || age <= 0);

if (inRange) {
    let suffix = 'років';

    if (age % 100 < 11 || age % 100 > 14) {
        if (age % 10 === 1) {
            suffix = 'рік';
        }
        if (age % 10 >= 2 && age % 10 <= 4) {
            suffix = 'роки';
        }
    }

    alert(`${age} ${suffix}`);
} else {
    alert('Будь ласка, ведіть  число від 1 до 130');
}