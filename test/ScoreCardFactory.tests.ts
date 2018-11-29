import assert from 'assert';
import { ScoreCardFactory } from "../src/Scorecard/ScoreCardFactory";
import { ScoreTypes } from '../src/Scorecard/ScoreTypes';

describe("ScoreCardFactory should ", () => {

    let _scoreCardFactory = new ScoreCardFactory();

    it('return Chance when Chance passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.Chance);
        assert.equal(score.constructor.name, "Chance");
    });

    it('return Aces when Aces passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.Aces);
        assert.equal(score.constructor.name, "Aces");
    });

    it('return Twos when Twos passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.Twos);
        assert.equal(score.constructor.name, "Twos");
    });

    it('return Threes when Threes passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.Threes);
        assert.equal(score.constructor.name, "Threes");
    });

    it('return Fours when Fours passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.Fours);
        assert.equal(score.constructor.name, "Fours");
    });

    it('return Fives when Fives passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.Fives);
        assert.equal(score.constructor.name, "Fives");
    });

    it('return Sixes when Sixes passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.Sixes);
        assert.equal(score.constructor.name, "Sixes");
    });
    it('return OnePair when OnePair passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.OnePair);
        assert.equal(score.constructor.name, "OnePair");
    });
    it('return TwoPairs when TwoPairs passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.TwoPairs);
        assert.equal(score.constructor.name, "TwoPairs");
    });

    it('return ThreeOfAKind when ThreeOfAKind passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.ThreeOfAKind);
        assert.equal(score.constructor.name, "ThreeOfAKind");
    });

    it('return FourOfAKind when FourOfAKind passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.FourOfAKind);
        assert.equal(score.constructor.name, "FourOfAKind");
    });

    it('return SmallStraight when SmallStraight passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.SmallStraight);
        assert.equal(score.constructor.name, "SmallStraight");
    });

    it('return LargeStraight when LargeStraight passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.LargeStraight);
        assert.equal(score.constructor.name, "LargeStraight");
    });

    it('return FullHouse when FullHouse passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.FullHouse);
        assert.equal(score.constructor.name, "FullHouse");
    });

    it('return Yatzy when Yatzy passed in.', () => {
        let score = _scoreCardFactory.Create(ScoreTypes.Yatzy);
        assert.equal(score.constructor.name, "YatzyScore");
    });
})