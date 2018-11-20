import { IScore } from "./IScore";
import { Dice } from '../Dice';

export class Chance implements IScore {

    Score(collection: Dice): number {
        return (collection.dice
            .map(x => x.value)
            .reduce((prev, curr) => prev + curr, 0));
    }
}