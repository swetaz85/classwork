
import { result } from './result.js';
export function victory(arrCorrentLetters, arrCorrentAnswer) {
    let numOfCorrentAnsw = 0;
    for (let i = 0; i < arrCorrentLetters.length; i++) {
        if (arrCorrentLetters[i] === arrCorrentAnswer[i]) {
            numOfCorrentAnsw++;
            if (numOfCorrentAnsw === arrCorrentLetters.length) {
                result('ПОБЕДА!!!', '6.jpg');
            }
        }
    }
}