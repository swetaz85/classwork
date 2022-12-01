import Treasure from "./Treasure.js";

export default class TreasureWithHints extends Treasure {
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
