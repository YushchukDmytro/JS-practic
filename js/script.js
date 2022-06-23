"use strict";

//       -------------------------------      Lesson № 19      ---------------------------------------

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

//        ------------------------------------      Lesson №20     ---------------------------------

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

//        ------------------------------      LESSON № 21 ЛОГІЧНІ ОПЕРАТОРИ      --------------------

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

// const chiken = 3;
// const soda = 0;
// const potatos = 3;
// const nuggets = 2;


// if (chiken === 3 && soda === 2 || potatos === 3 && nuggets) {
// 	console.log('All right!');
// } else {
// 	console.log('fuck you!');
// }

// console.log(chiken === 3 && soda === 2 || potatos === 3 && nuggets);

// Оператор (! - "	Не") - спочатку цей оператор, перетворює аргумент до якого він застосований,
// в логічний тип даних(true/false).

// //Практичне завдання № 1
// console.log(NaN || 2 || undefined); // 2

// console.log(NaN && 2 && undefined); // NaN

// console.log(1 && 2 && 3); // 3

// console.log(!1 && 2 || !3); // false

// console.log(25 || null && !3); // 25

// console.log(NaN || null || !3 || undefined || 5); // 5

// console.log(NaN || null && !3 && undefined || 5); // 5

// console.log(5 === 5 && 3 > 1 || 5); // true

// // Практичне завдання № 2

// const hame = 3;
// const chees = 3;
// const pepsi = 0;
// const panini = 2;

// if (hame === 3 && pepsi || chees === 3 && panini) {
// 	console.log('Done!');
// }
// console.log(hame === 3 && pepsi || chees === 3 && panini);
// // Умова виконується(значення 2)!

// // Практичне завдання № 3

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const noga = 2;

// if (hamburger || cola || fries === 3 || noga) {
// 	console.log('Done!');
// }

// console.log(hamburger || cola || fries === 3 || noga);

// Умова виконується(значення 2)!

// Практичне завдання № 4

// let a;
// const b = NaN;
// const c = 0;
// const d = 2;

// if (a && c || b === 3 && d) {
// 	console.log('Done!');
// }

// console.log(a && c || b === 3 && d);

//	Умова не виконується(значення false).


// 				 --------------------------        LESSON № 22 Цикл     ----------------------------------


// let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// let i = 2;

// while (i < 16) {
// 	i++;
// 	if( i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }




// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }



// do {
// 	console.log(num);
// 	num++;
// }
// while(num < 55);

// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		// break;
// 		continue;
// 	}
// 	console.log(i);

// }

// for (let i = 20; i >= 10; i--) {
// 	if(i === 13) {
// 		break;
// 	}
// 	console.log(i);
// }

// function firstTask() {
// 	// Пишем решение вот тут
// 	for(let i = 5; i <= 10; i++) {
// console.log(i);
// }

// }
// firstTask();


// function fifthTask() {
// 	const arrayOfNumbers = [];

// 	for (let i = 5; i < 11; i++) {
// 			arrayOfNumbers[i - 5] = i;
// 	}

// 	console.log(arrayOfNumbers);
// 	return arrayOfNumbers;
// }

// fifthTask();




// function firstTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const arr = [3, 5, 8, 16, 20, 23, 50];
// 	const result = [];

// 	// Пишем решение вот тут
// 	for(let i = 0; i < arr.length; i++) {
// 		result[i] = arr[i];

// 	}
// 	console.log(result);
// 	// Не трогаем
// 	return result;
// }

// firstTask();


// function secondTask() {
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];

// 	// Пишем решение вот тут
// 	for(let i = 0; i < data.length; i++) {
// 		if(typeof(data[i]) === 'number') {
// 			data[i] = data[i] * 2;
// 		} else if(typeof(data[i] === 'string')) {
// 			data[i]= `${data[i]} - done`;
// 		}
// 	}
// 	console.log(data);
// 	// Не трогаем
// 	return data;
// }

// secondTask();


// let result = '';
// const lines = 8;

// for(let i = 1; i < lines; i++){
// 	for(let j = 8; j >i; j--){
// 		result += '*';
// 	}
// 	result += '\n';
// }


// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);




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

// Лінійний пошук .Linear search
// const arr = [1, 2, 3, 4, 5, 6, 56, 67];

// function linearSearch(t, arr) {
//     let n = arr.length, i = 0;
//     arr[n] = t;
//     while(arr[i] !== t) {
//         i++;
//     }
//     if (i < n) {
//         return i;
//     } else {
//         return -1;
//     }
// }
// console.log(linearSearch(5, arr));



// Binary search 


// function binarySearch(t, arr) {
//     let i = 0, 
//     j = arr.length - 1,
//     k;
//     while(i <= j) {
//         k = Math.floor((i+j) / 2);
//         if(t === arr[k]) {
//             return k;
//         } else if(t < arr[k]) {
//             j = k - 1;
//         } else {
//             i = k + 1;
//         }
//     }
//     return - 1;
// }

// console.log(binarySearch('her', arr));

// const arr = ['bc', 'abcde', 'ab', 'abcdef', 'abc'];
// function BubbleSort(arr)       // A - массив, который нужно
// {                            // отсортировать по возрастанию.
//     let n = arr.length;
//     for (let i = 0; i < n-1; i++)
//      { for (let j = 0; j < n-1-i; j++)
//         { if (arr[j+1] < arr[j])
//            { let t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t; }
//         }
//      }                     
//     return arr;    // На выходе сортированный по возрастанию массив A.
// }

// console.log(BubbleSort(arr));

//  ---------------------- Lesson № 35 Spred,  ----------------------


