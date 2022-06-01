"use strict";
/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count : numberOfFilms,
// 	movies : {},
// 	actors : {},
// 	genres : [],
// 	privat : false
// };
// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 			b = prompt('На сколько оцените его?', ''),
// 			c = prompt('Один из последних просмотренных фильмов?', ''),
// 			d = prompt('На сколько оцените его?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };



//       ------------------- ЦИКЛ " for" --------------------
// for(let i = 0; i < 2; i++){
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 				b = prompt('На сколько оцените его?', '');

// if(a != null && b != null && a != '' && b != '' && a.length < 50 ) {
// 	console.log('done');
// 	personalMovieDB.movies[a] = b;
// } else {
// 	console.log('Error');
// 	i--;
// }
// }


//      ---------------- Цикл "while" -----------------
// let i = 1;

// while(i < 3) {
// 	i++;
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 				b = prompt('На сколько оцените его?', '');

// 	if(a != null && b != null && a != '' && b != '' && a.length < 50 ) {
// 			console.log('done');
// 			personalMovieDB.movies[a] = b;
// 		} else {
// 			console.log('Error');
// 			i--;
// 		}

// }


//       --------------------  Цикл "while" але спочатку іде "do"  ------------------

// let i = 1;

// do {
// 	i++;
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько оцените его?', '');

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		console.log('done');
// 		personalMovieDB.movies[a] = b;
// 	} else {
// 		console.log('Error');
// 		i--;
// 	}
// }
// while (i < 3);


// if (personalMovieDB.count < 10) {
// 	console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
// 	console.log("Вы киноман");
// } else {
// 	console.log("Произошла ошибка");
// }



// console.log(personalMovieDB);


//   ------------------------ Lesson №27,5 Практика по функціях --------------------------

																					// ----------- № 1 ---------

// function sayHello(name) {
// 	return `Привет, ${name}!`;
// }

// console.log(sayHello('Alex'));

// 																					// ----------- № 2 ---------

// function returnNeighboringNumbers(n) {
//  return[n-1, n, n+1];
// }
// console.log(returnNeighboringNumbers(5));

// //  ---------------- № 3 -------------------

// function getMathResult(num, times) {
// 	if (typeof(times) !== 'number' || times <= 0) {
// 			return num;
// 	}

// 	let str = '';

// 	for (let i = 1; i <= times; i++) {
// 			if (i === times) {
// 					str += `${num * i}`;
// 					// Тут без черточек в конце
// 					// str = str + `${num * i}`;
// 			} else {
// 					str += `${num * i}---`;
// 					// Это тоже самое, что и
// 					// str = str + num * i + "---"
// 			}
// 	}

// 	return str;
// }

// console.log(getMathResult(10, 5));

// //   ------------------------ Lesson №28 Практика по функціях --------------------------

// const str = "Hello my name is Dima. I have twenty five years old.";

// // console.log(str.indexOf("twenty five"));
// // console.log(str.slice(30, 41));

// // console.log(str.indexOf("Dima"));
// // console.log(str.slice(17, 21));
// console.log(str.substr(9, 4));

// const num = 12.5;

// console.log(Math.round(num));


//   ------------------------ Lesson №29 Практика ч3. Використання функцій --------------------------


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();



const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



function rememderMyFilms() {
	for(let i = 0; i < 2; i++){
		const a = prompt('Один из последних просмотренных фильмов?', ''),
					b = prompt('На сколько оцените его?', '');
	
	if(a != null && b != null && a != '' && b != '' && a.length < 50 ) {
		console.log('done');
		personalMovieDB.movies[a] = b;
	} else {
		console.log('Error');
		i--;
	}
	}
}

// rememderMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}

// detectPersonalLevel();


function showMyDB(hidden) {

	if(!hidden) {
		console.log(personalMovieDB);
	} 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {

for(let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	}
	
}
writeYourGenres();