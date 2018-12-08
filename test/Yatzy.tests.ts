import assert from 'assert';
import Die from '../src/Die';
import Yatzy from '../src/Yatzy';
import { container } from '../src/Ioc/inversify.config';
import { IYatzyFactory } from '../src/IYatzyFactory';
import { TYPES } from '../src/Ioc/types';

describe('Yatzy', () => {

  let yatzy: Yatzy;

  before('Initialize Yatzy', () => {
    
    yatzy = container.get<IYatzyFactory>(TYPES.IYatzyFactory).Create();
  });

  describe('Chance', () => {
    it('scores sum of all dice', () => {
      assert.equal(15, yatzy.chance(new Die(2), new Die(3), new Die(4), new Die(5), new Die(1)));
      assert.equal(21, yatzy.chance(new Die(5), new Die(5), new Die(5), new Die(5), new Die(1)));
      assert.equal(16, yatzy.chance(new Die(3), new Die(3), new Die(4), new Die(5), new Die(1)));
    });
  });

  describe('Yatzy', () => {
    it('scores 50', () => {
      assert.equal(50, yatzy.yatzy(new Die(4), new Die(4), new Die(4), new Die(4), new Die(4)));
      assert.equal(50, yatzy.yatzy(new Die(6), new Die(6), new Die(6), new Die(6), new Die(6)));
      assert.equal(50, yatzy.yatzy(new Die(1), new Die(1), new Die(1), new Die(1), new Die(1)));
      assert.equal(0, yatzy.yatzy(new Die(1), new Die(1), new Die(1), new Die(3), new Die(1)));
    });
  });

  describe('Ones', () => {
    it('score the sum of 1s', () => {
      assert.equal(0, yatzy.ones(new Die(6), new Die(2), new Die(2), new Die(4), new Die(5)));
      assert.equal(1, yatzy.ones(new Die(1), new Die(2), new Die(3), new Die(4), new Die(5)));
      assert.equal(2, yatzy.ones(new Die(1), new Die(1), new Die(4), new Die(4), new Die(5)));
      assert.equal(3, yatzy.ones(new Die(1), new Die(2), new Die(1), new Die(1), new Die(5)));
      assert.equal(5, yatzy.ones(new Die(1), new Die(1), new Die(1), new Die(1), new Die(1)));
    });
  });

  describe('Twos', () => {
    it('score the sum of 2s', () => {
      assert.equal(0, yatzy.twos(new Die(3), new Die(1), new Die(1), new Die(4), new Die(5)));
      assert.equal(4, yatzy.twos(new Die(1), new Die(2), new Die(3), new Die(2), new Die(6)));
      assert.equal(10, yatzy.twos(new Die(2), new Die(2), new Die(2), new Die(2), new Die(2)));
      assert.equal(8, yatzy.twos(new Die(2), new Die(2), new Die(1), new Die(2), new Die(2)));
      assert.equal(8, yatzy.twos(new Die(2), new Die(2), new Die(1), new Die(2), new Die(2)));
    });
  });

  describe('Threes', () => {
    it('score the sum of 3s', () => {
      assert.equal(0, yatzy.threes(new Die(1), new Die(2), new Die(4), new Die(2), new Die(1)));
      assert.equal(6, yatzy.threes(new Die(1), new Die(2), new Die(3), new Die(2), new Die(3)));
      assert.equal(9, yatzy.threes(new Die(3), new Die(2), new Die(3), new Die(2), new Die(3)));
      assert.equal(12, yatzy.threes(new Die(2), new Die(3), new Die(3), new Die(3), new Die(3)));
      assert.equal(15, yatzy.threes(new Die(3), new Die(3), new Die(3), new Die(3), new Die(3)));
    });
  });

  describe('Fours', () => {
    it('score the sum of 4s', () => {
      assert.equal(0, yatzy.fours(new Die(2), new Die(1), new Die(3), new Die(5), new Die(5)));
      assert.equal(12, yatzy.fours(new Die(4), new Die(4), new Die(4), new Die(5), new Die(5)));
      assert.equal(8, yatzy.fours(new Die(4), new Die(4), new Die(5), new Die(5), new Die(5)));
      assert.equal(4, yatzy.fours(new Die(4), new Die(5), new Die(5), new Die(5), new Die(5)));
      assert.equal(16, yatzy.fours(new Die(4), new Die(5), new Die(4), new Die(4), new Die(4)));
      assert.equal(20, yatzy.fours(new Die(4), new Die(4), new Die(4), new Die(4), new Die(4)));
    });
  });

  describe('Fives', () => {
    it('score the sum of fives', () => {
      assert.equal(10, yatzy.fives(new Die(4), new Die(4), new Die(4), new Die(5), new Die(5)));
      assert.equal(15, yatzy.fives(new Die(4), new Die(4), new Die(5), new Die(5), new Die(5)));
      assert.equal(20, yatzy.fives(new Die(4), new Die(5), new Die(5), new Die(5), new Die(5)));
      assert.equal(25, yatzy.fives(new Die(5), new Die(5), new Die(5), new Die(5), new Die(5)));
      assert.equal(5, yatzy.fives(new Die(4), new Die(4), new Die(1), new Die(6), new Die(5)));
      assert.equal(0, yatzy.fives(new Die(4), new Die(4), new Die(1), new Die(6), new Die(4)));
    });
  });

  describe('Sixes', () => {
    it('score the sum of sixes', () => {
      assert.equal(0, yatzy.sixes(new Die(4), new Die(4), new Die(4), new Die(5), new Die(5)));
      assert.equal(6, yatzy.sixes(new Die(4), new Die(6), new Die(4), new Die(5), new Die(5)));
      assert.equal(18, yatzy.sixes(new Die(6), new Die(6), new Die(4), new Die(5), new Die(6)));
      assert.equal(12, yatzy.sixes(new Die(6), new Die(4), new Die(4), new Die(5), new Die(6)));
      assert.equal(30, yatzy.sixes(new Die(6), new Die(6), new Die(6), new Die(6), new Die(6)));
    });
  });

  describe('One pair', () => {
    it('scores the sum of the highest pair', () => {
      assert.equal(0, yatzy.score_pair(new Die(3), new Die(4), new Die(1), new Die(5), new Die(6)));
      assert.equal(2, yatzy.score_pair(new Die(1), new Die(1), new Die(4), new Die(5), new Die(6)));
      assert.equal(6, yatzy.score_pair(new Die(3), new Die(4), new Die(1), new Die(3), new Die(6)));
      assert.equal(10, yatzy.score_pair(new Die(5), new Die(4), new Die(1), new Die(5), new Die(6)));
      assert.equal(12, yatzy.score_pair(new Die(5), new Die(6), new Die(1), new Die(5), new Die(6)));
    });
  });

  describe('Two pair', () => {
    it('scores the sum of the two pairs', () => {
      assert.equal(16, yatzy.two_pair(new Die(3), new Die(3), new Die(5), new Die(4), new Die(5)));
      assert.equal(10, yatzy.two_pair(new Die(4), new Die(4), new Die(4), new Die(1), new Die(1)));
      assert.equal(6, yatzy.two_pair(new Die(2), new Die(2), new Die(1), new Die(1), new Die(1)));
      assert.equal(0, yatzy.two_pair(new Die(4), new Die(3), new Die(1), new Die(2), new Die(2)));
    });
  });

  describe('Three of a kind', () => {
    it('scores the sum of the three of the kind', () => {
      assert.equal(0, yatzy.three_of_a_kind(new Die(3), new Die(1), new Die(3), new Die(4), new Die(5)));
      assert.equal(9, yatzy.three_of_a_kind(new Die(3), new Die(3), new Die(3), new Die(4), new Die(5)));
      assert.equal(15, yatzy.three_of_a_kind(new Die(5), new Die(3), new Die(5), new Die(4), new Die(5)));
      assert.equal(9, yatzy.three_of_a_kind(new Die(3), new Die(3), new Die(3), new Die(3), new Die(5)));
      assert.equal(18, yatzy.three_of_a_kind(new Die(6), new Die(3), new Die(3), new Die(6), new Die(6)));
    });
  });

  describe('Four of a kind', () => {
    it('scores the sum of the four of the kind', () => {
      assert.equal(0, yatzy.four_of_a_kind(new Die(3), new Die(3), new Die(1), new Die(3), new Die(5)));
      assert.equal(12, yatzy.four_of_a_kind(new Die(3), new Die(3), new Die(3), new Die(3), new Die(5)));
      assert.equal(20, yatzy.four_of_a_kind(new Die(5), new Die(5), new Die(5), new Die(4), new Die(5)));
      assert.equal(9, yatzy.three_of_a_kind(new Die(3), new Die(3), new Die(3), new Die(3), new Die(3)));
      assert.equal(6, yatzy.three_of_a_kind(new Die(2), new Die(3), new Die(2), new Die(3), new Die(2)));
    });
  });

  describe('Small straight', () => {
    it('scores 15', () => {
      assert.equal(15, yatzy.smallStraight(new Die(1), new Die(2), new Die(3), new Die(4), new Die(5)));
      assert.equal(15, yatzy.smallStraight(new Die(2), new Die(3), new Die(4), new Die(5), new Die(1)));
      assert.equal(0, yatzy.smallStraight(new Die(1), new Die(2), new Die(2), new Die(4), new Die(5)));
      assert.equal(15, yatzy.smallStraight(new Die(5), new Die(4), new Die(3), new Die(2), new Die(1)));
    });
  });

  describe('Large straight', () => {
    it('scores 20', () => {
      assert.equal(20, yatzy.largeStraight(new Die(6), new Die(2), new Die(3), new Die(4), new Die(5)));
      assert.equal(20, yatzy.largeStraight(new Die(2), new Die(3), new Die(4), new Die(5), new Die(6)));
      assert.equal(0, yatzy.largeStraight(new Die(1), new Die(2), new Die(2), new Die(4), new Die(5)));
      assert.equal(20, yatzy.largeStraight(new Die(6), new Die(5), new Die(4), new Die(3), new Die(2)));
    });
  });

  describe('Full house', () => {
    it('scores the sum of the full house', () => {
      assert.equal(18, yatzy.fullHouse(new Die(6), new Die(2), new Die(2), new Die(2), new Die(6)));
      assert.equal(0, yatzy.fullHouse(new Die(2), new Die(3), new Die(4), new Die(5), new Die(6)));
      assert.equal(28, yatzy.fullHouse(new Die(6), new Die(6), new Die(6), new Die(5), new Die(5)));
      assert.equal(11, yatzy.fullHouse(new Die(1), new Die(1), new Die(1), new Die(4), new Die(4)));
    });
  });
});