"use strict";

// Lesson № 19

// const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// const a = prompt('Один з останніх переглянутих фільмів?', ''),
// 	b = prompt(' НА скільки оціните фільм?', ''),
// 	c = prompt('Один з останніх переглянутих фільмів?', ''),
// 	d = prompt('На скільки оціните фільм?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

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

// const num = 50;

// switch (num) {
// 	case 49:
// 		console.log('Error');
// 		break;
// 	case 50:
// 		console.log('Error');
// 		break;
// 	case 52:
// 		console.log('Nice!');
// 		break;
// 	default:
// 		console.log('Wrong ha ha ha!');
// 		break;
// }

//  LESSON № 21 ЛОГІЧНІ ОПЕРАТОРИ

// const hamburger = 5;
// const fries = 6;

// if(hamburger && fries) {
// 	console.log('Я ситий!');
// }

// Оператор && - "і"

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola === 1 && fries); 
// Якщо ми запускаємо такий код з логічними значеннями(true/false),то і в консоль ми отримували 
//відповідь true або false.
// Коли ми запускаємо код з конкретними значеннями, то і в консоль отримуємо конкретні значення це означає,
// в даному випадку що оператор && повертає перше неправдиве значення на якому він зупинився
//(при умові якщо cola = 0, повертається значення 0).Якщо ж значення всі правдиві то в консоль виводиться останнє 
//значення на якому спрацював оператор(&& - "і").

// Оператор (&& - "і") завжди повертає перше неправдиве значення.На ньому запинається.І далі код не виконується.
// Другий момент, якщо всі аргументи правильні код доходить до кінця і повертається останнє значення.

// console.log(hamburger === 3 && cola === 1 && fries); 


// if (hamburger === 3 && cola === 1 && fries) {
// 	console.log('Лишаємось!');
// } else {
// 	console.log('На вйо...!');
// }

// Оператор || - "або" російською "или".
// Як тільки оператор ||("або") знаходить правду він перестає працювати(перевіряти код).
//  Якщо жодне зі значень не правда(false) ми отримуємо останнє неправдиве значення.

const chiken = 3;
const soda = 0;
const potatos = 3;
const nuggets = 2;


if (chiken === 3 && soda === 2 || potatos === 3 && nuggets ) {
	console.log('All right!');
} else {
	console.log('fuck you!');
}

console.log(chiken === 3 && soda === 2 || potatos === 3 && nuggets);

// Оператор (! - "	Не") - спочатку цей оператор, перетворює аргумент до якого він застосований,
// в логічний тип даних(true/false).

//Практичне завдання № 1
console.log( NaN || 2 || undefined ); // 2
 
console.log( NaN && 2 && undefined ); // NaN
 
console.log( 1 && 2 && 3 ); // 3

console.log( !1 && 2 || !3 ); // false
 
console.log( 25 || null && !3 ); // 25
 
console.log( NaN || null || !3 || undefined || 5); // 5
 
console.log( NaN || null && !3 && undefined || 5); // 5
 
console.log( 5 === 5 && 3 > 1 || 5); // true

// Практичне завдання № 2

const hame = 3;
const chees = 3;
const pepsi = 0;
const panini = 2;
 
if (hame === 3 && pepsi || chees === 3 && panini) {
   console.log('Done!');
}
console.log(hame === 3 && pepsi || chees === 3 && panini);
// Умова виконується(значення 2)!

// Практичне завдання № 3

let hamburger;
const fries = NaN;
const cola = 0;
const noga = 2;
 
if (hamburger || cola || fries === 3 || noga) {
   console.log('Done!');
}

console.log(hamburger || cola || fries === 3 || noga);

// Умова виконується(значення 2)!

// Практичне завдання № 4

let a;
const b = NaN;
const c = 0;
const d = 2;
 
if (a && c || b === 3 && d) {
   console.log('Done!');
}

console.log(a && c || b === 3 && d);

//	Умова не виконується(значення false).