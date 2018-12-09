import Die from '../src/Die';
import { Dice } from './Dice';
import { IScoreCard } from './Scorecard/IScoreCard';

export default class Yatzy {
  constructor(private readonly scoreCard: IScoreCard) {}

  chance(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    var collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.chance(collection);
  }

  yatzy(...args: Die[]): number {
    let collection = Dice.CreateUsingDieCollection(args);
    return this.scoreCard.yatzy(collection);
  }

  ones(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.aces(collection);
  }

  twos(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.twos(collection);
  }

  threes(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.threes(collection);
  }

  fours(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.fours(collection);
  }

  fives(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.fives(collection);
  }

  sixes(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.sixes(collection);
  }

  score_pair(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.onePair(collection);
  }

  two_pair(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.twoPairs(collection);
  }

  four_of_a_kind(_1: Die, _2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(_1, _2, d3, d4, d5);
    return this.scoreCard.fourOfAKind(collection);
  }

  three_of_a_kind(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.threeOfAKind(collection);
  }

  smallStraight(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.smallStraight(collection);
  }

  largeStraight(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.largeStraight(collection);
  }

  fullHouse(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return this.scoreCard.fullHouse(collection);
  }
}