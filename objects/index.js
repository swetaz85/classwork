// const person = [34, 'Gomel', 51];
// const person = {
//     name: 'John', // ключ можно писать name, 'name', 0, 1, и т.д.
//     age: 23,
//     city: 'Gomel',
//     isProgrammer: true,
//     //0: undefined,
// };
// console.log(person.age);
// console.log(person['city']); // в данном случае в [] можно делать вычисления
// const str = 'city'; 
// console.log(person[str]);

// person.name = 'Valerchik'; // меняем значение имеющегося поля
// console.log(person);
// person.lastName = 'Ivanov'; // добавление нового поля в объект
// person['lastNames'] = 'Ivanov'

// console.log('isProgrammer' in person); // оператор in проверяет есть ли в объекте нужное поле
// console.log(0 in person);
// console.log( person.hasOwnProperty('isProgrammer') );  //лучше проверять есть ли поле этим способо
// delete person.age; // удаляем поле
// console.log(person);

// const person2 = person;
// person.name = 'Valerchik'; // ссылка на объект person, не новый объект
// console.log(person2);

// копируем объект:
// const person2 = {};
// for (let key in person) {
//     // console.log(person[key]); //  person.key здесь не подходит, только []
//     person2[key] = person[key];
// }
// console.log(person2);

// const person = {
//     name: 'John', // ключ можно писать name, 'name', 0, 1, и т.д.
//     age: 23,
//     city: 'Gomel',
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         with: 23,
//         height: 200,
//         weight: 100,
//     }
// };
// console.log(person.size.height);
// const person2 = {};
// for (let key in person) {
//     if (Array.isArray(person[key])) { // проверяем если это массив создать новую копию массива
//         // console.log('это массив');
//         person2[key] = [...person[key]]; // или person[key].slice()
//         continue
//     }
//     //person2[key] = person[key];
// }
// person.size.with = 30;
// person.stack.push('React');
// console.log(person2);
// в консоле: [] instanceof Array
// Array.isArray(key)

// rest, spread, destructuring
// const person = {
//     name: 'John', // ключ можно писать name, 'name', 0, 1, и т.д.
//     age: 23,
//     city: 'Gomel',
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         with: 23,
//         height: 200,
//         weight: 100,
//     }
// };

// const arr = [1,2,3,4,5];
// const [a, b] = arr;
// const {
//     age: personAge, 
//     city: personCity = 'Minsk', 
//     lastName = 'Ivanov',
//     stack: [a, b = 'blabla', ...kusokStacka],
//     size: {
//         height: newHeidht // создаст переменную height, но не size
//     } = {height: 999},
//     ...kusokPerson
// } = person; 
// // можно в {} записать новое поле lastName = 'Ivanov', age: personAge переименовали в новую константу
// // city: personCity = 'Minsk' если не найдет значение перезапишет на новое
// //const age = person.age; // то же самое
// console.log(kusokStacka);

// const person = {
//     name: 'John', 
//     age: 23,
//     city: 'Gomel',
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         with: 23,
//         height: 200,
//         weight: 100,
//     }
// };

// const person2 = {...person}; // новый объект, но внутренние объекты и массивы сохранят ссылки
// person.name = 'LLLL';

// const person3 = {
//     name: 'Peter', 
//     age: 43,
// }
// const person2 = {
//     ...person,
//     ...person3, // если имена у двух объектах совпадают, запишется последнее
//     a: 2,
//     age: 100 // если у исходника уже было это поле, то оно перезапишется, если записали выше ...person, то последний перезапишет
// };
// console.log(person2);

// const person = {
//     name: 'John', 
//     age: 23,
//     city: 'Gomel',
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         with: 23,
//         height: 200,
//         weight: 100,
//     }
// };
// копируем вместе с вложенными объектами и массивами
// const person2 = {
//     ...person,
//     stack: [...person.stack],
//     size: {...person.size}
// }

// const nick = 'Bobik';
// const dog = {
//     age: 23,
//     nick // nick: nick можно не писать, если ранее объявлена переменная
// }
// console.log(dog);

// const str = 'city';
// const person = {
//     name: 'Oleg',
//     [str]: 'Gomel' // [str] задаем название поля по занее объявленной переменной
// }
// let str = ['city', 'age'];
// const person = {
//     name: 'Oleg',
//     [str[0]]: 'Gomel', // [str] задаем название поля по занее объявленной переменной
//     [str[1]]: 23,
// }
// const {age} = person; // {[str[1]]} не сработает, а вот {[str[1]: 'aGe']} сработает 

// console.log(person);
