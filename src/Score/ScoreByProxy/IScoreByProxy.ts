import { Dice } from "../../Dice";

export interface IScoreByProxy {
    Score(collection: Dice, score: number): number;
}