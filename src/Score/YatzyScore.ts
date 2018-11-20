import { IScore } from "./IScore";
import { YatzyCollection } from '../YatzyCollection';

export class YatzyScore implements IScore {

    Score(collection: YatzyCollection): number {
        const yatzyScore = 50;

        let numberOfUniqueDie = new Set(collection.dice.map(x => x.value)).size;

        return (numberOfUniqueDie == 1)
            ? yatzyScore
            : 0;
    }
}