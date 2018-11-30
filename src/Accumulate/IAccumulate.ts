import { Dice } from "../Dice";

export interface IAccumulate {
    sum(collection: Dice): number;
}