'use strict';
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

const person2 = {
    userName: 'Oleg',
    age: 52,
    stack: ['DIG', 'HTML', 'JS'],
    liveInCity: false,
    // run: () => {
    //     console.log('person runs'); // метод объекта - когда в поле объекта встроена функция
    // },
    walk (destination = 'bar') {
        console.log(`${this.userName} walks to ${destination}`);
    },
    //zhrat: eat
};

// setTimeout(function () {
//     console.log('Im working');
// }, 2000); // задержка 2 сек

//setTimeout(person2.walk, 2000);  // undefined walks to bar

//setTimeout(person2.walk.bind(person2), 2000); // Oleg walks to bar

setTimeout(function () {
    person2.walk('bar'); // Oleg walks to bar
}, 2000);