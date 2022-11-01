"use strict";
// npm i typescript
// npx tsc -v
// nps tsc --init
// npx tsc
// node index.js  // выводит в терминале консоль
const obj = {
    pass: 'Ivan',
    isBoroda: false,
    city: 'Gomel',
    run(destination) {
        console.log(`${this.pass} runs to ${destination}`);
    }
};
obj.run('itstep', 23);
// interface IPersonAdmin extends IPerson, IAdmin {
//     city: string
// }
// const obj: IPersonAdmin = {
//     name: 'Petya'
// }
