import { IScoreCard } from './IScoreCard';
import { Dice } from '../Dice';
import { IScoreFactory } from '../Score/IScoreFactory';
import { ScoreTypes } from './ScoreTypes';
import { inject } from 'inversify';
import { TYPES } from '../Ioc/types';

export class ScoreCard implements IScoreCard {
  constructor(@inject(TYPES.IScoreFactory) private readonly scoreFactory: IScoreFactory) {}

  aces = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.Aces).invoke(dice);

  twos = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.Twos).invoke(dice);

  threes = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.Threes).invoke(dice);

  fours = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.Fours).invoke(dice);

  fives = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.Fives).invoke(dice);

  sixes = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.Sixes).invoke(dice);

  onePair = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.OnePair).invoke(dice);

  twoPairs = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.TwoPairs).invoke(dice);

  threeOfAKind = (dice: Dice): number =>
    this.scoreFactory.create(ScoreTypes.ThreeOfAKind).invoke(dice);

  fourOfAKind = (dice: Dice): number =>
    this.scoreFactory.create(ScoreTypes.FourOfAKind).invoke(dice);

  smallStraight = (dice: Dice): number =>
    this.scoreFactory.create(ScoreTypes.SmallStraight).invoke(dice);

  largeStraight = (dice: Dice): number =>
    this.scoreFactory.create(ScoreTypes.LargeStraight).invoke(dice);

  fullHouse = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.FullHouse).invoke(dice);

  yatzy = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.Yatzy).invoke(dice);

  chance = (dice: Dice): number => this.scoreFactory.create(ScoreTypes.Chance).invoke(dice);
}