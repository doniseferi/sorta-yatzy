import { Dice } from "../Dice";

export interface IScore {
    Score(collection: Dice): number;
}