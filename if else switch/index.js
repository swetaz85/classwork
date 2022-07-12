// const age = 0;
// if (age<18) {  //  или (true)
//     console.log('Hello!');
// } else if (age < 30) {
// console.log('Goodbye!');
// }

// const age = 2;
// switch (age) {
//     case 0: // age === 0
//     console.log('Its a zero');
//     break;
//     case 1: // age === 1
//     console.log('Its first');
//     break;
//     case 10: // age === 10
//     console.log('Its ten');
//     break;
//     default:
//     console.log('smth else');
// }

// const age = 50;
// if (age === 0) {
//     console.log('Its a zero');
// } else if (age === 1 || age === 10) {
//     console.log('Its ten! Or one!');
// } else if (age === 20) {
//     console.log('Its twenty');
// } else {
//     console.log('smth else');
// }

//тернарный оператор
// 
// let age = 2;
// console.log(age > 10 ? 'hi' : 'hello');
// if (age>10) {
//     console.log('hello')
// }
// let age = 1;
// console.log(age < 2 ? 'hi' : age < 10 ? 'hello' : "hi again");

// const age = prompt('how old are you');
// console.log(`you are ${age} years old`); // или:
// console.log(`you are ${prompt('how old are you')} years old`);

// let age = +prompt('how old are you');
// age += 1;
// console.log(age);

// let age = prompt('how old are you');
// if (isNan(age)) {
//     alert('введите только число');
// } else if (age === '') {
//     alert('не вводите пустое поле');
// } else if (age === null) {
//      alert('вы отклонили наш запрос, введите еще раз');
// } else {
//     age = +age;
//     alert('ok');
// }

// let a = 1;
// a++; 
// ++a;
// let b = 2 + a++; // постфиксный инкремент запишет вычисления
// let b = 2 + ++a; // префиксный запишет сразу перед вычислением
// console.log(b);

