// const arr = [60, 22, 43, 0, 5, 16, 16, -37, 522, 200];
// const arr2 = ['one', 'two', 'three'];
// arr[0] = 99;
// const resultArr = arr.concat(arr2);
// console.log(resultArr);

// let a = [1, 2, 3];
// let b = a;
// b[0] = 999;
// let c = [1, 2, 3];
// console.log(a === b); // true
// console.log(a === c); // false


// for (let i = 0; i < arr2.length; i++) {
//     arr2Copy[i] = arr2[i];    
// } console.log(arr2Copy);

// const resultArr = arr2.concat(arr2Copy);
// console.log(resultArr);

// const resultArr = arr2.concat([]); // копия массива
// console.log(resultArr);
// console.log(arr2.concat('four'));

// const arr = [60, 22, 43, 0, 5, 16, 16, -37, 522, 200];
// const arr2 = ['one', 'two', 'three'];
// const arr3 = [false, true, true, true, false];
// const resultArr = arr.concat(arr2);
// const resultResultArr = resultArr.concat(arr3);
// console.log(resultResultArr);
// console.log(arr.concat(arr2).concat(arr3)); // лучше делать так
// console.log(arr.concat(arr2,arr3));

// const arr = [60, 22, 43, 0, 5, 16, 16, -37, 522, 200];
// console.log(arr.fill(10, 1, 5)); // 10 - каким элементом дополнить, 1 - с какого элемента начать, 5 - до какого элемента не включительно
// console.log(new Array(50).fill(1));
// const arr4 = [[1, 51], [2, 41, [5, 6]], [3]];
// console.log(arr4[0][1]);
// console.log(arr4.flat(2));

// const arr = [60, 22, 43, 0, 5, 16, 16, -37, 522, 200];
// console.log(arr.includes(5)); // проверяет есть ли в массиве искомый элемент

// const arr = [60, 22, 43, 0, 5, 16, 16, -37, 522, 43, 200];
// console.log(arr);
// const result = arr.push(100, 50, 200) // добавляем новые элементы в конец массива, мутируя его
// console.log(arr);
// console.log(result); // вернет 13 - количество элементов массива
// const result1 = arr.pop() // удаляет последние элементы, мутируя массив
// console.log(result1); // вернет 200, последний элемент массива
// arr.shift(); // удаляет нулевой элемент массива, в консоле покажет удаленный элемент
// console.log(arr);
// arr.unshift('zsdg', 2 , 3) // добавляет в начало указанные элементы, мутирую массив, возвращает в консоль количество элементов
// console.log(arr.indexOf(43, 3)); // показывает на какой позиции искомое значение, 3 - с какого индекса начать поиск 
// arr[arr.indexOf(43, 3)] = 1000; // найдет позицию и перезапишет ее на новое значение
// console.log(arr);
// console.log(arr.lastIndexOf(43, 3)) // ищет элемент с конца массива и сколько пропустить индексов
// arr.reverse();
// console.log(arr.sort()); // сортировка по алфавиту, цифры тоже по первой
// const result = arr.slice(); // не мутирует массив, возвращает новый массив, в данном случае полная копия arr
// const result1 = arr.slice(2); // создает новый массив, начиная с заданного значения индекса включительно
// const result2 = arr.slice(2, 5); // создает новый массив, начиная с заданного значения индекса включительно до заданного не включительно
// console.log(result2);
// const result = arr.splice(5, 3, 'hello', 123); // мутирует массив, 3 - перед каким элементом начинать, 2 - сколько элементов удалить (0 если ничего не удалять), 'hello', 123 - что добавить
// console.log(arr);
// console.log(result); 

// const result = arr.join(); // (''), (' '), ('@') показываем какой разделитель
// console.log(result); // не мутирует массив, превращает его в строку

// STRING METHOD!
// const str = 'i love itstep very mush';
// console.log(str.split(' ')); // превращает строку в массив (' ') - показываем на каком элементе делать разделение, в данном случае пробел


// es6
// rest, spread, destructuring
// Math.max(2,51,44,9,45); // на массиве не работает
// Math.min(2,51,44,9,45); // 

