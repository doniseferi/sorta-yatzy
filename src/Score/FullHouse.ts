import { IScore } from "./IScore";
import { Dice } from "../Dice";
import { IAccumulateDice } from "../Accumulate/IAccumulate";

export class FullHouse implements IScore {

    constructor(private readonly accumulate: IAccumulateDice) {
    }

    Score(collection: Dice): number {
        let values = [...new Set(collection.dice.map(x => x.value)).values()];
        if (values.length !== 2) {
            return 0;
        }

        return this.accumulate.Sum(collection);
    }
}