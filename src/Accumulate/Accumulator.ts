import { IAccumulate } from "./IAccumulate";
import { Dice } from "../Dice";

export class Accumulator implements IAccumulate {
    sum(collection: Dice) {
        return (collection.dice
            .map(x => x.value)
            .reduce((prev, curr) => prev + curr, 0));
    }
}