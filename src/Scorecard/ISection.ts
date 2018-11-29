import { Dice } from "../Dice";

export interface ISection {
    Aces(dice: Dice): number;
    Twos(dice: Dice): number;
    Threes(dice: Dice): number;
    Fours(dice: Dice): number;
    Fives(dice: Dice): number;
    Sixes(dice: Dice): number;
    OnePair(dice: Dice): number;
    TwoPairs(dice: Dice): number;
    ThreeOfAKind(dice: Dice): number;
    FourOfAKind(dice: Dice): number;
    SmallStraight(dice: Dice): number;
    LargeStraight(dice: Dice): number;
    FullHouse(dice: Dice): number;
    Yatzy(dice: Dice): number;
}