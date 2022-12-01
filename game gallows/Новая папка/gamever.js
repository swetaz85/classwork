export function gamever(countFalse) {
    let divGameover = document.getElementById('resultGameover');
    let offWrapper = document.getElementById('gameWrapper');
    setTimeout(() => {
        if (countFalse === 3) {
            offWrapper.style.display = 'none';
            divGameover.style.display = 'block';
        }        
    }, 500);    
}