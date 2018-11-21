import Die from '../src/Die';
import { Dice } from './Dice';
import { Chance } from './Score/ChanceScore';
import { YatzyScore } from './Score/YatzyScore';
import { Aces } from './Score/ScoreByProxy/Aces';
import { DieFaceMultiplier } from './Score/ScoreProxy/DieFaceMultiplier';
import { Twos } from './Score/ScoreByProxy/Twos';
import { Threes } from './Score/ScoreByProxy/Threes';
import { Fours } from './Score/ScoreByProxy/Fours';
import { Fives } from './Score/ScoreByProxy/Fives';
import { Sixes } from './Score/ScoreByProxy/Sixes';

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
    let collcetion = Dice.CreateUsingDie(d1, d2, d3, d4, d5);
    return new Aces(new DieFaceMultiplier()).Score(collcetion);
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
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1.value - 1]++;
    counts[d2.value - 1]++;
    counts[d3.value - 1]++;
    counts[d4.value - 1]++;
    counts[d5.value - 1]++;
    var at;
    for (at = 0; at != 6; at++) if (counts[6 - at - 1] >= 2) return (6 - at) * 2;
    return 0;
  }

  static two_pair(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1.value - 1]++;
    counts[d2.value - 1]++;
    counts[d3.value - 1]++;
    counts[d4.value - 1]++;
    counts[d5.value - 1]++;
    var n = 0;
    var score = 0;
    for (let i = 0; i < 6; i += 1)
      if (counts[6 - i - 1] >= 2) {
        n++;
        score += 6 - i;
      }
    if (n == 2) return score * 2;
    else return 0;
  }

  static four_of_a_kind(_1: Die, _2: Die, d3: Die, d4: Die, d5: Die): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[_1.value - 1]++;
    tallies[_2.value - 1]++;
    tallies[d3.value - 1]++;
    tallies[d4.value - 1]++;
    tallies[d5.value - 1]++;
    for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
    return 0;
  }

  static three_of_a_kind(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    var t;
    t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    t[d1.value - 1]++;
    t[d2.value - 1]++;
    t[d3.value - 1]++;
    t[d4.value - 1]++;
    t[d5.value - 1]++;
    for (let i = 0; i < 6; i++) if (t[i] >= 3) return (i + 1) * 3;
    return 0;
  }

  static smallStraight(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0];
    tallies[d1.value - 1] += 1;
    tallies[d2.value - 1] += 1;
    tallies[d3.value - 1] += 1;
    tallies[d4.value - 1] += 1;
    tallies[d5.value - 1] += 1;
    if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1) return 15;
    return 0;
  }

  static largeStraight(d1: Die, d2: Die, d3: Die, d4: Die, d5: Die): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1.value - 1] += 1;
    tallies[d2.value - 1] += 1;
    tallies[d3.value - 1] += 1;
    tallies[d4.value - 1] += 1;
    tallies[d5.value - 1] += 1;
    if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1) return 20;
    return 0;
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