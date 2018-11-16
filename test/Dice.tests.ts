import assert, { AssertionError } from 'assert';
import YatzyCollection from '../src/Dice';
import Die from '../src/Die';

describe("Dice", () => {
    it('Can create using numbers', () => {
        let yatzyCollection = YatzyCollection.CreateUsingNumbersArray_TO_REFACTOR([1, 2, 3, 4, 5]);

        let uno = new Die(1);
        let one = yatzyCollection.dice[0];
        assert.equal(uno, one);
    });
})