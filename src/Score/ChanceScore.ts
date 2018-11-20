import { IScore } from "./IScore";
import { YatzyCollection } from '../YatzyCollection';

export class Chance implements IScore {

    Score(collection: YatzyCollection): number {
        return (collection.dice
            .map(x => x.value)
            .reduce((prev, curr) => prev + curr, 0));
    }
}