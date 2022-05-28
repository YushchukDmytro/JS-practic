"use strict";

// Lesson № 19

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один з останніх переглянутих фільмів?', ''),
	b = prompt(' НА скільки оціните фільм?', ''),
	c = prompt('Один з останніх переглянутих фільмів?', ''),
	d = prompt('На скільки оціните фільм?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// Lesson №20

// const num = 50;

// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('too mach...');
// } else {
// 	console.log('Nice');
// }

// // (num === 50) ? console.log('Nice') : console.log('Error');  - ТЕРНАРНИЙ ОПЕРАТОР !!!

const num = 50;

switch (num) {
	case 49:
		console.log('Error');
		break;
	case 50:
		console.log('Error');
		break;
	case 52:
		console.log('Nice!');
		break;
	default:
		console.log('Wrong ha ha ha!');
		break;
}