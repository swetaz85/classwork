"use strict";
// npm i typescript
// npx tsc -v
// nps tsc --init
// npx tsc
// node index.js  // выводит в терминале консоль
// const a = 2; 
// let aa = 3;
// console.log(a);
// let b = 'hello';
// let c: string;
// c = 2;
// let counter = 2;
// let str: string[] = [];
// let arr: Array<string> = [];
// let arr2: string[] = []; // одно и то же, но лучше так
// const person = {
//     name: 'Jone',
//     age: 23,
// };
// const person1: {
//     name: string;
//     age: number;
//     city?: string;
// } = {
//     name: 'Jone',
//     age: 23,
// }
// person1.city = 'Gomel'
// let arr: string[] = [];
// let arr1: [string, number, boolean?] = ['hi', 3, false];
// arr.push('fghfdj'); // ошибки не будет, все добавит, если такой тип данных описан в кортеже
var Features;
(function (Features) {
    Features[Features["banner"] = 0] = "banner";
    Features[Features["adminka"] = 1] = "adminka";
    Features[Features["premium"] = 2] = "premium";
})(Features || (Features = {}));
let a = Features.adminka;
let b;
let c = Features[0];
b = 0;
console.log(a);
console.log(b);
console.log(c);
