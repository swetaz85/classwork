//1. создать объект subscribers с полями oldSubscribers и newSubscribers
// добавьте в объект поле allSubscribers которое должно ъхранить сумму  oldSubscribers + newSubscribers
// если число allSubscribers > 700 вывести you are famous, иначе try harder

// const subscribers = {
//     oldSubscribers: 20,
//     newSubscribers: 3000,
// }
// subscribers.allSubscribers = subscribers.oldSubscribers + subscribers.newSubscribers;
// console.log(subscribers);
// if (subscribers.allSubscribers > 700) {
//     console.log('you are famous');
// } else {
//     console.log('try harder');
// }

// 2. дан массив объектов [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
//  ]
//  используя методы массивов и циклы 
//  вывести в консоль 'its valid', если во всех объектах поле a > b

// const arr = [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
// ];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].a > arr[i].b) {  
//     count++;                 
//     }       
// }      
// if (count !== arr.length) {
//     console.log('its not valid');
// } else {
//     console.log('its valid');        
// }     


//  3. на основе исходного массива создать массив таких же объектов, но поле b
//  должно быть возведено в квадрат
//  пример: [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}]

// const arr = [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
// ];
// const arr2 = [];
// for (let i = 0; i < arr.length; i++) {   
//     arr2[i] = [arr[i]{...arr[i]}];
// }


//  4. создать массив на основе предыдущего, в котором
//  поля a и b будут последовательно помещены в массив
//  пример: [ 2, 1, 5, 144, 95, 49]
