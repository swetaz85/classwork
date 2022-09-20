// 2. Создать класс Battery, который инициализирует поля type,
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
    #energy = 100;

    constructor (type) {
        this.type = type;
    }

    consumeEnergy (amount) {
        if (amount <= this.#energy) {
            this.#energy -= amount;
        }       
    }

    get energy () {
        return this.#energy;
    }

    recharge () {
        this.#energy = 100;
    }
}

class Device {
    #batteries = [];

    constructor (batteryType) {
        this.batteryType = batteryType;
    }

    insertBatteries (bt1, bt2) {
        if (bt1?.type !== this.batteryType || bt2?.type !== this.batteryType) {
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
        this.#batteries.forEach((bt) => bt.consumeEnergy(val));
    }

    areBatteriesCharged () {
        return this.#batteries.every((bt) => bt.energy);
    }

    hasBatteries () {
        return Boolean(this.#batteries.length);
    }
}

class Gamepad extends Device {
    #isConnected = false;

    constructor (model, batteryType) {
        super(batteryType);
        this.model = model;
    }

    connectTo (device) {
        if (this.hasBatteries() && !this.#isConnected) {
            console.log(`${this.model} has been connected to ${device}`);
            this.#isConnected = true;
        } else {
            console.log(`This ${this.model} doesn't have batteries or is already connected`);
        }
    }
    disconnect () {
        this.#isConnected = false;
    }

    play () {
        if (this.areBatteriesCharged() && this.hasBatteries()) {
            this.consumeEnergy(10);
            console.log(`you are playing`);
        } else {
            this.#isConnected = false;
            console.log(`Please change/insert batteries`);
        }
    }
}

const bt1 = new Battery('AA');
const bt2 = new Battery('AA');
const xboxGamepad = new  Gamepad('Xbox Gamepad', 'AA');

xboxGamepad.insertBatteries(bt1,bt2);
xboxGamepad.connectTo('Playstation');
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.removeBatteries();
xboxGamepad.play();
xboxGamepad.play();









