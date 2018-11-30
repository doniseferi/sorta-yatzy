import { IScore } from "./IScore";
import { Dice } from '../Dice';
import { IAccumulateDice } from "../Accumulate/IAccumulate";

export class Chance implements IScore {

    constructor(private readonly accumulate: IAccumulateDice) {
    }

    invoke(collection: Dice): number {
        return this.accumulate.sum(collection);
    }
}