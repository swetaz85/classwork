// const chooseOsnova1 = document.getElementById('osnova1');
// const chooseOsnova2 = document.getElementById('osnova2');
// const chooseOsnova3 = document.getElementById('osnova3');
// const chooseOsnova4 = document.getElementById('osnova4');
// const userIngredient = document.getElementById('userIngredients');
// const arrOsnov = [chooseOsnova1, chooseOsnova2, chooseOsnova3, chooseOsnova4];

// const arrIngredient1 = document.getElementById('ingredient1');
// const arrIngredient2 = document.getElementById('ingredient2');
// const arrIngredient3 = document.getElementById('ingredient3');
// const arrIngredient4 = document.getElementById('ingredient4');
// const arrIngredients1 = [arrIngredient1, arrIngredient2, arrIngredient3, arrIngredient4];

// // const arrResult = [];
// function addOsnovaInnerText(event) {
//     // userIngredient.innerText = event.target.innerText;
//     userIngredient.append(event.target.innerText);
//     // userIngredient.insertAdjacentElement('afterend', event.target.innerText);
//     this.removeEventListener('click',addOsnovaInnerText)
    
// }


// function addIngredient(arrIngredients) {  
//     arrIngredients.forEach((item) => {  
//         item.addEventListener('click',addOsnovaInnerText);  
//     }       
//     )      
// }
// addIngredient(arrOsnov);
// addIngredient(arrIngredients1);



// function addOneIngredient(arrIngredients) {    
//     const arrResult = [];
//     let count = 0;
//     // if (count < 2) {
//         for (let i = 0; i < arrIngredients.length; i++) {
//             if (count < 2) {
//                arrIngredients[i].addEventListener('click',addOsnovaInnerText);   
//             // arrResult.push(arrIngredients[i]);               
//             }
//             count++        
//         // }
//         // arrIngredients.forEach((item) => { 
//         //     item.addEventListener('click',addOsnovaInnerText);   
//         //     arrResult.push(item); 
//         // }    
//         // )  
//     }
          
// }




// function addTwoIngredient(arrIngredients) {    
//     const arrResult = [];
//     arrIngredients.forEach((item) => {  
//         if (arrResult.length < 2) {
//             item.addEventListener('click',addOsnovaInnerText);   
//             arrResult.push(item); 
//         }   
//     }    
//     )        
// }
// addTwoIngredient(arringredients1);

// const arrOsnov = ['Основа 1', 'Основа 2', 'Основа 3', 'Основа 4'];
// const osnova = document.getElementById('osnova');

// function addElementInHtml(arrIngredients, listInHtml) {
//     arrIngredients.forEach((item) => {
//         const userOsnova = document.createElement('li');
//         userOsnova.innerText = item;
//         listInHtml.append(userOsnova)
//     })
// }
// addElementInHtml(arrOsnov, osnova);
// const arr = [...document.getElementById('osnova').innerText];
// console.log(arr);
// const userIngredients = getElementById('userIngredients');
// function addInnerText(event) {
//     const userIngredients = getElementById('userIngredients');
//     const addIngredient = document.createElement('li');
//     addIngredient.innerText = event.target;
//     userIngredients.append(addIngredient);
//     // this.removeEventListener('click', addInnerTextv)
// }
// function addIngredient(arrIngredients) {  
//     arrIngredients.forEach((item) => {  
//         item.addEventListener('click', addInnerText); 
//         })         
// }
// addIngredient(arrOsnov);

// function addOsnovaInnerText(event) {
//     // userIngredient.innerText = event.target.innerText;
//     userIngredient.append(event.target.innerText);
//     // userIngredient.insertAdjacentElement('afterend', event.target.innerText);
//     this.removeEventListener('click',addOsnovaInnerText)
    
// }


// function addIngredient(arrIngredients) {  
//     arrIngredients.forEach((item) => {  
//         item.addEventListener('click',addOsnovaInnerText);  
//     }       
//     )      
// }
// addIngredient(arr);

class Ingredients {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice () {
        return `${this.price} руб`
    }
}
const osnova1 = new Ingredients('Основа 1 (томатный соус)', 3);
const osnova2 = new Ingredients('Основа 2 (сырный соус)', 2);
const osnova3 = new Ingredients('Основа 3 (гриль соус)', 2.5);
const osnova4 = new Ingredients('Основа 4 (ранч соус)', 4);
// console.log(osnova1.getPrice());
const arrOsnov = [osnova1.name, osnova2.name, osnova3.name, osnova4.name,];
// console.log(arrOsnov);
const arrPrice = [osnova1.price, osnova2.price, osnova3.price, osnova4.price,];
// console.log(arrPrice);


function addElementViewing(arrIngredients, listInHtml) {
    arrIngredients.forEach((item) => {
        const ingredient = document.createElement('li');
        ingredient.innerText = item;
        listInHtml.append(ingredient);
    })
}
const osnova = document.getElementById('osnova');
addElementViewing(arrOsnov, osnova);


function addIngredientViewing(event) {    
    const userIngredient = document.createElement('li');
    userIngredient.innerText = event.target.innerText;
    const userIngredients = document.getElementById('userIngredients');
    userIngredients.append(userIngredient);
    // this.removeEventListener('click',addIngredientViewing);
}

function offAddIngredientInnerText() {
    this.removeEventListener('click',addIngredientViewing);
}


function addPriceInnerText(item) {    
    let priceOld = document.getElementById('price').innerText;
    let newPrice = Number(priceOld) + Number(item);
    let price = document.querySelector('#price');
    price.textContent = `${newPrice}`;
}

function colors(event) {
    event.target.style.color = 'red';
}

function addOsnova(arrOsnov, arrPrice) {    
    // const btn_ul = document.getElementById('osnova');
    let btn_ul  = document.getElementById('osnova');
    let image = document.getElementById('img1');
    let count = 0;
    if (count < 2) {
        count++;
        btn_ul.addEventListener('click', addIngredientViewing);     

    } 






    for (let i = 0; i < arrOsnov.length; i++) { 
        if (count < 2) {
            count++
            const btn_li = document.getElementById('osnova').children[i];  
            const arrTemp = [];   
            btn_li.addEventListener('click', addIngredientViewing);
            btn_li.addEventListener('click', () => {  
            if (!arrTemp.includes(arrPrice[i])) {
                arrTemp.push(arrPrice[i])
                addPriceInnerText(arrTemp);
                
                console.log(count);
                
            }    
            btn_li.addEventListener('click', colors);
            btn_li.addEventListener('click', () => image.style.display = 'block');
                 
        });
        console.log(count);        
         
        btn_li.addEventListener('click', offAddIngredientInnerText);   
        }
        
        
    } 
      
     
}
addOsnova(arrOsnov, arrPrice);




// function addOsnova() {
//     const btn_ul  = document.getElementById('osnova');
//     let count = 0;
//     if (count < 2) {
//         count++;
//         btn_ul.addEventListener('click', addIngredientViewing);        
//     } 
//     else {
//         btn_ul.removeEventListener('click', addIngredientViewing);
//     }
// }
// addOsnova()