import { Dice } from "../Dice";

export interface IAccumulateDice {
    sum(collection: Dice): number;
}