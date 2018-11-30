import { Dice } from "../../Dice";

export interface IScoreByProxy {
    invoke(collection: Dice, score: number): number;
}