import { Dice } from '../Dice';

export interface ILowerSection {
  onePair(dice: Dice): number;
  twoPairs(dice: Dice): number;
  threeOfAKind(dice: Dice): number;
  fourOfAKind(dice: Dice): number;
  smallStraight(dice: Dice): number;
  largeStraight(dice: Dice): number;
  fullHouse(dice: Dice): number;
  yatzy(dice: Dice): number;
  chance(dice: Dice): number;
}