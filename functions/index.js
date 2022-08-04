// let arr = [24,1,4,4,23,43,23,4,23];
// let sum = 0;
// let avg = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//         avg++;
//     }    
// }
// console.log(sum);
// console.log(avg);

// function add () { // () - аргумент, {} - тело функции
// console.log(2+3);
// }
// add(); // запуск функции

// function declaration
// function add (a, b, c = 0) {
//     if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
//         console.log(a + b + c);
//     } else {
//         console.log('not valid data');
//     }    
// }
// add(4, 9, 10);
// add(5, '10');

// function expression
// const result = function add (a, b, c = 0) {
//     if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
//         console.log(a + b + c);
//     } else {
//         console.log('not valid data');
//     }    
// }

// function add (a, b) {  
// const res = a + b;   
//     //console.log(a + b);
//     return res; // return возвращает результат работы функции в переменную
//     //return [res, a, b];
//     // if (typeof a !== 'number' || typeof b !== 'number') {
//     //     return; // закончит функцию
//     // }
//     }   
// const calc = 10 / add(2,3);
// console.log(calc);
// const arr = [add(5,90), add(1,2)];
// console.log(arr);

// const foo = function () { // в этом случае имя функции не присваиваем (ананимная функция, т.е без имени)
//     console.log('Im FOO!');
// };
// foo();

// function add (a, b) {
//     return a + b;
// }
// const test = add();
// console.log(test); // выведет NAN
// const test = add;
// console.log(test); // выведет тело функции

// add.old = 200; // как в объекте добавит новое поле, но в консоле add не покажет это поле, но:
// console.log(add.old);

// function add (a, b) {
//     return [a + b];
// }
// console.log(add(2,3).slice());

// recursive obj copy
// hoisting func expression

// написать функцию, которая возвращает среднее ариф-е 4-х чисел
// function add (a, b , c, d) {
//     const result = (a + b + c + d) / 4;
//     return result;
// }
// console.log(add(1, 2, 3, 6));

// среднее арифметическое любого количества элементов
// function average(a, b, ...argumentsArr) { // превращает в массив 
    // console.log(a);
    // console.log(argumentsArr.slice());
    // arguments // псевдомассив, хранит все аргументы переданные функцией, но в этом массиве нет методов
    // console.log(arguments);
    // console.log(arguments.length);
    // const argumentsArr2 = [...arguments];
// }
// average(54,3564,54,54,5545,4,554);

// let result = 0;
// function average(...argumentsArr) { 
//     console.log(argumentsArr);
//     for (let i = 0; i < argumentsArr.length; i++) {
//         result += argumentsArr[i];        
//     }
//     console.log(result / argumentsArr.length);
// }
// average(54,3564,54,54,5545,4,554);



// hoisting - всплытие
// console.log(a);
// a = 2;

// foo(); // найдет функцию
// bar(); // ошибка, temporary dead zone (мертвая зона)
// function foo () {
//     console.log("Im foo");
// }
// foo = 2; // переприсвоится foo на переменную, функция исчезнет
// console.log(foo);
// const bar = function () {
//     console.log("Im bar");
// }
// bar()

// self invoking function (IIFE) - самовызывающаяся фунцкия
// (function () { //anonymous - можно без названия
//     console.log("Im foo");
// }) ();


// foo(); // найдет функцию
// function foo () {
//     console.log("Im foo");
// }
// foo();
// function foo () {
//     console.log("foo");
// }
// foo();
// let bar = function () {
//     console.log("Im bar");
// }
// bar();
// bar = function () {
//     console.log("bar");
// }
// bar();

// block SCOPE
// let a = 2;
// var b = 3;
// if (true) {
//     let a = 4; // не перезапишет
//     var b = 5; // перезапишет, у var нет блочной области видимости
// }
// console.log(a);
// console.log(b);

//function SCOPE, 
// let a = 2;
// function foo() {
//     let a = 3; 
//     console.log(a);
//     function bar() {
//         let a = 4; // если напишем a = 3, то вышерасположенная переменная a переприсвоится и в последней консоле ее выведет
//         console.log(a);
//     }
//     bar();
// }
// foo();
// console.log(a); // выведет 3, 4, 2

