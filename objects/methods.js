// 'use strict';
//const foo = () => {};
// const pipe = [
//     () => {},
//     () => {},
// ];
// pipe[0]();

// function eat(food) {
//     console.log(`${this.userName} eats ${food}`); // this контекст вызова функции
// }

// const begat = (destination) => {
//     console.log(`${this.userName} run yo ${destination}`); 
//     // !!!!!!!!!! в стрелочной функции нет this ВАЖНАЯ РАЗНИЦА МЕЖДУ СТРЕЛОЧНОЙ И ОБЫЧНОЙ ФУНКЦИЕЙ
// }

// const person = {
//     userName: 'John',
//     age: 23,
//     stack: ['CSS', 'HTML', 'JS'],
//     liveInCity: true,
//     run: () => {
//         console.log('person runs'); // метод объекта - когда в поле объекта встроена функция
//     },
//     walk () {
//         console.log('John walks');
//     },
//     eat
// };
// //person.eat();

// const person2 = {
//     userName: 'Oleg',
//     age: 52,
//     stack: ['DIG', 'HTML', 'JS'],
//     liveInCity: false,
//     run: () => {
//         console.log('person runs'); // метод объекта - когда в поле объекта встроена функция
//     },
//     walk (destination) {
//         console.log(`${person2} walks to ${destination}`);
//     },
//     zhrat: eat
// };
//person.walk();
// person.eat('kolbasa');
// person2.zhrat('meat');

// const olegKushat = person2.zhrat;
// olegKushat('ezha'); // ошибка, потеря контекста

// function fly(dest, speed) {
//     console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`);
// }

// const bird = {
//     name: 'kesha',
//     fly,
    //fly: (dest, speed) => {
    //console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`); // выведет пробел вместо name
    // }
    // fly (dest, speed) {
    // console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`); // выведет кеша вместо name
    // }
// }

// const ezh = {
//     name: 'senya',
//     zhrat: eat
// }
 //bird.fly('nord', 100);
// fly.call(ezh, 'ost', 200);
// fly.apply(ezh, ['ost', 500]); // тоже самое, только аргументы передаем массивом
//bird.fly.call(ezh, 'ost', 200); // полетит сеня


// const person = {
//     userName: 'John',
//     age: 23,
//     stack: ['CSS', 'HTML', 'JS'],
//     liveInCity: true,
//     run: () => {
//         console.log('person runs'); // метод объекта - когда в поле объекта встроена функция
//     },
//     walk () {
//         console.log('John walks');
//     },
//     eat
// };
// function foo() {
//     //console.log(this); // увидим person
//     function bar() {
//         console.log(this); // undefined - потеря контекста
//     }
//     bar(); // bar.call(this); тогда увидим person

//     const bar2 = () => {
//         console.log(this); // увидим person    
//     }
//     bar2(); 
// }
// foo.call(person);



// function eat(food) {
//     console.log(`${this.userName} eats ${food}`); // this контекст вызова функции
// };
// const ezh = {
//     userName: 'senya',
// };
// const bobik = {
//     userName: 'bobik',
// };
// // const foo = eat.bind(ezh); // запишет новую функцию
// // foo('aplle');
// //foo.call(bobik); // так нельзя

// const foo = eat.bind(ezh, 'bulba'); // запишет bulba и если далее будем указывать аргументы, они уже не перезапишутся
// foo('aplle');


// function eat(food, tool) {
//     console.log(`${this.userName} eats ${food} with ${tool}`); // this контекст вызова функции
// };
// const ezh = {
//     userName: 'senya',
// };
// const foo = eat.bind(ezh, 'bulba'); // запишет bulba и если далее будем указывать аргументы, они уже не перезапишутся
// foo('aplle');



// const person = {
//     userName: 'John',
//     age: 23,
//     stack: ['CSS', 'HTML', 'JS'],
//     liveInCity: true,
//     run: () => {
//         console.log('person runs'); // метод объекта - когда в поле объекта встроена функция
//     },
//     walk () {
//         console.log('John walks');
//     },
//     eat
// };
//person.eat();

// const person2 = {
//     userName: 'Oleg',
//     age: 52,
//     stack: ['DIG', 'HTML', 'JS'],
//     liveInCity: false,
//     // run: () => {
//     //     console.log('person runs'); // метод объекта - когда в поле объекта встроена функция
//     // },
//     walk (destination = 'bar') {
//         console.log(`${this.userName} walks to ${destination}`);
//     },
//     //zhrat: eat
// };

// setTimeout(function () {
//     console.log('Im working');
// }, 2000); // задержка 2 сек

