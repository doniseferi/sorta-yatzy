import { IScore } from "./IScore";
import { Dice } from '../Dice';

export class OnesScore implements IScore {

    private readonly scoreCallback: (collection: Dice, no: number) => number;
    constructor(funck: (collection: Dice, no: number) => number) {
        this.scoreCallback = funck;
    }


    Score(collection: Dice): number {
        return this.scoreCallback(collection, 1);
    }
}

export class TwosScore implements IScore {

    private readonly scoreCallback: (collection: Dice, no: number) => number;
    constructor(funck: (collection: Dice, no: number) => number) {
        this.scoreCallback = funck;
    }


    Score(collection: Dice): number {
        return this.scoreCallback(collection, 2);
    }
}

export class ThreesScore implements IScore {

    private readonly scoreCallback: (collection: Dice, no: number) => number;
    constructor(funck: (collection: Dice, no: number) => number) {
        this.scoreCallback = funck;
    }


    Score(collection: Dice): number {
        return this.scoreCallback(collection, 3);
    }
}