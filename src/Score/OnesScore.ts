import { IScore } from "./IScore";
import { Dice } from '../Dice';

export class OnesScore implements IScore {
    
    private readonly singleDieScore : SingleDieScore;
    constructor() {
        this.singleDieScore = new SingleDieScore();
    }

    Score(collection: Dice): number {
        return this.singleDieScore.Score(collection, 1);
    }
}

export class SingleDieScore {
    Score(collection: Dice, dieToCount: number) : number {
        return (
            (collection
                .dice
                .filter(die => die.value == dieToCount))
                .length);
    }
}