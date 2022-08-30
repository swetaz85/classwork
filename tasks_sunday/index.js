// Доп задания

// 1

// Дана строка
// var str = ‘Мама мыла раму’;
// Написать функцию toWash(str, thing);
// Где str - это строка в которой надо поменять последнее
// слово, а thing - это, то самое слово которое надо вставить
// в конец строки.
// Функция должна возвращать строку.
// Например:
// document.write( toWash(str, ’машину’) );
// // ‘Мама мыла машину’
// document.write( toWash(str, ’рябину’) );
// // ‘Мама мыла рябину’
// document.write( toWash(str, ‘картину’) );
// // ‘Мама мыла картину’

// let str = 'Мама мыла раму';
// function toWash(str, thing) {
//     let arr = str.split(' ');
//     arr.pop();
//     arr.push(thing);
//     let result = arr.join(' ');
//     return result;
// }
// console.log(toWash(str, 'машину'));
// document.write( toWash(str, 'рябину') );
// document.write( toWash(str, 'картину') );

// 2.

// Создать функцию которая принимает массив футболистов
// const players = [
// { name:"Ronaldo", team:"Juventus"}, 
// { name:"Messi", team:"Barcelona"},
// { name:"Pedro", team:"Chelsea" },
// { name:"Rico", team:"PSG"},
// { name:"Suarez", team:"Barcelona" },
// { name:"Buffon", team:"Juventus" },
// { name:"Zuma", team:"Chelsea" },
// { name:"Gonsalo", team:"Juventus"}
// ];
// const playersByTeams = players.reduce((temsObj, item) => {
//     if ( temsObj[item.team] !== undefined ) {
//         temsObj[item.team].push(item);
//     } else {
//         temsObj[item.team] = [item];
//     }
//     return temsObj;
// }, {})
// const playersByTeams = players.reduce((teamsObj, item) => ({
//     ...teamsObj,
//     [item.team]: teamsObj[item.team] ? [...teamsObj[item.team], item] : [item]
// }), {});
// // console.log(playersByTeams);
// const result = Object.keys(playersByTeams).map((teamName) => playersByTeams[teamName]);
// console.log(result);
// function addAbility(array) {
//     array.forEach(element => {
//         element.run() 
//         // { 
//         // let res = `${this.name} is`;
//         // return  res})
//     });
// }
// addAbility(result);

// 2.
// . Взять массив футболистов из задачи 1. Напишите функцию
// addAbility(array), которая добавляет к каждому
// объекту массива функцию run(), при запуске которой
// выводится сообщение (“ИМЯ_ФУТБОЛИСТА is
// running”)



// Функция должна "пробегать" по массиву и выяснять какие футболисты играют в одинаковых командах.
// функция должна возвращать двумерный массив футболистов сформированный по принципу: 1 массив - 1 команда
// пример возвращаемого массива:

// [
// 	[
// 		{
// 		name:"Messi",
// 		team:"Barcelona"
// 		},
// 		{
// 		name:"Suarez",
// 		team:"Barcelona"
// 		}
		
// 	],
// 	[
// 		{
// 		name:"Ronaldo",
// 		team:"Juventus"
// 		},
// 		{
// 		name:"Buffon",
// 		team:"Juventus"
// 		},
// 		{
// 		name:"Gonsalo",
// 		team:"Juventus"
// 		}
// 	],
// 	[
// 		{
// 		name:"Pedro",
// 		team:"Chelsea"
// 		},
// 		{
// 		name:"Zuma",
// 		team:"Chelsea"
// 		}
// 	],
// 	[
// 		{
// 		name:"Rico",
// 		team:"PSG"
// 		}
// 	]
// ]





// // 2. 
// const car = {
//     model: 'tesla',
//     adress: {
//         country: {
//             city: {
//                 name: 'gomel',
//                 street: {
//                     name: 'pushkina',
//                     numbre: 2
//                 }
//             }
//         },
//         region: ['gomel','brest', 'minsk']
//     },
//     specs: {
//         price: {
//             low: 2000,
//             mid: 3000,
//             hight: 5000
//         },
//         engine: {
//             power: 400,
//             lowPower: 100
//         }
//     }
// };

