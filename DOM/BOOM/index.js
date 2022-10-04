// let sum = 0;
// let btn1 = document.getElementById("b1");
// let btn2 = document.getElementById("b2");
// let btn3 = document.getElementById("b3");
// let res;
// function onBtnClick (event) {
//     if (sum < 2) {        
//         sum++;
//         const arr = ['BOOM', 'OK'];
//         res = arr[Math.random()*arr.length | 0];
//         if (res === 'BOOM') {
//             console.log('BOOM');       
//             event.target.style.background  = 'red'; 
//             btn1.disabled = true;
//             btn2.disabled = true;
//             btn3.disabled = true;
//         } else {
//             console.log('OK');
//             event.target.style.background  = 'green';
//         }
//         event.target.removeEventListener('click', onBtnClick);  
//     }
//     if (sum === 2 && res !== 'BOOM') {
//         btn1.disabled = true;
//         btn2.disabled = true;
//         btn3.disabled = true;
//         console.log('Вам повезло, последняя кнопка была BOOM');
//         if (btn1.style.background !== 'green') {
//             btn1.style.background = 'red';
//         }
//         if (btn2.style.background !== 'green') {
//             btn2.style.background = 'red';
//         }
//         if (btn3.style.background !== 'green') {
//             btn3.style.background = 'red';
//         }
//     }    
// }
// btn1.addEventListener('click', onBtnClick); 
// btn2.addEventListener('click', onBtnClick); 
// btn3.addEventListener('click', onBtnClick); 


let sum = 0;
let btn = document.getElementById("btn");
let res;
function onBtnClick (event) {
    if (sum < 2) {        
        sum++;
        const arr = ['OK', 'BOOM'];
        res = arr[Math.random()*arr.length | 0];
        if (res === 'BOOM') {
            console.log('BOOM');        
            event.target.style.background  = 'red';
            btn.removeEventListener('click', onBtnClick); 
        } else {
            console.log('OK');
            event.target.style.background  = 'green';
        }         
    }
    if (sum === 2 && res !== 'BOOM') {
        console.log('Вам повезло, последняя кнопка была BOOM');
        if (btn.style.background  !== 'green') {
            btn.style.background  = 'blue';
        }
        btn.removeEventListener('click', onBtnClick);         
    }
}
btn.addEventListener('click', onBtnClick); 