// let str = "Dima",
//     strTwo = str;

//     strTwo = "Rita " + strTwo;

//     console.log(strTwo);
//     console.log(str);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// const arr = [2, 5, 7];

// log(...arr);


// const arr1 = {
//     one: 1,
//     two: 2
// };
// const arr2 = {
//     three: 3,
//     four: 4
// };

// Object.assign(arr1, arr2);


// console.log(arr1);
// console.log(arr2);


// let obj1 = {
//     foo: "baz",
//     x:42
// };

// let obj2 = {
//     foo: "bar",
//     y: 24
// };

// let obj1Clone = {...obj1};

// let objMerged = {...obj1, ...obj2};

// console.log(obj1);
// console.log(obj1Clone);
// console.log(objMerged);


// const array = [
//     "a",
//     "c",
//     "d", {
//       four: 4
//     },
//   ];
//   const newArray = [...array];
//   console.log(newArray);
//   // Result 
//   // ["a", "c", "d", { four: 4 }]

// //    ------------- Practice -------------

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };
// function showExperience(plan) {
//     const{exp} = plan.skills;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));



// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//      for(let key in programmingLangs) {
//          str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//      }
//      return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];


// function standardizeStrings(arr) {

//     arr.forEach(function(name){
//         console.log(name.toLowerCase());   
//     });
// }

// standardizeStrings(favoriteCities);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = "";

//     if(arr.length === 0) {
//         str = "Семья пуста";
//     } else {
//         str = "Семья состоит из: ";
//     }

//     arr.forEach(function (member) {

//         str += ` ${member}`;
//     });

//     return str;
// }

// console.log(showFamily(family));


//    ----------------------- Передача по ссилці чи значенню. Spread оператор(Повторення уроку)


// let line = {
// 	name: "porn",
// 	age: 40,
// 	have: {
// 		boobs: 3
// 	}
// };

// let addAll = {
// 	dick: 15,
// 	IQ: 0
// };

// // console.log(line);
// // console.log(addAll);
// let myCopy = Object.assign({}, addAll);

// myCopy.IQ = 99;

// console.log(addAll);
// console.log(myCopy);



// function copyObj(mainLine) {
// 	let lineCopy = {};
// 	let key;
// 	for (key in mainLine) {
// 		lineCopy[key] = mainLine[key];
// 	}
// 	return lineCopy;
// }

// const newLine = copyObj(line);



// const oldArray = [3, 5, 7, 9];
// const newArray = oldArray.slice();

// newArray[3] = 435;

// console.log(...oldArray);		
// // console.log(oldArray);		


//  ---------------------- Lesson № 40 Замыкание и лексическое окружение ----------------------


// let number = 5; debugger


// function logNumber() {
// 	// let number = 4; debugger
// 	console.log(number);
// }

// number = 6;

// logNumber(); debugger


// {
// 	let msg = "Hello";

// }

// console.log(msg);




// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?      

// •	Чему равно такое выражение: [ ] + false - null + true ?       

// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?      

// •	Чему равна сумма [ ] + 1 + 2?           

// •	Что выведет этот код: alert( "1"[0] )?       

// •	Чему равно 2 && 1 && null && 0 && undefined ? 

// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?      

// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?     

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?   

// •	Что выведет этот код: alert( +"Infinity" ); ?        

// •	Верно ли сравнение: "Ёжик" > "яблоко"?   

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?      

//  ------------------------ Debug practice -----------------------


// const restorantData = {
// 	menu: [
// 			{
// 					name: 'Salad Caesar',
// 					price: '14$'
// 			},
// 			{
// 					name: 'Pizza Diavola',
// 					price: '9$'
// 			},
// 			{
// 					name: 'Beefsteak',
// 					price: '17$'
// 			},
// 			{
// 					name: 'Napoleon',
// 					price: '7$'
// 			}
// 	],
// 	waitors: [
// 			{name: 'Alice', age: 22}, {name: 'John', age: 24}
// 	],
// 	averageLunchPrice: '20$',
// 	openNow: true
// };

// function isOpen(prop) {
// 	let answer = '';
// 	prop ? answer = 'Открыто' : answer = 'Закрыто';

// 	return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
// 	if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
// 			return 'Цена ниже средней';
// 	} else {
// 			return 'Цена выше средней';
// 	}
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
// 	const copy = Object.assign({}, data);

// 	copy.waitors = {name: 'Mike', age: 32};
// 	return copy;
// }
// console.log(transferWaitors(restorantData));


// console.log(typeof(+"Infinity"));

//  ---------------------- Lesson № 47 Рекурсія ----------------------


let students = {
	js: [{
		name: 'John',
		progress: 100
	}, {
		name: 'Ivan',
		progress: 60
	}],
	html: {
		basic: [{
			name: 'Peter',
			progress: 20
		}, {
			name: 'Ann',
			progress: 18
		}],
		pro: [{
			name: 'Sam',
			progress: 10
		}]
	}

};

function getTotalProgressByIteration(data) {
	let total = 0;
	let students = 0;

	for (let course of Object.values(data)) {
		if (Array.isArray(course)) {
			students += course.length;

			for (let i = 0; i < course.length; i++) {
				total += course[i].progress;
			}
		} else {
			for (let subCourse of Object.values(course)) {
				students += subCourse.length;

				for (let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress;
				}
			}
		}
	}


	return total / students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
	if (Array.isArray(data)) {
		let total = 0;

		for (let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}
		return [total, data.length];
	} else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const subDataArr = getTotalProgressByRecursion(subData);
			total[0] += subDataArr[0];
			total[1] += subDataArr[1];
		}
		return total;
	}

}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);




function factorial() {
    
}