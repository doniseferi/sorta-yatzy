import Die from '../src/Die';
import { Dice } from './Dice';
import { IScoreCard } from './Scorecard/IScoreCard';

export default class Yatzy {

  constructor(private readonly scoreCard: IScoreCard) {
  }

  chance(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    var collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.Chance(collection);
  }

  yatzy(...args: Die[]): number {
    let collection = Dice.CreateUsingDieCollection(args);
    return this.scoreCard.Yatzy(collection);
  }

  ones(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.Aces(collection);
  }

  twos(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.Twos(collection);
  }

  threes(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.Threes(collection);
  }

  fours(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.Fours(collection);
  }

  fives(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.Fives(collection);
  }

  sixes(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.Sixes(collection);
  }

  score_pair(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.OnePair(collection);
  }

  two_pair(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.TwoPairs(collection);
  }

  four_of_a_kind(_1: Die, _2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(_1, _2, d3, d4, d5);
    return this.scoreCard.FourOfAKind(collection);
  }

  three_of_a_kind(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.ThreeOfAKind(collection);
  }

  smallStraight(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.SmallStraight(collection);
  }

  largeStraight(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.LargeStraight(collection);
  }

  fullHouse(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.FullHouse(collection);
  }
}