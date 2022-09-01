// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).
// let a = 0;
// function foo() {        
//     return function () {
//        return ++a;
//     }    
// }
// function toggleMe () {
//     foo();
//     if (a % 2 === 0) {
//         return true
//     } else {
//         return false
//     } 
// }
// const res = foo();
// console.log(toggleMe(res()));
// console.log(toggleMe(res()));
// console.log(toggleMe(res()));
// console.log(toggleMe(res()));
// console.log(toggleMe(res()));
// console.log(toggleMe(res()));


// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 10, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 10, то функция считает
// количество от этого числа до 0
// function funcCounterMaycer(numUser) {
//     let num = 10;
//     let a;
//         if (numUser >= 10) {
//             a = function () {
//                 if (num === 0) {
//                     return 0;
//                 } else {
//                     return num--;
//                 }
//             }      
//         } else {
//             a = function () {
//                 return num++;
//             }            
//         } 
//         return a;
//     } 
    
// const funcCounter = funcCounterMaycer(15);
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());



// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.
// classNameEditor('active', true) // добавляем класс ====>>>>> 'active'
// classNameEditor('test', true) // =====>>>>> 'active test'
// classNameEditor('btn', true) // =====>>>>> 'active test btn'
// classNameEditor('test', false) // =====>>>>> 'active btn'
// classNameEditor('blabla', false) // =====>>>>> 'active btn'
// .split()
// .join()

// const classes = [];
// function classNameEditor(className, val) {    
//     if (val && classes.includes(className) !== true) {
//         classes.push(className);        
//         return classes.join(' ');
//     } else
//     if (val && classes.includes(className) || val !== true && classes.includes(className) !== true) {
//         return classes.join(' ');
//     } else
//     if (val !== true && classes.includes(className)) {
//         let deletes = classes.indexOf(className);
//         classes.splice(deletes,1);
//         return classes.join(' ');
//     }
// }
// const result = classNameEditor();
// console.log(classNameEditor('active', true));
// console.log(classNameEditor('active', true));
// console.log(classNameEditor('test', true));
// console.log(classNameEditor('btn', true));
// console.log(classNameEditor('test', false));
// console.log(classNameEditor('blabla', false));




// 4. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

// arr.map(() => {})
// map(arr, () => {})


// 5. Создать функцию sumTo, которая принимает два числа и callback.
// Задача функции складывать 2 числа, а задача callback’a заставлять
// функцию sumTo возвращать результат в виде числа, строки или
// логического типа данных.
// function toString (val) { return val + ''; }
// sumTo(2,3, someCallback)

// function sumTo(a, b, cb) {    
//     let sum = a + b;
//     return cb(sum);
// }
// function toString(val) {
//     return  val + '';
// }
// function toBoolean (val) {
//     if (val) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(sumTo(2, 3, toString));
// console.log(sumTo(2, 3, toBoolean));



// 6. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.
// function checkLogin(userLog) {
//     let log = userLog;
//     let logTrue = 'Valerchik';
//     if (log === logTrue) {        
//         return 'логин правильный';      
//     } else return 'логин неправильный'
// }
// let userLogin = prompt('введите логин');
// console.log( checkLogin(userLogin));


// 7. Создать объект 
// kurochka = {
// 	name: 'Ryaba',
// 	isAlive: true,
// 	isZazharena: false
// }

// измените объект так, чтобы после изменения поля isZazharena = true, поле isAlive автоматически стало false, 
// поле isAlive должно быть доступно только для чтения. После изменения isZazharena - это поле должно стать доступно только для чтения

// const kurochka = {
//     name: 'Ryaba',
//     isAlive: true,
//     isZazharena: false,
// }
// if (kurochka.isZazharena) {
//     Object.defineProperty(kurochka, 'isAlive', {      
//         value: 'false',  
//         writable: false,
//     })
// }
// if (kurochka.isZazharena) {
//     Object.defineProperty(kurochka, 'isZazharena', {   
//         writable: false,
//     })
// }

// kurochka.isZazharena = true;
// console.log(kurochka);
// kurochka.isZazharena = false;
// console.log(kurochka);