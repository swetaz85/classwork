export function victory(arr1, arr2) {
    let divVictory = document.getElementById('resultVictory');
    let offWrapper = document.getElementById('gameWrapper');
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sum++;
            // console.log('победа');
            if (sum === arr1.length) {
                offWrapper.style.display = 'none';
                divVictory.style.display = 'block';
            }            
        }        
    }
}

