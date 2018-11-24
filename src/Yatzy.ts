import Die from '../src/Die';
import { Dice } from './Dice';
import { Chance } from './Score/Chance';
import { YatzyScore } from './Score/YatzyScore';
import { Aces } from './Score/ScoreByProxy/Aces';
import { DieFaceMultiplier } from './Score/ScoreProxy/DieFaceMultiplier';
import { Twos } from './Score/ScoreByProxy/Twos';
import { Threes } from './Score/ScoreByProxy/Threes';
import { Fours } from './Score/ScoreByProxy/Fours';
import { Fives } from './Score/ScoreByProxy/Fives';
import { Sixes } from './Score/ScoreByProxy/Sixes';
import { OnePair } from './Score/Pairs/OnePair';
import { TwoPairs } from './Score/Pairs/TwoPairs';
import { Occurrences } from './Score/Occurrences';
import { SmallStraight } from './Score/Straights/SmallStraight';
import { LargeStraight } from './Score/Straights/LargeStraight';

export default class Yatzy {
  private yatzyCollection: Dice;

  constructor(d1: Die, d2: Die, d3: Die, d4: Die, _5: Die) {
    this.yatzyCollection = Dice.CreateUsingDie(d1, d2, d3, d4, _5);
  }

  static chance(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    var collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Chance().Score(collection);
  }

  static yatzy(...args: Die[]): number {
    let collection = Dice.CreateUsingDieCollection(args);
    return new YatzyScore().Score(collection);
  }

  static ones(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Aces(new DieFaceMultiplier()).Score(collection);
  }

  static twos(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Twos(new DieFaceMultiplier()).Score(collection);
  }

  static threes(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Threes(new DieFaceMultiplier()).Score(collection);
  }

  fours(): number {
    return new Fours(new DieFaceMultiplier()).Score(this.yatzyCollection);
  }

  fives(): number {
    return new Fives(new DieFaceMultiplier()).Score(this.yatzyCollection);
  }

  sixes(): number {
    return new Sixes(new DieFaceMultiplier()).Score(this.yatzyCollection);
  }

  static score_pair(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    return new OnePair().Score(Dice.CreateUsingDie(d1, d2, d3, d4, d5));
  }

  static two_pair(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    return new TwoPairs().Score(Dice.CreateUsingDie(d1, d2, d3, d4, d5));
  }

  static four_of_a_kind(_1: Die, _2: Die, d3: Die, d4: Die, d5: Die): number {
    return new Occurrences(4).Score(Dice.CreateUsingDie(_1, _2, d3, d4, d5));
  }

  static three_of_a_kind(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    return new Occurrences(3).Score(Dice.CreateUsingDie(d1, d2, d3, d4, d5));
  }

  static smallStraight(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1,d2,d3,d4,d5);
    return new SmallStraight().Score(collection);
  }

  static largeStraight(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    let collection = Dice.CreateUsingDie(d1,d2,d3,d4,d5);
    return new LargeStraight().Score(collection);
  }

  static fullHouse(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    var tallies;
    var _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1.value - 1] += 1;
    tallies[d2.value - 1] += 1;
    tallies[d3.value - 1] += 1;
    tallies[d4.value - 1] += 1;
    tallies[d5.value - 1] += 1;

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 2) {
        _2 = true;
        _2_at = i + 1;
      }

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 3) {
        _3 = true;
        _3_at = i + 1;
      }

    if (_2 && _3) return _2_at * 2 + _3_at * 3;
    else return 0;
  }
}