import { IScore } from "./IScore";
import { Dice } from '../Dice';

export class OnesScore implements IScore {
    
    private  readonly funcky: (collection: Dice, no: number) => number;
    constructor(funck: (collection: Dice, no: number) => number) {
        this.funcky = funck;
    }


    Score(collection: Dice): number {
        return this.funcky(collection, 1);
    }
}

export class TwosScore implements IScore {
    
    private  readonly funcky: (collection: Dice, no: number) => number;
    constructor(funck: (collection: Dice, no: number) => number) {
        this.funcky = funck;
    }


    Score(collection: Dice): number {
        return this.funcky(collection, 2);
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