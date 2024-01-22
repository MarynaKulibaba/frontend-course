'use strict';

const isValidNumber = function (value) {
    return typeof value === 'number' && !isNaN(value);
};

const getHoursFromUserInput = function (promptMessage) {
    const input = prompt(promptMessage);
    const number = parseFloat(input);

    if (!isValidNumber(number)) {
        throw new Error('Будь ласка, введіть коректне число годин');
    }

    return number;
};

const howManySeconds = function (hours) {
    const minutesInHours = 60;
    const secondsInMinutes = 60;
    const seconds = hours * minutesInHours * secondsInMinutes;
    return seconds;
};

try {
    const hours = getHoursFromUserInput('Введіть кількість годин');
    const secondsResult = howManySeconds(hours);
    alert(`У ${hours} годинах ${secondsResult} секунд`);
} catch (e) {
    alert(e.message);
}