// const car2 = {
//     model: 'lada',
//     adress: {
//         country: {
//             city: {
//                 name: 'gomel',
//                 street: {
//                     name: 'pushkina',
//                     numbre: 2
//                 }
//             }
//         },
//         region: ['minsk','grodno', 'eremino']
//     },
//     specs: {
//         price: {
//             low: 100,
//             mid: 2000,
//             hight: 2500
//         },
//         engine: {
//             power: 200,
//             lowPower: 100
//         }
//     }
// };

// const car3 = {
//     model: 'bmw',
//     adress: {
//         country: {
//             city: {
//                 name: 'boston',
//                 street: {
//                     name: 'pushkina',
//                     numbre: 2
//                 }
//             }
//         },
//         region: ['new york', 'berlin', 'bacelona']
//     },
//     specs: {
//         price: {
//             low: 100000,
//             mid: 150000,
//             hight: 200000
//         },
//         engine: {
//             power: 1000,
//             lowPower: 500
//         }
//     }
// };
// const arrCars = [car, car2, car3];

// 2.1 отфильтровать авто так чтобы в результирующий массив вошли
// только машины из региона минск
// const arrCarrsMinsk = arrCars.filter(item => item.adress.region.includes('minsk'))
// console.log(arrCarrsMinsk);


// 2.2 просуммировать общую стоимость авто по наивысшей цене
// let sumPriceMax = arrCars.reduce((sum, item) => sum + item.specs.price.hight, 0)
// console.log(sumPriceMax);


// 2.3 найти хотя бы одно авто мощность двигателя которого больше 500
// const powerEngine = arrCars.find((item) => item.specs.engine.power > 500)[`model`];
// console.log(powerEngine);

// 2.4 найти самое дешевое авто по наименьшей цене
// const PriceMin = arrCars.sort((a,b) => a.specs.price.low - b.specs.price.low)[0][`model`];
// console.log(PriceMin);

// или:
// const PriceMin = arrCars.reduce((a,b) => a.specs.price.low < b.specs.price.low ? a : b)[`model`];
// console.log(PriceMin);


// 2. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().
// const arr = ['Ivan', 'Oleg', 'Artem', 'Den', 'Semen'];
// const result = arr.some((item) => item === 'Semen');
// console.log(result);


// 3. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.
// const arr = [1,2,3,4,5,6,7,8,9,10];
// const result = arr.reduce((sum, number) => {  
      
//     if (number % 2 === 0) {
//         return sum + number;
//     }
//     return sum;
// }, 0);
// console.log(result);


// 4. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.
// const arr = [];
// let numbers;
// for (let i = 0; i < 3; i++) {
//     numbers = prompt('введите число');
//     arr.push(numbers);
// }
// console.log(arr);
// const result = arr.every((item) => !isNaN(item) && item);
// console.log(result);




// 1. Создать объект check с двумя методами:
// .checkNameLength()
// .checkIsAdult()
// создать два объекта person1 и person2 с полями name и age (задать самостоятельно)
// вызвать методы из объекта check и передать в них в качестве контекста
// person1 или person2. 
// checkNameLength() должен возвращать true если поле name у объекта больше 4
// checkIsAdult() должен возвращать true если поле объекта age больше или равно 18

// const check = {
//     checkNameLength() {
//         return this.name.length > 4 
//     },
//     checkIsAdult() {
//         return  this.age >= 18 
//     },
// }
// const person1 = {
//     name: 'Artem',
//     age: 12,
// }
// const person2 = {
//     name: 'Den',
//     age: 39,
// }
// console.log(check.checkNameLength.call(person2));
// console.log(check.checkIsAdult.call(person2));


// 2. Создать объект person с полем name и методом eat.
// Создать массив строк food в котором перечисляется любая еда (не менее 4 наименований)
// Метод eat должен принимать строку food с названием еды и возвращать строку вида 
// person.name + " eats " + food
// Используя setTimeout или setInterval запустите метод eat объекта person раз в секунду, передавая при этом каждый раз следующее название еды из массива.

const person = {
    name: 'Senja',
    eat(food) {
        console.log(`${this.name} eats ${food}`);
    }
}
const foods = ['meat', 'bread', 'apply', 'any food'];
const foo = person.eat(foods[0])
// foods.forEach((item, index) => {
//     setTimeout(function(){person.eat(item)},(index + 1) * 1000);
// })

/* не работает?????
 foods.forEach((item, index) => {
const id = setInterval(() => {
    console.log(person.eat(item));
}, (index + 1) * 1000);
setTimeout(() => {
    clearInterval(id);
}, 4000)
})
*/

