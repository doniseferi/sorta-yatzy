import Die from '../src/Die';
import { Dice } from './Dice';
import { Chance } from './Score/Chance';
import { Aces } from './Score/ScoreByProxy/Aces';
import { DieFaceMultiplier } from './Score/ScoreByProxy/DieFaceMultiplier';
import { Twos } from './Score/ScoreByProxy/Twos';
import { Threes } from './Score/ScoreByProxy/Threes';
import { Fours } from './Score/ScoreByProxy/Fours';
import { Fives } from './Score/ScoreByProxy/Fives';
import { Sixes } from './Score/ScoreByProxy/Sixes';
import { OnePair } from './Score/Pairs/OnePair';
import { TwoPairs } from './Score/Pairs/TwoPairs';
import { SmallStraight } from './Score/Straights/SmallStraight';
import { LargeStraight } from './Score/Straights/LargeStraight';
import { FullHouse } from './Score/FullHouse';
import { Accumulator } from './Accumulate/Accumulator';
import { FourOfAKind } from './Score/Occurrences/FourOfAKind';
import { ThreeOfAKind } from './Score/Occurrences/ThreeOfAKind';
import { YatzyScore } from './Score/YatzyScore';
import { IScoreCard } from './Scorecard/IScoreCard';

export default class Yatzy {

  constructor(private readonly scoreCard: IScoreCard) {
  }

  chance(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    var collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Chance(new Accumulator()).Score(collection);
  }

  yatzy(...args: Die[]): number {
    let collection = Dice.CreateUsingDieCollection(args);
    return new YatzyScore().Score(collection);
  }

  ones(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Aces(new DieFaceMultiplier()).Score(collection);
  }

  twos(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Twos(new DieFaceMultiplier()).Score(collection);
  }

  threes(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Threes(new DieFaceMultiplier()).Score(collection);
  }

  fours(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let yatzyCollection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Fours(new DieFaceMultiplier()).Score(yatzyCollection);
  }

  fives(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let yatzyCollection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Fives(new DieFaceMultiplier()).Score(yatzyCollection);
  }

  sixes(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let yatzyCollection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Sixes(new DieFaceMultiplier()).Score(yatzyCollection);
  }

  score_pair(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    return new OnePair().Score(Dice.CreateUsingDie(d1, d2, d3, d4, d5));
  }

  two_pair(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    return new TwoPairs().Score(Dice.CreateUsingDie(d1, d2, d3, d4, d5));
  }

  four_of_a_kind(_1: Die, _2: Die, d3: Die, d4: Die, d5: Die): number {
    return new FourOfAKind().Score(Dice.CreateUsingDie(_1, _2, d3, d4, d5));
  }

  three_of_a_kind(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new ThreeOfAKind().Score(collection);
  }

  smallStraight(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new SmallStraight().Score(collection);
  }

  largeStraight(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new LargeStraight().Score(collection);
  }

  fullHouse(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new FullHouse(new Accumulator()).Score(collection);
  }
}