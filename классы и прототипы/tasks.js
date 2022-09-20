// Напишите функцию, которая вычисляет длину линий в стандартной двухмерной системе координат. Координаты начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью функции
//  Проверьте, могут ли три линии сформировать треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина каждой стороны треугольника должны быть меньше суммы длин остальных сторон.

// class Lines {
//     constructor (p1, p2) {
//         this.p1 = p1;
//         this.p2 = p2;
//     }
//     get lengthLine () {
//         let hypotenuse = Math.sqrt(Math.pow((this.p2.x-this.p1.x),2) + Math.pow((this.p2.y-this.p1.y),2));      
//         return hypotenuse
//     }
// }
// class Point {
//     constructor (x,y) {
//         this.x = x;
//         this.y = y;
//     }
// }
// let p1 = new Point(1,1);
// let p2 = new Point(3,3);
// let line1 = new Lines(p1, p2);
// let p3 = new Point(4,1);
// let p4 = new Point(5,3);
// let line2 = new Lines(p3, p4);
// let p5 = new Point(2,3);
// let p6 = new Point(4,6);
// let line3 = new Lines(p5, p6);
// console.log(line1.lengthLine());
// console.log(line2.lengthLine());
// console.log(line3.lengthLine());

// function triangle(l1,l2,l3) {
//     if (l1.lengthLine() < (l2.lengthLine() + l3.lengthLine()) && l2.lengthLine() < (l1.lengthLine() + l3.lengthLine()) && l3.lengthLine() < (l2.lengthLine() + l1.lengthLine())) {
//         console.log('да, это может быть треугольник');
//     }
// }
// triangle(line1,line2,line3);


// На этом изображении показано как нужно организовать наследование между классами.
// Требования:
// Human должен принимать параметры name,аде.
// Все представители этого класса должны иметь метод ,sayHi(), который возвращает строку с приветствием.
// Programmer должен принимать параметр technologies (массив строк) с названиями любых технологий (пример: ['HTML', 'CSS', 'JS']).
// Все представители этого класса долны иметь метод .startCodingO, который возвращает строку вида 'David is coding using HTML, CSS, JS'.
// Имя 'David' и названия технологий должны меняться в зависимости оттого, каким объектом был вызван метод.
// Sportsman должен принимать параметр medals, который характеризует количество медалей у спортсмена.
// FootballPlayer должен принимать параметр team (строка) с названием команды где играет футболист. 
// Все представители этого класса должны иметь метод .run(speed), где speed это число характеризующее скорость бега.
//  Метод .run(б) должен возвращать строку вида 'John is running б kmph', где имя 'John' может меняться в зависимости от объекта вызывающего метод ,run().
// HockeyPlayer должен принимать параметр weight (число) характеризующим массу хоккеиста.
// Все представители этого класса должны иметь метод .pushOpponent(opponentName), который должен возвращать строку вида 'Bill pushed Brandon and used 123kgs', 
// имя 'Bill' и количество кг могут меняться в зависимости от объекта запустившего метод. Имя 'Brandon' может меняться в зависимости от opponentName 
// переданного в момент вызова метода.
// class Human {
//     constructor (name, age) {
//     this.name = name;
//     this.age = age;
//     }
//     sayHi() {
//         return `Hello!`
//     }
// }
// class Programmer extends Human{
//     constructor (name, age, technologies) {
//         super(name, age);
//         this.technologies = technologies;
//     }
//     startCodingO() {
//         return `${this.name} is coding using ${this.technologies}`
//     }
// }

// class Sportsman extends Human{
//     constructor (name, age, medals) {
//         super(name, age);
//         this.medals = medals;
//     }
// }

// class FootballPlayer extends Sportsman {
//     constructor (name, age, medals, team) {
//         super(name, age, medals);
//         this.team = team;
//     }
//     run(speed) {
//         return `${this.name} is running ${speed} kmph`
//     }
// }

// class HockeyPlayer extends Sportsman {
//     constructor (name, age, medals, weight) {
//         super(name, age, medals);
//         this.weight = weight;
//     }
//     pushOpponent(opponentName) {
//         return `${this.name} ushed ${opponentName} and used ${this.weight} kgs`
//     }
// }

// let person1 = new Human('Oleg', 30);
// console.log(person1.sayHi());

