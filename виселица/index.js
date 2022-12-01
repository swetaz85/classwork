const arrWords = ['яблоко', 'груша', 'банан', 'киви', 'арбуз'];
let randWord = arrWords[Math.floor(Math.random() * arrWords.length)];
console.log(randWord);

const arrWordForRandom = randWord.split('');
// // let lenghtArrWordForRandom = arrWordForRandom.length;

const dashesNode = document.getElementById('dashes');
const dashes = arrWordForRandom.map(item => item = '_');
function showRandomDashes(){
    dashesNode.innerText = dashes.join(' ');
}
showRandomDashes();


let inputNode = document.getElementById('input-id');
let btn = document.getElementById('btn');

// console.log(arrWordForRandom);
// console.log(dashes);


 
function showErrorLetter(countFalse) {
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

function gamever(countFalse) {
    let divGameover = document.getElementById('resultGameover');
    let offWrapper = document.getElementById('gameWrapper');
    setTimeout(() => {
        if (countFalse === 3) {
            offWrapper.style.display = 'none';
            divGameover.style.display = 'block';
        }        
    }, 500);    
}

function victory(arr1, arr2) {
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

function showWords(arrWord, arrDashes){ 
    let countFalse = 0;
    function onBtnClick () {
        arrWord.forEach((item, index) => {
            if (inputNode.value === item) {
                arrDashes[index] = item;
                dashesNode.innerText.split(' ')[index] = inputNode.value;
                showRandomDashes();
                // console.log(arrDashes);
            } 
        });   
        if (!arrDashes.includes(inputNode.value)) {
            countFalse++
            showErrorLetter(countFalse);
        }
        if (countFalse === 3) {
                btn.removeEventListener('click', onBtnClick);
            }    
        victory(arrWord, arrDashes);            
    }
    btn.addEventListener('click', onBtnClick);      
}
showWords(arrWordForRandom, dashes);

