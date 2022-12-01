import { arrWordForRandom, btn, dashes, inputNode, dashesNode } from './modules/const.js';
import { showRandomDashes } from './modules/showDashes.js';
import { showErrorImage } from './modules/showErrorImage.js';
import { victory } from './modules/victory.js';

function game(arrWord, arrDashes) {
    let countFalse = 0;
    showRandomDashes();
    function onBtnClick() {
        arrWord.forEach((item, index) => {
            if (item === inputNode.value) {
                dashes[index] = inputNode.value;
                dashesNode.innerText = dashes.join(' ')
            }
        });
        if (!arrDashes.includes(inputNode.value)) {
            countFalse++
            showErrorImage(countFalse);
        }
        if (countFalse === 3) {
            btn.removeEventListener('click', onBtnClick);
        }
        victory(arrWord, arrDashes);
        inputNode.value = '';
    }
    btn.addEventListener('click',onBtnClick);
    inputNode.addEventListener('keydown',function(e){
        if (e.keyCode === 13){
            onBtnClick();
        }
    });
    
}
game(arrWordForRandom, dashes);