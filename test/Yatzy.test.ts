import assert from 'assert';
import Die from '../src/Die';
import Yatzy from '../src/Yatzy';

describe('Chance', () => {
  it('scores sum of all dice', () => {
    assert.equal(15, Yatzy.chance(new Die(2), new Die(3), new Die(4), new Die(5), new Die(1)));
    assert.equal(21, Yatzy.chance(new Die(5), new Die(5), new Die(5), new Die(5), new Die(1)));
    assert.equal(16, Yatzy.chance(new Die(3), new Die(3), new Die(4), new Die(5), new Die(1)));
  });
});

describe('Yatzy', () => {
  it('scores 50', () => {
    assert.equal(50, Yatzy.yatzy(new Die(4), new Die(4), new Die(4), new Die(4), new Die(4)));
    assert.equal(50, Yatzy.yatzy(new Die(6), new Die(6), new Die(6), new Die(6), new Die(6)));
    assert.equal(50, Yatzy.yatzy(new Die(1), new Die(1), new Die(1), new Die(1), new Die(1)));
    assert.equal(0, Yatzy.yatzy(new Die(1), new Die(1), new Die(1), new Die(3), new Die(1)));
  });
});

describe('Ones', () => {
  it('score the sum of 1s', () => {
    assert.equal(0, Yatzy.ones(new Die(6), new Die(2), new Die(2), new Die(4), new Die(5)));
    assert.equal(1, Yatzy.ones(new Die(1), new Die(2), new Die(3), new Die(4), new Die(5)));
    assert.equal(2, Yatzy.ones(new Die(1), new Die(1), new Die(4), new Die(4), new Die(5)));
    assert.equal(3, Yatzy.ones(new Die(1), new Die(2), new Die(1), new Die(1), new Die(5)));
    assert.equal(5, Yatzy.ones(new Die(1), new Die(1), new Die(1), new Die(1), new Die(1)));
  });
});

describe('Twos', () => {
  it('score the sum of 2s', () => {
    assert.equal(0, Yatzy.twos(new Die(3), new Die(1), new Die(1), new Die(4), new Die(5)));
    assert.equal(4, Yatzy.twos(new Die(1), new Die(2), new Die(3), new Die(2), new Die(6)));
    assert.equal(10, Yatzy.twos(new Die(2), new Die(2), new Die(2), new Die(2), new Die(2)));
    assert.equal(8, Yatzy.twos(new Die(2), new Die(2), new Die(1), new Die(2), new Die(2)));
    assert.equal(8, Yatzy.twos(new Die(2), new Die(2), new Die(1), new Die(2), new Die(2)));
  });
});

describe('Threes', () => {
  it('score the sum of 3s', () => {
    assert.equal(0, Yatzy.threes(new Die(1), new Die(2), new Die(4), new Die(2), new Die(1)));
    assert.equal(6, Yatzy.threes(new Die(1), new Die(2), new Die(3), new Die(2), new Die(3)));
    assert.equal(9, Yatzy.threes(new Die(3), new Die(2), new Die(3), new Die(2), new Die(3)));
    assert.equal(12, Yatzy.threes(new Die(2), new Die(3), new Die(3), new Die(3), new Die(3)));
    assert.equal(15, Yatzy.threes(new Die(3), new Die(3), new Die(3), new Die(3), new Die(3)));
  });
});

describe('Fours', () => {
  it('score the sum of 4s', () => {
    assert.equal(0, new Yatzy(new Die(2), new Die(1), new Die(3), new Die(5), new Die(5)).fours());
    assert.equal(12, new Yatzy(new Die(4), new Die(4), new Die(4), new Die(5), new Die(5)).fours());
    assert.equal(8, new Yatzy(new Die(4), new Die(4), new Die(5), new Die(5), new Die(5)).fours());
    assert.equal(4, new Yatzy(new Die(4), new Die(5), new Die(5), new Die(5), new Die(5)).fours());
    assert.equal(16, new Yatzy(new Die(4), new Die(5), new Die(4), new Die(4), new Die(4)).fours());
    assert.equal(20, new Yatzy(new Die(4), new Die(4), new Die(4), new Die(4), new Die(4)).fours());
  });
});

describe('Fives', () => {
  it('score the sum of fives', () => {
    assert.equal(10, new Yatzy(new Die(4), new Die(4), new Die(4), new Die(5), new Die(5)).fives());
    assert.equal(15, new Yatzy(new Die(4), new Die(4), new Die(5), new Die(5), new Die(5)).fives());
    assert.equal(20, new Yatzy(new Die(4), new Die(5), new Die(5), new Die(5), new Die(5)).fives());
    assert.equal(25, new Yatzy(new Die(5), new Die(5), new Die(5), new Die(5), new Die(5)).fives());
    assert.equal(5, new Yatzy(new Die(4), new Die(4), new Die(1), new Die(6), new Die(5)).fives());
    assert.equal(0, new Yatzy(new Die(4), new Die(4), new Die(1), new Die(6), new Die(4)).fives());
  });
});

