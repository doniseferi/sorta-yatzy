import { IScore } from "./IScore";
import { Dice } from "../Dice";
import Die from "../Die";

export class ThreeOfAKind implements IScore {
    Score(collection: Dice): number {
        let value = this.getThrez(collection) * 3;
        return value;
    }

    getOccurrence(collection: Dice, value: number):number {
        return collection.dice.filter((v) => (v.value === value)).length;
    }

    getThrez(collection: Dice) : number {
        for (let i = 1; i < 6; i++) {
            let count = this.getOccurrence(collection, i);
            if (count >= 3)
                return i;
        }
        return 0;
    }
}