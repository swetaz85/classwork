// Document
// Object
// Model
// console.dir(document.body);
// console.dir(document.children[0].children[1]);
// console.dir(document.children[0].children[1].children[1]);
// document.bgColor = 'red';


// const h1 = document.body.children[2];
// console.log(h1.nextElementSibling); // если нет следующего соседа получим null
// console.log(h1.previousElementSibling); // если нет предыдущего соседа получим null
// console.log(h1.parentElement); // переход к родителю

// const ul = document.getElementById('list'); // !!!!!!получаем элемент, а не коллекцию
// console.log(ul.children);
// const lis = document.getElementsByTagName('li')
// const lis1 = ul.getElementsByTagName('li');
// console.log(lis1);
// console.log(lis); // получаем коллекцию
// console.log([...lis]); // переводим в массив
// console.log( Array.from(lis)); // второй метод создания массива

// const lis = document.getElementsByClassName('item')
// console.log( lis );

// const lis = document.getElementById('test');
// const lis1 = lis.getElementsByClassName('item');
// console.log( lis1 );

// const lis = document.getElementById('test').getElementsByClassName('item');
// console.log( lis );

// const lis = document.getElementsByTagName('ul')[1].getElementsByClassName('item');
// console.log( lis );

// const uls = document.getElementsByTagName('ul');
// [...uls].forEach((ul) => console.log(ul.getElementsByClassName('item')));

// const lis = document.querySelector('#list'); 
// console.log(lis);
// console.log(lis1);
// const lis2 = document.querySelectorAll('#list > li:not(.item');
// console.log(lis2);

// const lisDead = document.querySelectorAll('.item'); // возвращают неживую коллекцию
// const lisAlive = document.getElementsByClassName('item'); // возвращают живую коллекцию
// console.log(lisDead);
// console.log(lisAlive);


// const btn = document.getElementById('btn');
// console.dir(btn);

// так не делать, последующая функция перезапишет предыдущую
// btn.onclick = () => {
//     console.log('button click');
// }
// btn.onclick = () => {
//     console.log('button click dfkgbj');
// }

// btn.addEventListener('click', function () {
//     console.log('hi');
// });
// const onBtnClick = function () {
//     console.log('hi there again');
// }
// btn.addEventListener('click', function () {
//     console.log('hi all');
// });

// btn.removeEventListener('click', onBtnClick);



// const btn = document.getElementById('btn');


// btn.addEventListener('click', function () {
//     console.log('HI THERE!');
// });

// const onBtnClick = function () {
//     console.log('HI THERE AGAIN!');
// };
// btn.addEventListener('click', onBtnClick);
// btn.removeEventListener('click', onBtnClick);


// const btn = document.getElementById('btn');
// function onBtnClick () {
//     console.log('chtoto'); 
//     this.removeEventListener('click', onBtnClick)
// };
// btn.addEventListener('click', onBtnClick);


// const btn = document.getElementById('btn');
// btn.addEventListener('click', (event) => {
//     console.log(event.target); // аналог this, но работает и в класической и стрелочной функции
// })
// const input = document.getElementById('input');
// input.addEventListener('keydown', function (event) { 
//     console.log(event.target.value);
// });

// const link = document.getElementById('a');
// link.addEventListener('click', (event) => {
//     event.preventDefault(); // не перейдет на указанную ссылку
//     console.log('link click');
// });
// window.addEventListener('contextmenu', (event) => {
//     event.preventDefault(); // не работает меню на правой клавише мыши
// })


// const list = document.getElementById('list');
// const lis = [...list.getElementsByTagName('li')];
// function onLiClick({target}) {
//     console.log(target.innerText); // покажет сам текст из списка
//     console.log(this);
// }
// lis.forEach((li) => li.addEventListener('click', onLiClick));
// list.addEventListener('click', onLiClick);
// this на ком вызвано событие, target на ком произошло

const arr = ['BOOM', 'OK'];
let b1 = arr[0];
let b2 = arr[1];
let b3 = arr[1];
const cl = document.getElementById('game');
console.log(cl);
cl.addEventListener('click', () => {
        console.log('a');    
    })
