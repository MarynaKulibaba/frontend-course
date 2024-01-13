'use strict';

//1
const student = {
    name: 'John Doe',
    age: 22,
    grade: 75,
};
student.grade = 85;
student.course = 'English';

//2
const book = {
    title: ' How to Stop Worrying and Start Living',
    author: 'Dale Carnegie',
    year: '1948',
    publisher: {
        name: 'Simon and Schuster',
        location: 'New York',
    },
};

//3
const movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Sci-Fi',
};

for (let key in movie) {
    console.log(`${key} : ${movie[key]}`);
}

//4
const person1 = {
    name: 'Lily',
    age: 12,
};
const person2 = {
    name: 'Lily',
    age: 12,
};

const areEntriesEqual =
    Object.entries(person1).toString() === Object.entries(person2).toString();
console.log(areEntriesEqual);

//5
const animals = [
    { type: 'Dog', name: 'Buddy' },
    { type: 'Cat', name: 'Whiskers' },
    { type: 'Bird', name: 'Tweetie' },
];

animals.push({ type: 'Fish', name: 'Nemo' });