//setTimeout(person2.walk, 2000);  // undefined walks to bar

//setTimeout(person2.walk.bind(person2), 2000); // Oleg walks to bar

// setTimeout(function () {
//     person2.walk('bar'); // Oleg walks to bar
// }, 2000);

//16/08/22
// const id = setTimeout(function () {
//     person2.walk('bar'); // ничего не увидем пока не отключим clearTimeout
// }, 2000);
//clearTimeout(id);

// setInterval(() => {
// console.log('im working');
// },500); // многократный вызов с интервалом в 0,5 сек


//введите в консоль с интервалом в 1 сек числа от 1 до 10 после 10 вызовов должны прекратиться
// let count = 0;
// const id = setInterval(() => {
// console.log(++count);
// }, 500)
// setTimeout(() => {
//     clearInterval(id);
// }, 5000);


// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
//     //fullName: 'John Jhonson',
// };
//person.fullName = 'Ivan ' + person.lastName;

//person.city = 'Gomel'; // аналог:
// Object.defineProperty(person, 'city', {
//     value: 'Gomel',  // в каком объекте добавить, какое поле и какое значение
//     writable: false, // перезаписать это поле уже нельзя
//     enumerable: false, // будет ли это поле участвовать в перечислении
//     configurable: false, // в последствии не сможем опять вызвать для этого поля defineProperty и поменять конфигурацию,
//                          // а также не сможем удалить это поле 'city'
//     }); 

// //console.log(Object.keys(person)); // возвращает массив из ключей
// Object.defineProperty(person, 'firstName', {
// writable: false // говорим, что это поле не перезапишем
// });

// console.log(Object.getOwnPropertyDescriptor(person, 'city')); // получаем дексриптор любого поля
// console.log(person);

// Object.defineProperties(person, {
//     city: {
//         value: 'Eremino',
//         writable: false
//     }
//     }
// )console.log(Object.getOwnPropertyDescriptors(person));


// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
// };
// Object.defineProperty(person, 'fullName', { //создаем новое поле, у него нет хранилища, но можем проводить вычисления и к нему обращаться
//         get(){ // пытаемся прочитать
//             return `${this.firstName} ${this.lastName}`; 
//         }, 
//         set(val){ // пытаемся записать, при этом writable уже не запишем
//             //console.log(val);
//             const nameArr = val.split(' ');
//             this.firstName = nameArr[0];
//             this.lastName = nameArr[1];
//         }, 
//         enumerable: true,
//         configurable: true,
// });
// // console.log(person.fullName);  // get(){},
// // person.fullName = 2; // set(){}
// console.log(person);

// // person.firstName = 'Ivan';
// // console.log(person.fullName);

// person.fullName = 'Ivan Ivanov'; // set(val) перезапишет автоматически fullName
// console.log(person); 

// function run() {
//     console.log(`${this.firstName} runs `);
// }
// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
//     goTo: run,
// };
// person.goTo('bar');
// setTimeout(person.goTo.bind, 1000);
// Object.defineProperty(person, 'goTo', {
//     get () {
//         return run.bind(this)
//     }
// });
// setTimeout(person.goTo, 1000);


// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
//     _age: 0, // название поля с нижним подчеркиванием - даем другим понять, что это поле неприкасаемо
//     // создаем хранилище, куда потом сможем set(val) перезаписать другое значение
// };
// Object.defineProperty(person, '_age', {enumerable:false});
// Object.defineProperty(person, 'age', {
//     get(){
//         return this._age; // если вызовем в консоле person.age будет рекурсия - бесконечная ошибка
//     },
//     set(val){
//         if (typeof val === 'number' &&
//         val > 0 &&
//         val < 95) {
//             this._age = val;
//         } else {
//             console.error('напиши правильно число!!!');
//         }
//     },
//     enumerable: true
// });
// person.age = 10; // консоль перезапишет и выведет 10
// // person.age = -10; // консоль оставит '0'
// // console.log(person.age);
// console.log(person);

// Object.keys(person).forEach((objkey) => {
//     console.log(objkey);
// })

const person = {
    firstName: 'John',
    lastName: 'Jhonson',
};

Object.preventExtensions(person); // запрещает объекту добавлять новые поля
person.city - 'Gomel'; // не добавит
delete person.firstName; // удалит
person.lastName = 1000; // перезапишет

Object.seal(person); // запрещает объекту добавлять новые поля и удалять поля, перезапись можно
Object.isSealed(person); // проверка, пропустили ли через seal
// если вложенные объекты Object.seal(person.size)

Object.freeze(person) // запрещает все изменения
Object.isFrozen; // проверка
console.log(person);