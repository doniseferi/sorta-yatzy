import { IScore } from "./IScore";
import { Dice } from '../Dice';

export class YatzyScore implements IScore {

    Score(collection: Dice): number {
        const yatzyScore = 50;

        let numberOfUniqueDie = new Set(collection.dice.map(x => x.value)).size;

        return (numberOfUniqueDie == 1)
            ? yatzyScore
            : 0;
    }
}