// let person2 = new Programmer('David', 25, ['HTML', 'CSS', 'JS']);
// console.log(person2.startCodingO());

// let person3 = new Sportsman('Ivan', 20, 15);
// console.log(person3);

// let person4 = new FootballPlayer('Valera', 24, 10, 'Barselona');
// console.log(person4);
// console.log(person4.run(6));

// let person5 = new HockeyPlayer('Bill', 22, 12, 123);
// console.log(person5);
// console.log(person5.pushOpponent('Brandon'));




// Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device,
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две
// батарейки). Создать класс Gamepad, который наследует от
// Device. Класс Gamepad должен содержать поле model, поле
// isConnected (boolean) и методы connectTo(), который
// принимает название другого девайса и выводит сообщение
// типа “gamepadModel connected to TV”, метод disconnect(),
// который отключает Gamepad и метод play(), который
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно
// поле batteryType у Device и type у Battery не совпадают, то
// вывести сообщение что батарейки не вставлены.
// Подключить один девайс к другому можно только если есть
// 2 батарейки. Подключить Gamepad можно только если
// isConnected == false. Если заряд батареек == 0, то метод
// play вернет сообщение с требованием замены батареек.


class Battery {
    #enregy = 100;
    constructor (type) {
        this.type = type;
    }
    consumeEnergy (amout) {
        if (amout <= this.#enregy) {
            this.#enregy -= amout;
        }
    }
    get energy () {
        return  this.#enregy;
    }
    recharge () {
        this.#enregy = 100;
    }
}
class Device {
    #batteries = [];
    constructor(batteryType) {
        this.batteryType = batteryType;
    }
    insertBattery(bt1, bt2) {
        if (bt1?.type !== this.batteriesType || bt2?.type !== this.batteries.Type) {
            console.log('battery types are incompatible');
        } else if (this.#batteries.length) {
            console.log('batteries are already set');
        } else {
        this.#batteries = [bt1, bt2];
        }
    }
    removeBatteries () {
        this.#batteries = [];
    }
    consumeEnergy (val) {
        this.#batteries.forEach((bt) => bt.consumeEnergy(val))
    }
    areBatteriesCharged () {
        return this.#batteries.every((bt) => bt.energy);
    }
    hasBatteries () {
        return !!this.#batteries.length;
    }
}
class Gamepad extends Device{
    #isConnected = false;
    constructor (model, batteryType) {
        super(batteryType)
        this.model = model;
    }
    connectTo(device) {
        if (this.hasBatteries() && !this.#isConnected) {
        console.log(`${this.model} has been connected to ${device}`);
        this.#isConnected = true;    
        } else {
            console.log(`This ${this.model} doesn't have batteries or is already connected`);
        }
        
    }
    disconnect() {
        this.#isConnected = false;
    }
    play () {
        if (this.areBatteriesCharged() && this.hasBatteries()) {
            this.consumeEnergy(10);   
            console.log('you are play');
        } else {
            this.#isConnected = false;
            console.log('Please change batteries');
        }        
    }
}
const bt1 = new Battery ('AA');
const bt2 = new Battery ('AA');
const xboxGamepad = new Gamepad('XBox Gamepad', 'AA');
xboxGamepad.insertBattery(bt1, bt2);
xboxGamepad.connectTo('Playstation');
// xboxGamepad.play();
// xboxGamepad.play();
// xboxGamepad.play();
// xboxGamepad.play();
// xboxGamepad.play();
// xboxGamepad.play();
// xboxGamepad.removeBatteries();
// xboxGamepad.play();
// xboxGamepad.play();

// Написать конструктор товара, который должен принимать
// имя, стоимость, цвет и объект params с параметрами (длина,
// ширина, высота). Для параметров params, должен
// существовать конструктор Params, который принимает три
// параметра (width, length, height)
// class Params {
//     constructor (width, length, height) {
//         this.width = width;
//         this.length = length;
//         this.height = height
//     }
// }
// let paramsTovar = new Params(10,20,30);
// class Tovar {
//     constructor (name, price, color, params) {
//         this.name = name;
//         this.price = price;
//         this.color = color
//         this.params = params
//     }
// }
// let tovar1 = new Tovar('bmw', 100, 'red', paramsTovar);
// console.log(tovar1);