const arrWords = ['яблоко', 'груша', 'банан', 'киви', 'арбуз'];
let randWord = arrWords[Math.floor(Math.random() * arrWords.length)];
console.log(randWord);
const arrWordForRandom = randWord.split('');
console.log(arrWordForRandom);
let lenghtArrWordForRandom = arrWordForRandom.length;
console.log(lenghtArrWordForRandom);


function promptLetter(arrWord, arrDashes) {
    let num;
    let counterTrue = 0;
    let counterFalse = 0;
    for (let i = 0; i < arrWord.length; i++) {
        let userLetter = prompt();
        if (arrWord.includes(userLetter)) {
            num = arrWord.indexOf(userLetter, i);
            arrDashes[num] = arrWord[num];
            console.log(arrDashes);
            console.log('вы угадали, следующая буква');
            counterTrue++
        } if (arrDashes[i] === userLetter) {
            num = arrWord.indexOf(userLetter, i+1);
            arrDashes[num] = arrWord[num];
            console.log(arrDashes);
            console.log('вы угадали, следующая буква');
            counterTrue++
        }

        else {
            console.log('неудача');
            counterFalse++
        }
        if (counterFalse === 3 || (counterTrue - counterFalse) === arrDashes.length) {
            break
        }
        
    }  
}
promptLetter(arrWordForRandom, arrDashes);



// function dashes(arr) {  
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             let dash = document.getElementById('dashes').innerText = arrDashes[i];     
//         }           
//     return dash
// }
// }
// dashes(arrDashes);
// console.log(dash);

// function enterWord(arr, promptWord) {
//     for (let i = 0; i < arr.length; i++) {
//         let word = prompt();
        
//         let num;
//         if (arr.includes(word)) {
//             console.log('вы угадали, следующая буква');
//             let num = arr.indexOf(word);
//         } else {
//             console.log('неудача');
//             counter++
//         }
//         if (counter === 3) {
//             break
//         }
//     }  
// }
// enterWord(arrWordForRandom);

// function promptLetter(letter, arr) {
//     // let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         switch (letter) {
//             case arr[i]:
//                 console.log('вы угадали, следующая буква');
//                 // break;
        
//             default:
//                 console.log('неудача');
//                 break;
//         }
//     }
    
     
    // for (let i = 0; i < arr.length; i++) {
    //     let letter = userLetter;
       
    //     if (arr.includes(letter)) {
    //         console.log('вы угадали, следующая буква');
    //     } else {
    //         console.log('неудача');
    //         counter++;
    //     }
    //     if (counter === 3) {
    //         break
    //     }
    // }  
    // return counter
// }
// let userLetter = prompt();
// promptLetter(userLetter, arrWordForRandom)


import {arrWordForRandom, dashes} from './const.js'

console.log(arrWordForRandom);
console.log(dashes);
function showWord(arrWord, arrDashes) {
    arrWord.forEach((item, index, mass) => {
        // let num;
        let counterTrue = 0;
        let counterFalse = 0;
        let userLetter = prompt();
        if (userLetter === item) {
            // num = mass.indexOf(userLetter);
            arrDashes[index] = mass[index];
            console.log(arrDashes);
            console.log('вы угадали, следующая буква');
            counterTrue++
        } else {
            console.log('неудача');
            counterFalse++
        }
        if (counterFalse === 3 || (counterTrue - counterFalse) === arrDashes.length) {
            
        }        
    })  
};
showWord(arrWordForRandom, dashes)