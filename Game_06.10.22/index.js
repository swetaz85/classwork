// 1. спрятать рандомно клад
// 2. получить координаты клика
// 3. выяснить расстояние от координат клика до сокровища
// 4. градация тепло-холодно
// 5. подсказки
// 6. показать сокровище

const hintElement = document.getElementById('hint')
const gameHandler = ({offsetX, offsetY, currentTarget}) => {
    const clickCoords = {
        x: offsetX,
        y: offsetY,
    }
    const distanceToTreasure = treasure.getLengthTo(clickCoords);
    const hint = treasure.getHintByLenght(distanceToTreasure);
    hintElement.innerText = hint;
    if (hint === TreasureWithHints.hints[0]) {
        treasure.show();
        currentTarget.removeEventListener('click', gameHandler)
    }
    console.log(distanceToTreasure);
    console.log(hint);
}
mapWrapper.addEventListener('click', gameHandler);

class Treasure {    
    static IMAGE_URL = './img/chest.png';
    constructor (parent) {
        this.coords = {
            x: this.#calculateCoord(parent.clientWidth),
            y: this.#calculateCoord(parent.clientHeight),
        }
        this.parent = parent;
        // console.dir(parent);
    }
    #calculateCoord (limit) {
        const gap = limit * 0.1;
        return Math.round(Math.random() * ( limit- 2 * gap)) + gap
    }
    // создать дом элемент
    // добавить клад в родительский элемент
    // согласно координатам сверстать элемент (добавить стили)
    show () {
        const img = document.createElement('img');
        img.src = Treasure.IMAGE_URL;
        img.style.width = '15%';
        img.style.position = 'absolute';
        img.style.left = `${this.coords.x}px`;
        img.style.top = `${this.coords.y}px`;
        img.style.transform = 'translate(-50%, -50%) scale(0.5)';
        img.style.opacity = 0;
        img.style.transition = 'all 0.5s ease'
        setTimeout(() => {            
            img.style.opacity = 1;
            img.style.transform = 'translate(-50%, -50%) scale(1)'
        }, 500)
        this.parent.style.position = 'relative';
        this.parent.append(img);
    }
    getLengthTo ({x,y}) {
        const katet1Lenght = this.coords.x - x;
        const katet2Lenght = this.coords.y - y;
        return Math.round(Math.sqrt(katet1Lenght**2 + katet2Lenght**2))
    }
}
// const treasure = new Treasure(mapWrapper);
// setTimeout(() => {
//     treasure.show(mapWrapper)
// }, 
// )

class TreasureWithHints extends Treasure {
    static hints = [
        'TREASURE FOUND!',
        'HOT',
        'WARM!',
        'COLD',
        'WINTER IS COMING'
    ]
    constructor (parent) {
        super(parent);
    }
    getHintByLenght(lenght) {
        if (lenght < 20) {
            return TreasureWithHints.hints[0];
        } else if (lenght < 50) {
            return TreasureWithHints.hints[1];
        } else if (lenght < 80) {
            return TreasureWithHints.hints[2];
        } else if (lenght < 110) {
            return TreasureWithHints.hints[3];
        }  else  {
            return TreasureWithHints.hints[4];
        }
    }
    
}
const treasure = new TreasureWithHints(mapWrapper);