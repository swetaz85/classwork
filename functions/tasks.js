// 1. Написать функцию, которая принимает массив и степень. 
// Функция возвращает массив, в котором каждое число 
// массива возведено в указанную степень

// function exponentiate (arr, stepen) {
//    for (let i = 0; i < arr.length; i++) {
//    arr[i] = arr[i]**stepen;    
//    }
// console.log(arr)
//    
// }
// const result = exponentiate([5,3564,54,54,5545,4,554], 5).slice();
// console.log(exponentiate([5,3564,54,54,5545,4,554], 5).slice());
// exponentiate([5,3564,54,54,5545,4,554], 5);

// 2. Написать функцию, которая принимает число дня недели и возвращает 
// его название, если введено число больше 7 или меньше 1 вернуть 
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет 
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели».
// function dayOfWeek(dayNumber) {
// let dayUser = +prompt("введите номер недели");
//     if (dayUser === 1) {
//        return "понедельник";
//     }
//     if (dayUser === 2) {
//         console.log("вторник");
//     }
//     if (dayUser === 3) {
//         console.log("среда");
//     }
//     if (dayUser === 4) {
//         console.log("четверг");
//     }
//     if (dayUser === 5) {
//         console.log("пятница");
//     }
//     if (dayUser === 6) {
//         console.log("суббота");
//     }
//     if (dayUser === 7) {
//         console.log("воскресенье");
//     }
//     if (dayUser < 1 || dayUser > 7) {
//         console.log("Нет такого дня недели");
//     }
// }

//     let dayUser = +prompt("введите номер недели");
// dayOfWeek(dayUser);
// dayOfWeek(6);
// dayOfWeek(serverData);

// 3. Написать функцию, которая принимает два числа (n1 и n2) и 
// возвращает массив (8 элементов) из этих чередующихся чисел. 
// Например, передаем два числа arrMaker(2,5), функция вернет массив 
// [2,5,2,5,2,5,2,5]
// const arr = []
// function arrMaker(a,b) {
//     let lengthArr = 8 - arr.length;

//     for (let i = 0; i < 4; i++) {
//         arr.push(a,b);        
//     }
//    return arr;
// }
// arrMaker(2,5);
// arrMaker(4,7);

// 4. Написать функцию, которая возвращает годовую оценку по предмету. 
// Функция принимает 4 оценки за четверти и возвращает годовую. В 
// начале программы пользователя спршивают оценки за четверти в 
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и 
// т.д. В конце работы программы выводится сообщение «ваша годовая 
// оценка N»
// function grade(a,b,c,d) {
//     
//     const result = (one + two + three + four) / 4;
//     console.log("ваша годовая оценка " + result); 
// }
// grade(2,34,234,23);
//let one = +prompt("введите оценку за 1 четверть");
//     let two = +prompt("введите оценку за 2 четверть");
//     let three = +prompt("введите оценку за 3 четверть");
//     let four = +prompt("введите оценку за 4 четверть");


// 5. Напишите функцию, которая возвращает процент побед и процент 
// поражений в контру или доту. Функция принимает два параметра: 
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы: 
// myStats(352,211), это значит было 352 победы и 211 поражений. 
// Функция возвращает сообщение «ваш процент побед - 62%, 
// поражений – 38%».




// 6. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, 
// которая вернет массив только из тех чисел, которые 
// повторялись в исходном. Массив, который возвращает 
// функция [1,4,6,74]
// function newArr(arr) {
//     const arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(arr[i], i+1) && !arr2.includes(arr[i])) {            
//             arr2.push(arr[i]);
//         }        
//     }
//     return arr2;
// }
// console.log(newArr([1,1,1,4,4,5,1,6,6,74,74,74,3]));


// 7. Написать функцию, которая принимает случайный 
// двумерный массив (разной длины) из 8 элементов. Функция 
// возвращает тот массив сумма элементов которого 
// наибольшая

//let randoms = new Array(8).fill(new Array(3).fill(Math.floor( Math.random() * 100)));
//console.log(randoms);
//console.log(maxArr(randoms));

(function () {
    const arr = new Array(8);    
    let arrSum = [];
    let maxSumArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let a = Math.ceil(Math.random() * 5);        
        arr[i] = new Array(a);   
        if (arr[i].length < 2) {
            arr[i].push(a);
        }
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = Math.ceil(Math.random() * 10);                          
        }   
    }   
        for (let i = 0; i < arr.length; i++) {
            sum = 0;
            for (let j = 0; j < arr[i].length; j++) {
                sum += arr[i][j]; 
                arrSum[i] = sum;         
            }             
        }  console.log(arrSum);
    let maxSum = arrSum.indexOf(Math.max());
    return maxSumArr.push(arr[maxSum]);
    console.log(maxSumArr);
    console.log(arr);

}) ()



// 8. Написать программу, которая спрашивает у пользователя сколько ему 
// лет. В программе должна присутствовать функция validator(), которая 
// проверяет введенное число. Если validator() вернет true, то возраст 
// можно выводить на экран в виде “Вам N лет”. Функция validator() 
// должна проверять, чтобы введенный возраст не был отрицательным, 
// меньше 5 лет и больше 100, чтобы возраст не был строкой, и не был 
// null или undefined.

// 9. Написать компьютерную игру «отгадай число». Игра на двух игроков. 
// Сначала игрок1 указывает максимальное число(max) до которого 
// можно загадывать. Потом игрок2 указывает число n от 1 до max.
// Игрок1 пытается отгадать число n, если не угадал выводится 
// сообщение «Загаданное число меньше указанного вами» или 
// «Загаданное число больше указанного вами». Выигрывает тот игрок, 
// который за наименьшее количество попыток отгадает число. 