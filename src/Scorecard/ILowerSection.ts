import { Dice } from "../Dice";

export interface ILowerSection {
    OnePair(dice: Dice): number;
    TwoPairs(dice: Dice): number;
    ThreeOfAKind(dice: Dice): number;
    FourOfAKind(dice: Dice): number;
    SmallStraight(dice: Dice): number;
    LargeStraight(dice: Dice): number;
    FullHouse(dice: Dice): number;
    Yatzy(dice: Dice): number;
    Chance(dice: Dice): number;
}