import { result } from './result.js';
import { randWord } from './const.js'
export function showErrorImage(countFalse) {
    let arrImage = ['2.png', '3.png', '4.png'];
    let img = document.getElementById('image');
    img.src = arrImage[countFalse - 1];
    if (countFalse === 3) {
        result(`ПОРАЖЕНИЕ! правильное слово: \n ${randWord.toLocaleUpperCase()}`, '5.png');
    }
}