import { resultBlock, textResult, restartBtn, gameWrapper } from './const.js'

export function result(resText, resImage) {
    setTimeout(() => {
        let img = document.getElementById('img');        
        resultBlock.style.display = 'block';
        gameWrapper.style.display = 'none';
        textResult.innerText = resText;  
        img.src = resImage;      
        restartBtn.addEventListener('click', () => location.reload());
    }, 1000);
}