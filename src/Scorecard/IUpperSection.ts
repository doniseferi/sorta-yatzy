import { Dice } from "../Dice";

export interface IUpperSection {
    Aces(dice: Dice): number;
    Twos(dice: Dice): number;
    Threes(dice: Dice): number;
    Fours(dice: Dice): number;
    Fives(dice: Dice): number;
    Sixes(dice: Dice): number;
}