describe('Sixes', () => {
  it('score the sum of sixes', () => {
    assert.equal(0, new Yatzy(new Die(4), new Die(4), new Die(4), new Die(5), new Die(5)).sixes());
    assert.equal(6, new Yatzy(new Die(4), new Die(6), new Die(4), new Die(5), new Die(5)).sixes());
    assert.equal(18, new Yatzy(new Die(6), new Die(6), new Die(4), new Die(5), new Die(6)).sixes());
    assert.equal(12, new Yatzy(new Die(6), new Die(4), new Die(4), new Die(5), new Die(6)).sixes());
    assert.equal(30, new Yatzy(new Die(6), new Die(6), new Die(6), new Die(6), new Die(6)).sixes());
  });
});

describe('One pair', () => {
  it('scores the sum of the highest pair', () => {
    assert.equal(0, Yatzy.score_pair(new Die(3), new Die(4), new Die(1), new Die(5), new Die(6)));
    assert.equal(2, Yatzy.score_pair(new Die(1), new Die(1), new Die(4), new Die(5), new Die(6)));
    assert.equal(6, Yatzy.score_pair(new Die(3), new Die(4), new Die(1), new Die(3), new Die(6)));
    assert.equal(10, Yatzy.score_pair(new Die(5), new Die(4), new Die(1), new Die(5), new Die(6)));
  });
});

describe('Two pair', () => {
  it('scores the sum of the two pairs', () => {
    assert.equal(16, Yatzy.two_pair(new Die(3), new Die(3), new Die(5), new Die(4), new Die(5)));
    assert.equal(10, Yatzy.two_pair(new Die(4), new Die(4), new Die(4), new Die(1), new Die(1)));
    assert.equal(6, Yatzy.two_pair(new Die(2), new Die(2), new Die(1), new Die(1), new Die(1)));
    assert.equal(0, Yatzy.two_pair(new Die(4), new Die(3), new Die(1), new Die(2), new Die(2)));
  });
});

describe('Three of a kind', () => {
  it('scores the sum of the three of the kind', () => {
    assert.equal(0, Yatzy.three_of_a_kind(new Die(3), new Die(1), new Die(3), new Die(4), new Die(5)));
    assert.equal(9, Yatzy.three_of_a_kind(new Die(3), new Die(3), new Die(3), new Die(4), new Die(5)));
    assert.equal(15, Yatzy.three_of_a_kind(new Die(5), new Die(3), new Die(5), new Die(4), new Die(5)));
    assert.equal(9, Yatzy.three_of_a_kind(new Die(3), new Die(3), new Die(3), new Die(3), new Die(5)));
    assert.equal(18, Yatzy.three_of_a_kind(new Die(6), new Die(3), new Die(3), new Die(6), new Die(6)));
  });
});

describe('Four of a kind', () => {
  it('scores the sum of the four of the kind', () => {
    assert.equal(0, Yatzy.four_of_a_kind(new Die(3), new Die(3), new Die(1), new Die(3), new Die(5)));
    assert.equal(12, Yatzy.four_of_a_kind(new Die(3), new Die(3), new Die(3), new Die(3), new Die(5)));
    assert.equal(20, Yatzy.four_of_a_kind(new Die(5), new Die(5), new Die(5), new Die(4), new Die(5)));
    assert.equal(9, Yatzy.three_of_a_kind(new Die(3), new Die(3), new Die(3), new Die(3), new Die(3)));
    assert.equal(6, Yatzy.three_of_a_kind(new Die(2), new Die(3), new Die(2), new Die(3), new Die(2)));
  });
});

describe('Small straight', () => {
  it('scores 15', () => {
    assert.equal(15, Yatzy.smallStraight(new Die(1), new Die(2), new Die(3), new Die(4), new Die(5)));
    assert.equal(15, Yatzy.smallStraight(new Die(2), new Die(3), new Die(4), new Die(5), new Die(1)));
    assert.equal(0, Yatzy.smallStraight(new Die(1), new Die(2), new Die(2), new Die(4), new Die(5)));
    assert.equal(15, Yatzy.smallStraight(new Die(5), new Die(4), new Die(3), new Die(2), new Die(1)));
  });
});

describe('Large straight', () => {
  it('scores 20', () => {
    assert.equal(20, Yatzy.largeStraight(new Die(6), new Die(2), new Die(3), new Die(4), new Die(5)));
    assert.equal(20, Yatzy.largeStraight(new Die(2), new Die(3), new Die(4), new Die(5), new Die(6)));
    assert.equal(0, Yatzy.largeStraight(new Die(1), new Die(2), new Die(2), new Die(4), new Die(5)));
    assert.equal(20, Yatzy.largeStraight(new Die(6), new Die(5), new Die(4), new Die(3), new Die(2)));
  });
});

describe('Full house', () => {
  it('scores the sum of the full house', () => {
    assert.equal(18, Yatzy.fullHouse(new Die(6), new Die(2), new Die(2), new Die(2), new Die(6)));
    assert.equal(0, Yatzy.fullHouse(new Die(2), new Die(3), new Die(4), new Die(5), new Die(6)));
    assert.equal(28, Yatzy.fullHouse(new Die(6), new Die(6), new Die(6), new Die(5), new Die(5)));
    assert.equal(11, Yatzy.fullHouse(new Die(1), new Die(1), new Die(1), new Die(4), new Die(4)));
  });
});
