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

const arr = [60, 22, 43, 0, 5, 16, 16, -37, 522, 43, 200];
console.log(arr);
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
const result = arr.splice(5, 3, 'hello', 123); // мутирует массив, 3 - перед каким элементом начинать, 2 - сколько элементов удалить (0 если ничего не удалять), 'hello', 123 - что добавить
console.log(arr);
console.log(result); 
