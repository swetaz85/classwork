import {gamever} from './modules/gamever.js';
export function showErrorImage(countFalse) {
    let img1 = document.getElementById('img_1'); 
    let img2 = document.getElementById('img_2');
    let img3 = document.getElementById('img_3');
    let img4 = document.getElementById('img_4');
        
    // const img1 = document.createElement('img');   
    // img1.src = '1.png';  
    // const img2 = document.createElement('img');   
    // img2.src = '2.png';  
    // const img3 = document.createElement('img');   
    // img3.src = '3.png';  
    // const img4 = document.createElement('img');   
    // img4.src = '4.png';  
   
    if (countFalse === 1) {   
        img1.style.display = 'none';
        img2.style.display = 'block';
        // img2.style.visibility="visible";
        // document.getElementById('img').appendChild(img2);
        
    } else if (countFalse === 2) {  
        img2.style.display = 'none';      
        img3.style.display = 'block';
        // img2.style.visibilty="hidden";
        // img2.parentNode.removeChild(img2);
        // document.getElementById('img').appendChild(img3);        
    } else if (countFalse === 3) {
        img3.style.display = 'none';
        img4.style.display = 'block';   
        gamever(countFalse); 
        // document.getElementById('img').appendChild(img4);        
    }
}