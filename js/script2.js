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

// console.log(str.indexOf("twenty five"));
// console.log(str.slice(30, 41));

// console.log(str.indexOf("Dima"));
// console.log(str.slice(17, 21));
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

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 			numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }

// start();



// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };



// function rememderMyFilms() {
// 	for(let i = 0; i < 2; i++){
// 		const a = prompt('Один из последних просмотренных фильмов?', ''),
// 					b = prompt('На сколько оцените его?', '');
	
// 	if(a != null && b != null && a != '' && b != '' && a.length < 50 ) {
// 		console.log('done');
// 		personalMovieDB.movies[a] = b;
// 	} else {
// 		console.log('Error');
// 		i--;
// 	}
// 	}
// }

// // rememderMyFilms();


// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		console.log("Просмотрено довольно мало фильмов");
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log("Вы классический зритель");
// 	} else if (personalMovieDB.count >= 30) {
// 		console.log("Вы киноман");
// 	} else {
// 		console.log("Произошла ошибка");
// 	}
// }

// // detectPersonalLevel();


// function showMyDB(hidden) {

// 	if(!hidden) {
// 		console.log(personalMovieDB);
// 	} 
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {

// for(let i = 1; i <= 3; i++) {
// 		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
// 		personalMovieDB.genres[i - 1] = genre;
// 	}
	
// }
// writeYourGenres();


// //  ---------------------- Упражненние по написанию кода № 7 ----------------------


// function getCoupeNumber(setNumber) {
// 	if(typeof(setNumber) !== "number" || setNumber < 0 || !Number.isInteger(setNumber)) {
// 		return console.log("Ошибка.Проверте правильность введения места!");
// 	}

// 		if(setNumber === 0 || setNumber > 36) {
// 			return console.log("Таких мест в вагоне не существует!");
// 		}

// 	  for (let i = 4; i <= 36; i = i + 4) {
// 			if (setNumber <= i) {
// 					return console.log(Math.ceil(i / 4));
// 			}
// 	}

// }
// getCoupeNumber(33);

// // Площадь и обЪем куба! 

// function calculateVolumeAndArea(length) {

// 	if(typeof(length) !== "number" || length < 0 || !Number.isInteger(length)) {
// 		return console.log("При вычислении произошла ошибка!");
// 	}

// 	let value = 0,
// 			area = 0;

// 			value = length * length * length;

// 			area = 6 *(length * length);

// 			return console.log(`Объем куба: ${value}, площадь всей поверхности: ${area}`);

// }


// calculateVolumeAndArea(5);


// //  ---------------------- Упражненние по написанию кода № 8 ----------------------


// function findMaxNumber(a, b, c, d) {
	
// 	if(typeof(a) !== "number" ||
// 		typeof(b) !== "number" ||
// 		typeof(c) !== "number" ||
// 		typeof(d) !== "number"
// 	) {
// 		return 0;
// 	} else {
// 		return Math.max(a,b,c,d);
// 	}
// }
// findMaxNumber(5,6,7,34);

// //  ---------------------- Lesson № 31 Callback ----------------------

// function andre(who, callback1, callback2) {
// 	console.log(`Архоп: ${who}`);
// 	callback1();
// 	callback2();
// }

// function nice() {
// 	console.log(`Діма: топ поп!`);
	
// }

// function nice2() {
// 	console.log("Діма і так топ!");
// }

// andre("Чорт", nice, nice2);


//  ---------------------- Lesson № 32 Object ----------------------

// const options = {
// 	name: "test",
// 	width: 1024,
// 	height: 1024,
// 	colour: {
// 		border: "black",
// 		bg: "red"
// 	}
// };

// const {border, bg} = options.colour;
// console.log(bg);

// for (let key in options) {
// if(typeof(options[key]) === "object") {
// 	for(let i in options[key]) {
// 		console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 	}

// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 	}
// }



// const obj = {
//   firstName: "Dima",
// 	lastName: "Yuschuck",
// 	age: 25,
// 	wife: {
// 		firstName:"Margarita",
// 		lastName: "Samchuk",
// 		age: 24
// 	},
// 	makeTest: function () {
// 		console.log("TEST");
// 	}
// };

// let arr = 0;

// for(let k in obj) {
// 	if(typeof(obj[k]) === "object") {
// 		for(let j in obj[k]) {
// 			console.log(`Свойство ${j} имеет значение ${obj[k][j]}`);
// 		}	
// 		arr++;	
// 	} else{
// 		console.log(`Свойство ${k} имеет значение ${obj[k]}`);
// 		arr++;
// 	}
// }

// const {firstName, lastName, age} = obj.wife;
// console.log(firstName);

// obj.makeTest();
// console.log(Object.keys(obj).length);
// console.log(`Довжина: ${arr}`);



// const pack = {
// 	dark: "pamp",
// 	secondType: 123,
// 	pers: {
// 		pig: "pork",
// 	}
// };

// for(let key in pack) {
// 	if(typeof(pack[key] === "object")) {
// 		for(let i in pack[key]) {
// 			console.log(`Свойство ${i} имеет значение ${pack[key][i]}`);
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${pack[key]}`);
// 	}
// }
// console.log(Object.keys(pack).length);


// function call(name, callback) {
// 	console.log(`Функцію написав: ${name}`);
// 	callback();
// }

// function back() {
// 	console.log("Так, абсолютно вірно!");
// }

// call("Dima", back);


// const call = {
// 	name: "function",
// 	abou: "back",
// 	abouWhat: {
// 		return: "lastName"
// 	}
// };

// let length = 0;

// for(let key in call) {
// 	if(typeof(call[key]) === "object") {
// 		for(let i in call[key]) {
// 			console.log(`Свойство ${i} имеет значение ${call[key][i]}`);
// 		}
		
// } else {
// 	console.log(`Свойство ${key} имеет значение ${call[key]}`);
// 	length ++;
// }
// } 
// console.log(`Довжина ${length}`);


// var codes = {
//   "+7": "Россия",
//   "+38": "Украина",
//   "+1": "США"
// };

// for (var code in codes) {
//   var value = codes[code];
//   code = +code; // ..если нам нужно именно число, преобразуем: "+7" -> 7

//   console.log( codes ); // 7, 38, 1 во всех браузерах
// }

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)



// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// // ... = user
// let {name, years: age,isAdmin = false} = user;
// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

//  ---------------------- Lesson № 33 Arrey ----------------------


// const arr = [1, 2, 3, 6, 8];

// arr.push(10, 15, 18);


// console.log(arr[6]);

// Метод перебору масиву №1
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);                  
// }

// Метод перебору масиву №2
// for(let value of arr) {
//     console.log(value);
// }
// Метод перебору масиву №3
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} в середині масиву ${arr}`);
// });



// for(let i = 2; i <= 10; i++) {
//    if( i % 2 ==0) {
//        console.log(i);
//    }
// }

// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
//   }

// let i = 0;
// while(i < 3){
//     console.log(`number ${i}!`);
//     i++;
//   }

// let num;

// do {
//     num = prompt("Ddtcnb xbckj ,jkmit 100", 0);
// } while(num <=100 && num);

// --------------------   Алгоритми ---------------------

// Лінійний пошук
const arr = [1, 2, 3, 4, 5, 6, 56, 67];

function linearSearch(t, arr) {
    let n = arr.length, i = 0;
    arr[n] = t;
    while(arr[i] !== t) {
        i++;
    }
    if (i < n) {
        return i;
    } else {
        return -1;
    }
}
console.log(linearSearch(5, arr));
