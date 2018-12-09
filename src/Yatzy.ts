import Die from '../src/Die';
import { Dice } from './Dice';
import { IScoreCard } from './Scorecard/IScoreCard';

export default class Yatzy {
  constructor(private readonly scoreCard: IScoreCard) {}

  chance = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.chance(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  yatzy = (...args: Die[]): number => this.scoreCard.yatzy(Dice.CreateUsingDieCollection(args));

  ones = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.aces(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  twos = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.twos(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  threes = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.threes(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  fours = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.fours(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  fives = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.fives(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  sixes = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.sixes(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  score_pair = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.onePair(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  two_pair = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.twoPairs(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  four_of_a_kind = (_1: Die, _2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.fourOfAKind(Dice.CreateUsingDie(_1, _2, d3, d4, d5));

  three_of_a_kind = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.threeOfAKind(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  smallStraight = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.smallStraight(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  largeStraight = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.largeStraight(Dice.CreateUsingDie(d1, d2, d3, d4, d5));

  fullHouse = (d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number =>
    this.scoreCard.fullHouse(Dice.CreateUsingDie(d1, d2, d3, d4, d5));
}