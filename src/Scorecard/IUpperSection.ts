import { Dice } from "../Dice";

export interface IUpperSection {
    aces(dice: Dice): number;
    twos(dice: Dice): number;
    threes(dice: Dice): number;
    fours(dice: Dice): number;
    fives(dice: Dice): number;
    sixes(dice: Dice): number;
}