import { Dice } from "../Dice";

export interface IAccumulateDice {
    Sum(collection: Dice): number;
}