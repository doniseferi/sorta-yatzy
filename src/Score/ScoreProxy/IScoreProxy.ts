import { Dice } from "../../Dice";

export interface IScoreProxy {
    Score(collection: Dice, score: number): number;
}