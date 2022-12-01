// 1. спрятать рандомно клад
// 2. получить координаты клика
// 3. выяснить расстояние от координат клика до сокровища
// 4. градация тепло-холодно
// 5. подсказки
// 6. показать сокровище

import TreasureWithHints from "./TreasureWhithHints.js";
const mapWrapper = document.getElementById('mapWrapper');
const hintElement = document.getElementById('hint');
const treasure = new TreasureWithHints(mapWrapper);

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


// const treasure = new Treasure(mapWrapper);
// setTimeout(() => {
//     treasure.show(mapWrapper)
// }, 
// )
