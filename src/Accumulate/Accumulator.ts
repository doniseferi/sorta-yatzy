import { IAccumulate } from "./IAccumulate";
import { Dice } from "../Dice";
import { injectable } from "inversify";
import 'reflect-metadata';

@injectable()
export class Accumulator implements IAccumulate {
    sum(collection: Dice) {
        return (collection.dice
            .map(x => x.value)
            .reduce((prev, curr) => prev + curr, 0));
    }
}