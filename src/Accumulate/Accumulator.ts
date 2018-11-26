import { IAccumulateDice } from "./IAccumulate";
import { Dice } from "../Dice";

export class Accumulator implements IAccumulateDice {
    Sum(collection: Dice) {
        return (collection.dice
            .map(x => x.value)
            .reduce((prev, curr) => prev + curr, 0));
    }
}