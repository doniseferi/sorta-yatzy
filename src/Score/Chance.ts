import { IScore } from "./IScore";
import { Dice } from '../Dice';
import { IAccumulate } from "../Accumulate/IAccumulate";

export class Chance implements IScore {

    constructor(private readonly accumulate: IAccumulate) {
    }

    invoke(collection: Dice): number {
        return this.accumulate.sum(collection);
    }
}