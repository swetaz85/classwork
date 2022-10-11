// export const person = {
//     name: 'John',
//     age: 23
// }

// export const cat = {
//     nick: 'Murzik',
//     age: 24
// }


// или экспорт другим способом:
const person = {
    name: 'John',
    age: 23
};
const cat = {
    nick: 'Murzik',
    age: 24
};
export {person, cat};

export default class Person  { // export default  используется только один раз
    constructor () {
        this.name = 'Smith'
    }
}