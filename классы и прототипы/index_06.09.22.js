//es5

const person = {
    userName: 'Bob',
    age: 25,
    brain: true,
};
const programmer = {
    userName: 'Valerchik',
    age: 25,
    brain: true,
    stack: ['HTML', 'CSS']
}

function Person (userName, age) {
    console.log(this)
    //return this   ----- автоматчески будет возвращать пустой обьект
    this.userName = userName;
    this.age = age;
    this.brain = true;
}

const person2 = new Person('Mooly', 66)
console.log(new Person ('holly', 5)) //здесь this это пустой обьект класса person, пользуемся функцией как конструктором и классом

//инстанс - это обьект созданный с помощью конструктора(класса) (инстанс persona например)
console.log(person2 instanceof Person);
// не стоит добавлять поля в получившиеся обьекты
//класс это обычная функция
//!!! через new функция всегда должна возвращать обьект!!!



//prototype - это обьект
console.log(Person.prototype)  //в прототипе персон хранит ссылку на самого себя, это обычный обьект
const person3 = new Person.prototype.constructor('Peter, 20')
// const Programmer = () => {
//     this.a = 2;
// };
// console.log(new Programmer()) //так работать не будет, так как у стрелочной функции нет своего This

Person.prototype.constitution = 'bla bla bla';

//одна функция- один прототип
console.log(person.__proto__) //как либо менять прото нельзя


const obj = Object.create({a: 2}) //один раз при рождении обьекта можем присвоить ему прототип, если передать null. то у него не будет прототипов и это будет чистый обьект
console.log(obj)

Person.prototype.run = function (){   //создаем одну функцию для всех дальнейших обьектов
    console.log(`${this.userName} run`)
}