import assert, { AssertionError } from 'assert';
import { Dice } from '../src/Dice';
import Die from '../src/Die';

describe("YatzyCollection", () => {
    it('CreateUsingDieCollection Can create using an array of die', () => {

        let one = new Die(1);
        let two = new Die(2);
        let three = new Die(3);
        let four = new Die(4);
        let five = new Die(5);

        let dice = Dice.CreateUsingDieCollection([one, two, three, four, five]).dice;

        assert.equal(dice[0].value, one.value);
        assert.equal(dice[1].value, two.value);
        assert.equal(dice[2].value, three.value);
        assert.equal(dice[3].value, four.value);
        assert.equal(dice[4].value, five.value);
    });

    it('CreateUsingNumbersCollection Can create using an array of numbers', () => {
        let dice = Dice.CreateUsingNumbersCollection([1, 2, 3, 4, 5]).dice;

        let one = new Die(1);
        let two = new Die(2);
        let three = new Die(3);
        let four = new Die(4);
        let five = new Die(5);

        assert.equal(dice[0].value, one.value);
        assert.equal(dice[1].value, two.value);
        assert.equal(dice[2].value, three.value);
        assert.equal(dice[3].value, four.value);
        assert.equal(dice[4].value, five.value);
    });

    it('CreateUsingDie Can create using individual die', () => {

        let one = new Die(1);
        let two = new Die(2);
        let three = new Die(3);
        let four = new Die(4);
        let five = new Die(5);

        let dice = Dice.CreateUsingDie(one, two, three, four, five).dice;

        assert.equal(dice[0].value, one.value);
        assert.equal(dice[1].value, two.value);
        assert.equal(dice[2].value, three.value);
        assert.equal(dice[3].value, four.value);
        assert.equal(dice[4].value, five.value);
    });

    it('CreateUsingNumbers Can create using individual individual numbers', () => {

        let one = new Die(1);
        let two = new Die(2);
        let three = new Die(3);
        let four = new Die(4);
        let five = new Die(5);

        let dice = Dice.CreateUsingNumbers(1, 2, 3, 4, 5).dice;

        assert.equal(dice[0].value, one.value);
        assert.equal(dice[1].value, two.value);
        assert.equal(dice[2].value, three.value);
        assert.equal(dice[3].value, four.value);
        assert.equal(dice[4].value, five.value);
    });
})