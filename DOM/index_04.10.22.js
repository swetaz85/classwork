// const wrapper = document.getElementById('wrapper');
// const list = document.getElementById('list');
// const fitemItem = document.getElementById('fitem');
// const pItem = document.getElementById('pitem');
// wrapper.addEventListener('click', () => {
//     console.log('WRAPPER');
// });
// list.addEventListener('click', () => {
//     console.log('LIST');
// }, true); // true перехват, это выполнится первым
// fitemItem.addEventListener('click', () => {
//     console.log('LI');
// });
// const liListener = (event) => {
//     event.stopImmediatePropagation(); // отключает все дальнейшие действия
//     event.stopPropagation(); // отключит действия после полной проверки этого элемента, а далее отключит дальнейшие действия
//     console.log('LI');
// }
// fitemItem.addEventListener('click', liListener);
// fitemItem.addEventListener('click', liListener, true);
// pItem.addEventListener('click', () => {
//     console.log('P');
// });


// const list = document.getElementById('list');
// const pItem = document.getElementById('pitem');
// console.log(pItem.innerText);
// console.log(list.innerHTML);
// pItem.innerHTML = '<h1>Hello</h1>'; // заменит содержимое тега

// pItem.addEventListener('click', () => {
    // pItem.setAttribute('name', 'blabla');
    // pItem.setAttribute('wasClicked', 'true');
    // console.log(pItem.getAttribute('wasClicked'));
    // const pItemCopy = pItem.cloneNode(); // копирует тег без его содержимого
    // const pItemCopyTrue = pItem.cloneNode(true); // копирует тег c его содержимым
    // console.log(pItemCopy);
    // console.log(pItemCopyTrue);
    // pItem.dataset.smth = 'pppppppppp';
    // Object.keys(pItem.dataset).forEach()
    // console.dir(pItem.dataset.smth);
    // pItem.remove(); // не уничтожает ссылку на элемент, только уберет элемент из дом-дерева    
// })

// const list = document.getElementById('list');
// const pItem = document.getElementById('pitem');
// list.addEventListener('click', () => {
//     const newLi = document.createElement('li');
//     newLi.innerText = 'some text here';
    // const bratik = list.getElementsByTagName('li')[2];
    // list.insertBefore(newLi, bratik); // что вставить и перед каким элементом
    // list.insertBefore(newLi, list.getElementsByTagName('li')[2]); // или так

    // list.append(newLi); // добавит новый элемент в конец к родителю
    // list.prepend(newLi); // добавит новый элемент в начало к родителю
    // list.insertAdjacentElement('', newLi) // куда и какой элемент добавить ('afterbegin' - начало, 'afterend' - наружу элемента в конце, 'beforebegin', 'beforeend');
    // list.insertAdjacentHTML('afterbegin', '<h1>Hello</h1>');
    // list.before(newLi);
    // list.after(newLi);

    // const item3 = list.getElementsByTagName('li')[2];
    // list.append(item3); // перенесет элемент в указанное место
    // list.append(item3.cloneNode(true)); // сделает копию элемента и перенесет в указанное место
// })


// const list = document.getElementById('list');
// const pItem = document.getElementById('pitem');
// pItem.addEventListener('click', () => {
    // pItem.style.backgroundColor = 'red'; // так лучше не делать style имеет больший приоритет
// })
// pItem.addEventListener('click', (event) => {
    // pItem.style.padding = event.clientX + 'px';
    // pItem.className
    // pItem.classList.add('active');
    // pItem.classList.remove('two');
    // pItem.classList.contains('one');
    // pItem.classList.replace('one', 'bla');
    // pItem.classList.toggle('active'); // active если его не было будет добавлен, если он был уберет
// })