import assert from 'assert';
import Die from '../src/Die';

describe("Die", () => {
    it('Die throws an exception if invalid state is attempted', () => {
        // @ts-ignore
        assert.throws(() => new Die());
        // @ts-ignore
        assert.throws(() => new Die(null));
        // @ts-ignore
        assert.throws(() => new Die(undefined));
        // @ts-ignore
        assert.throws(() => new Die('slimmy'));
    })
})

describe('Value', () => {
    it('value returns correct value', () => {
        assert.equal(1, new Die(1).value);
        assert.equal(2, new Die(2).value);
        assert.equal(3, new Die(3).value);
        assert.equal(4, new Die(4).value);
        assert.equal(5, new Die(5).value);
        assert.equal(6, new Die(6).value);
    });

    it('Die throws an exception if value is incorrect', () => {
        assert.throws(() => new Die(0));
        assert.throws(() => new Die(-23));
        assert.throws(() => new Die(7));
        assert.throws(() => new Die(2345));
    });
});