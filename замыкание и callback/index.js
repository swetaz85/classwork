// callback // функция которую мы передаем в качестве аргумента
// hof
// function func(a, cb) {
//     return 2 + cb(a);
// }
// function scquare(b) {
//     return b * b;
// }
// console.log( func (3, scquare));

// console.log(setTimeout(() => func(2, scquare), 1000));
// scquare();


// closure // замыкание!!!!!!!!!!!!!!!!!!!!! 

// let a = 2;
// // lexical environment 
// const foo = (b) => {
//     return a + b;
// ;}
// const res = foo(5);
// console.log(res);

// let obj = {a:2};
// obj = null;

// const arr = [{a:3}, {a:5}];
// let obj = arr[0]; // если есть ссылка на объект, то он останется, сборщик мусора его не уберет
// obj = null;

// условие:
// foo() // 1
// foo() // 2
// foo() // 3
// function foo() {
//     let a = 0;
//     return function () {
//        return ++a;
//     };
// }
// const res = foo();
// console.log(res());
// console.log(res());
// console.log(res());
// const smth = foo();
// console.log(smth());
// console.log(smth());
// console.log(smth());


// let a = 0;
// function foo() {
//     return ++a;
// }
// function bar(b, cb) {
//     let a = 10;
//     return cb();
// }
// console.log(bar(2,foo));


// curry, memoizing
// const add = (a,b,c) => {
//     return a + b + c;
// }
// add(2)(5)(7)

// const add = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         }
//     }
// }
//// сокращаем запись:
// const add = a => b => c => a + b + c;

// const onePlus = add(1);
// const onePlusTwoPlus = onePlus(2);
// const res = onePlusTwoPlus(3);
// console.log(res); // 6
// console.log(add(1)(2)(3)); // 6 - каррированная функция add
// console.log(onePlusTwoPlus(100)); // 103


// paritally applied
// const add = (a,b) => {
//     return (c) => {
//         return a + b + c
//     }
// }
// add(1,2)(3)
// const add = (a,b) => c => a + b + c;
// console.log(add(1,2)(3));        

// от препода пример:
// const add = (a,b) => {
//     a.filter((item) => {
//         item.includes('smth')
//     })
//     .sort(() => {})
//     .map(() => {})


//     return (prefix) => {
//         return prefix + a.join(' ') + b.join(' ');
//     }
// };

// add([1,2,3], ['a','b','c'], 'mr')
// add([1,2,3], ['a','b','c'], 'mrs')

// const partialAdd = add([1,2,3], ['a','b','c']);
// console.log(partialAdd('mr'))
// console.log(partialAdd('mrs'))


// hof функция высшего порядка (либо принимает функцию, либо возвращает, дибо и то ито)
// higher order function**********
// function foo(a) {
//     return a * 2;
// }
// function test(cb) {
//     return function (a) {
//        return a / cb(a)
//     }
// }

// function add(a, b) {
//     return a + b;
// }
// function addWithLoggin(a,b) {
//     console.log(a,b);
//     return add(a,b);
// }
// console.log(add(2,3)); // 5
// addWithLoggin(2,3) // 2 3

// const wrapWithLoggin = add => {
//     return (a,b) => {
//         console.log(a,b);
//         return add(a,b)
//     }
// }

// или по другому, будет работать с любым количеством элементов:
// const wrapWithLoggin = add => {
//     return (...args) => {
//         console.log(...args);
//         return add(...args)
//     }
// }
// const addLogger = wrapWithLoggin(add);
// console.log(addLogger(2,3));

// function sub(a,b) {
//     return a - b;
// }
// const subLogger = wrapWithLoggin(sub);
// console.log(subLogger(5,3));

// function replaceLast (arr, str) {
//     arr.pop()
//     arr.push(str);
//     return arr;
// }
// const replaceLastLogger = wrapWithLoggin(replaceLast);
// console.log(replaceLastLogger(['a', 'b', 'c'], 'd'));