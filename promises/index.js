// event loop
// promies
// async await

// console.log(1);
// setTimeout(() => {
//     console.log(2); 1000
// });
// console.log(3);
// console.log(4);
// setTimeout(() => {
//     console.log(5); 1000
// });
// console.log(6); // 1 3 4 6 2 5


// func()
// bar()
// foo()
// func(bar(foo())) // callback hell

// setTimeout(() => {
//     console.log('one');
// }, Math.random() * 1000);
// setTimeout(() => {
//     console.log('two');
// }, Math.random() * 1000);
// setTimeout(() => {
//     console.log('three');
// }, Math.random() * 1000);

// const pr = new Promise(() => {}); // промис выполнит асинхронную функцию синхронной
// console.log(pr); //из инстанс результат взять нельзя. даже если запишем return

// const pr = new Promise((resolve, reject) => { // в пустой функции [[PromiseState]]:"pending"
//     // resolve('result'); // [[PromiseState]]: "fulfilled" // что первое записано, то и будет выполенено, перезаписать нельзя, промис завершен
//     // reject('result'); // [[PromiseState]]: "rejected"
//     // console.log('AFTER REJECT'); // AFTER REJECT
// });
// console.log(pr);

// const pr = new Promise((resolve, reject) => {
//     resolve('result'); 
// }).then((res) => { // then возвращает новый промис и  можно несколько раз возвращать новые промисы
//     console.log(res);
//     return res;
// }).then((res) => {
//     console.log(res); 
//     // const one = 1;
//     // one = 2; // любая ошибка ( в том числе throw) выведет reject промиса
//     return res;
// });
// console.log(pr);

// const pr = new Promise((resolve, reject) => {
//     resolve('result'); 
// }).then((res) => { 
//     console.log(res);
//     return res + 'bla';
// }).then((res) => {
//     console.log(res); 
//     return res + 'smth';
// }).then((res) => {
//     console.log(res); 
// });
// console.log(pr);


// const pr = new Promise((resolve, reject) => {
//     reject({message: 'error'}); 
// })
// .then((res) => { 
//     console.log(res);
//     return res + 'bla';
// })
// .catch((err) => {
//     console.log('Some error occured', err.message);
//     return 100;
// })
// .then((res) => {
//     console.log(res); 
//     return res + 'smth';
// })
// .then((res) => {
//     console.log(res); 
//     return res;
// })
// .finally(() => { // выполняется всегда независимо от результата промиса
//     console.log('This is finally');
//     // return 100; // не работает
//     throw 222
// })
// .catch((err) => {
//     console.log('after finally was rejected', err);
//     return 100;
// })
// .then((data) => {
//     console.log('Then after finally', data);
// })
// console.log(pr);


// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('one'); 
//         resolve();
//     }, Math.random() * 1000);
// })
// .then(() => { 
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('two');
//             resolve(200);
//         }, 2000);
//     })
//     .then((data) => {
//         return 300;
//     })
// })
// .then((data) => { 
//     console.log(data); // вернет 200, но если в предыдущем then добавить новый then с return 300, то вернет return последнего then
//     setTimeout(() => {
//         console.log('three');
//     }, 1000);
// })

// const p1 = new Promise((res) => 
//     setTimeout(() => res(1), 500));
// const p2 = new Promise((res) => 
//     setTimeout(() => res(2), 1000));
// const p3 = new Promise((res) => 
//     setTimeout(() => res(3), 700));

// Promise.all([p1,p2,p3]) // если будет в одном из промисе ошибка, то не сработает
// .then((res) => {
//     console.log('after all promeses', res); // в res попадут промисы в массив по очереди независимо от времени их завершения
// })

// Promise.allSettled([p1,p2,p3]) // получим массив объектов с промисами и с инфой про каждый промис
// .then((data) => {
//     console.log(data); // если в одном из промисе будет ошибка, то все равно выполниться
// })

// Promise.race([p1,p2,p3])
// .then((data) => {
//     console.log(data); // покажет промис, который быстрее выполниться, даже если он с ошибкой
// })

// Promise.any([p1,p2,p3])
// .then((data) => {
//     console.log(data); // возвращает промис, который быстрее удачно выполниться
// })


// async await асинхронная функция
// const p1 = new Promise((res) => 
//     setTimeout(() => res(10), 500));
// const foo = async () => {
//     const result = await p1; // await - дождаться результат промиса и вывести его
//     console.log('Hi!', result); // вернет результат промиса
//     return result
// };
// const foo2 = async function () => {};
// async function foo3 () => {};
// foo();

// const outerResult = foo();
// console.log('outerResult: ', outerResult); // вернет промис, а не его результат

// const outerResult = foo().then((res) => console.log(res));
// console.log('outerResult: ', outerResult); 

// const bar = async () => {
//     const obj = await foo();
// }

// const p1 = new Promise((res, rej) => 
//     setTimeout(() => rej(10), 500));
// const foo = async () => {
//     let result;
//     try {
//         result = await p1;
//     } catch (err) {
//         console.log(err);
//     }
//     throw new Error(12);
//     console.log('Hi!', result); 
//     return result
// };
// foo()
// .catch((err) => {
//     console.log(err);
// })


// 27.09.22
// API aplication programing interface
// https://reqres.in/
// fetch
// AJAx Async Javascript and XML
// const footballPlayers = [{},{},{}]
/* <FootballPlayers>
    <player/>
    <player/>
    <player/>
    <player/>
</FootballPlayers> */ // XML уже не используют

// JSON JavaScript Object Notation
// JSON запаковывает данные и отправляет на back
// "
//     {
//         "name": "John", // запись поля обязательно в строке
//         "stack": [1,2,3],
//         "addres": {
//             "city": "Gomel"
//         }
//     }
// "

// AJAX
// SPA Single Page Application

// https://developer.mozilla.org/ru/docs/Web/HTTP/Status
// Коды ответа HTTP

// fetch('https://reqres.in/api/users?page=2') // fetch это асинхронная функция
// .then((response) => {
//     // console.log(response); // response это упаковка, которую содает fetch
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })

// const user = {
//     name: 'John',
//     age: 26,
//     address: {
//         city: 'Gomel'
//     }
// }
// const JSONedUser =  JSON.stringify(user); // запаковали в JSON
// console.log(JSONedUser); 
// const UnJSONedUser =  JSON.parse(user); // распаковали 
// console.log(UnJSONedUser);

// const userCopy = JSON.parse(JSON.stringify(user)); // прото и методы объекта не скопируются
// userCopy.address.city = 'Minsk';
// console.log(user);
// console.log(userCopy);


// POST запрос:
// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     body: JSON.stringify( { // нужно обязательно запаковать в JSON
//         name: 'John',
//         job: 'programmer'
//     })
// }) 
// .then((response) => {
//     return response.json();
// })
// .catch((data) => {
//     // return fetch()
//     data.status === 403;
//     alert('у вас нет прав')
// })
// .then((data) => {
//     console.log(data);
// })