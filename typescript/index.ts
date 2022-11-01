// npm i typescript
// npx tsc -v
// nps tsc --init
// npx tsc
// node index.js  // выводит в терминале консоль

// const a = 2; 
// let aa = 3;
// console.log(a);
// let b = 'hello';

// let c: string;
// c = 2;

// let counter = 2;
// let str: string[] = [];

// let arr: Array<string> = [];
// let arr2: string[] = []; // одно и то же, но лучше так

// const person = {
//     name: 'Jone',
//     age: 23,
// };

// const person1: {
//     name: string;
//     age: number;
//     city?: string;
// } = {
//     name: 'Jone',
//     age: 23,
// }
// person1.city = 'Gomel'


// let arr: string[] = [];
// let arr1: [string, number, boolean?] = ['hi', 3, false];
// arr.push('fghfdj'); // ошибки не будет, все добавит, если такой тип данных описан в кортеже


// enum Features {
//     banner, // = 7, // тогда последующее значение будет 8
//     adminka,
//     premium,
// }
// // let a = Features.adminka;
// // let b: Features.premium;
// // let c = Features[0];
// // b = 0;
// // console.log(a);
// let a = Features.banner;
// if (a === Features.banner) {
//     console.log('show banner');
    
// }

// let a: any = 2;
// a = 'dfkjgh' // ошибки не будет
// a.toUpperCase();  // ошибки не будет

// let b: unknown = 2;
// b = 'fdyhjvg';
// b.toUpperCase(); // будет ошибка, нужна проверка на тип строку
// if (typeof b === 'string') {
//     b.toUpperCase();
// }


// type Person = {
//     name: string,
//     age: number,
//     city?: string,
// };
// const person: Person = {
//     name: 'Jone',
//     age: 23,
// };
// const person1: Person = {
//     name: 'Ivan',
//     age: 51,
//     city: 'Gomel'
// };

// let id: number | string | boolean = 123541356;
// id = '14413655';

// type Admin = {
//     puzo: boolean,
//     // age: string,
//     beerLitres: number,
// }

// let p1: Person & Admin = { // нужно выполнить условие всех типов
//     puzo: true,
//     beerLitres: 2,
//     name: 'Ivan',
//     age: 23,
// }

// let person: Person | Admin = { // нужно выполнить условие одного из типов
//     puzo: false,
//     beerLitres: 20,
//     name: 'Vanja',
//     age: 30
// }

// let a: string & number = 2;


// let state: 'loading' | 'error' | 'success' = 'error';
// state = 'loading';

// type Foo = (a: number, b: string) => string;
// const foo: Foo =  function (a: number = 0, b: string): string {
//     return 'a + b';
// }
// const res = foo(2,'3');

// type Person = {
//     name: string,
//     age: number,
//     city?: string,
// };
// type Foo = (a: Person, b: [string]) => string;
// const foo: Foo =  function (a: Person, b: [string]): string { // void - у функции нет ретерна и она ничего не возвращает
//    return a.name + b[0];
// }
// // const res = foo(2,'3');
// const p1: Person = {
//     name: 'dgv',
//     age: 30,
// }
// const p2 = {
//     name: 'dgv',
//     age: 30,
// }
// const res1 = foo(p1,['2']);
// const res2 = foo(p2,['2']);


// type FooNever = () => never; // бесконечная функция
// const foo: FooNever = () => {
//     foo();
// }


// type Person = {
//     name: string;
//     age: number;
//     walk(to: string): void;
// }

// type Admin = { // дважды один type написать нельзя
//     pass: string;
//     isBoroda: boolean;
// }

// type PersonAdmin = Person & Admin & {city: string};
// const obj: PersonAdmin = {
    
// }


// interface IPerson {
//     name: string;
//     age: number;
// }
// interface IAdmin {
//     pass: string;
//     isBoroda: boolean;
    
// }
// interface IAdmin { // два одинаковых interface можно записать, и дополнить в нем новое описание
//     city: string;
//     run(destination: string, speed: number): void;
// }
// const obj: IAdmin = {
//     pass: 'Ivan',
//     isBoroda: false,
//     city: 'Gomel',
//     run(destination) {
//         console.log(`${this.pass} runs to ${destination}`);
        
//     }
// }
// obj.run('itstep', 23)

// interface IPersonAdmin extends IPerson, IAdmin {
//     city: string
// }
// const obj: IPersonAdmin = {
//     name: 'Petya'
// }

class Person {
    // readonly name: string;
    // private age: number = 0;
    protected age: number = 0; // даст доступ для классов наследников
    static readonly planet = 'earth'; // readonly запретит перезапись
    // constructor (name: string) {
    //     this.name = name;
    // }

    constructor (protected readonly name: string) { // сокращение
    }

    showAge () {
        console.log(this.age);
        
    }
    run(destination: string) {
        console.log(`${this.name} to ${destination}`);
        
    }
}
class Player extends Person {
    constructor(name: string) {
        super(name)
    }
    showAge () {
        console.log(this.age);
        
    }
    play () {
        console.log(`${this.name} plays`);
        
    }
}
const p1 = new Player('Valerchik');

Person.planet;
const p = new Person('Valerchik');
p.run('dfknbh')
function greet(human: Person) {
    console.log(`Hi there ${human.name}`);    
}