// spread
// console.log(Math.max(...arr)); // ... (spread оператор) делает вычисления внутри массива
// const arr = [60, 22, 43, 0, 5, 16, 16, -37, 522, 43, 200];
// // const arr2 = arr.slice();
// // arr2[0] = 100; // или:
// //const arr2 = [...arr]; // ... (spread оператор) создает копию массива
// const arr2 = [200, ...arr, 60,70]; // можно плюс дополнить новыми элементами
// const arr3 = [...arr, ...arr2]; // объединяет массивы как concat
// console.log(arr3);

// const arr = [60, 22, 43, 0, 5, 16, 16, -37, 522, 43, 200];
// const arr2 = ['one', 'two', 'three'];
// let one = arr2[0];
// let two = arr2[1];
// arr[0] = 'llll'; // let one останется 'one'
// console.log(arr2);
// console.log([1,2,3][0]); // выведет 1: [1,2,3] - создается новый массив, [0] - выведет нулевой элемент созданного массива
// console.log([1,2,3].slice(1).concat([10,20,30]));

// destructuring
// const arr2 = ['one', 'two', 'three'];
// let a = arr2[0];
// let b = arr2[1];
// let c = arr2[2]; // или:
// const [a, b, c] = arr2; // деструктуризация (в константу а запишется нулевой элемент, в константу b запишется 1 элемент, в константу с запишется 2 элемент, можно между запятыми оставлять пробелы)

// const test = [];
// const [a, b, c] = test; 
// console.log(a); // вернет undefined

// const [a = 'default value', b = 'default value', c = 'default value'] = test; 
// console.log(a); // вернет 'default value'


// rest
// const arr2 = ['one', 'two', 'three', 'four'];
// const [a, b, ...rest] = arr2; // rest: достаем элементы из массива и создаем новый массив
// rest должен быть только один в одной операции
// console.log(rest); // выведет ['three', 'four']


// Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// let userName = prompt("введите имя");
// if (people1.includes(userName)) {
//     people2.push(userName);
// }
// console.log(people2);

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// let userName = prompt("введите имя");
// if (people2.includes(userName)) {
//     let indexToDelete = people2.indexOf(userName);
//     people2.splice(indexToDelete, 1);
// }
// console.log(people2);

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// const people3 = [];
// for (let  i= 0; i < people1.length; i++) {
//     if (people2.includes(people1[i])) {
//         people3.push(people1[i]);
//     }    
// }
// console.log(people3);

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// const people4 = people1.concat(people2);
// for (let i = 0; i < people1.length; i++) {
//     if (people2.includes(people1[i])) {
//         let result = people4.indexOf(people1[i]);
//         people4.splice(result, 1); 
//     }    
// }
// console.log(people4);
// 5. Отсортируйте получившийся массив по алфавиту
// console.log(people4.sort());


// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const arr1 = [];
// let name1 = "David";
// let name2 = "Lambert";
// let name3 = "Eddie";
// let result1 = arr.indexOf(name1);
// arr.splice(result1, 1);
// let result2 = arr.indexOf(name2);
// arr.splice(result2,1);
// let result3 = arr.indexOf(name3);
// arr.splice(result3,1);
// arr1.push(name1, name2, name3); 
// console.log(arr);
// console.log(arr1);


// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let name1 = "Janett";
// let name2 = "Franz";
// let result1 = arr.indexOf(name1);
// arr.splice(result1, 1);
// let result2 = arr.indexOf(name2);
// arr.splice(result2, 1);
// arr.unshift(name1, name2);
// console.log(arr);


// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let result1 = arr.indexOf("Eddie");
// arr.splice(result1, 1, "Oleg");
// let result2 = arr.indexOf("Janett");
// arr.splice(result2, 1, "Valerchik");
// console.log(arr);


// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.reverse();
// arr.fill("Mitrofan", 0, 4);
// console.log(arr);


// 5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]
// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)
// const arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
// const varArr = arr2.slice(arr2.indexOf("Aristarkh"));
// arr1.push(...varArr);
// console.log(arr1);


