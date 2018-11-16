import Die from './Die';
import { isNullOrUndefined } from 'util';

export default class YatzyCollection {

    public static CreateUsingDieArray_TO_REFACTOR(dice: Die[]): YatzyCollection {
        return new YatzyCollection(dice);
    }
    public static CreateUsingNumbersArray_TO_REFACTOR(numbers: number[]) {
        let dice = numbers.map(number => new Die(number));
        return this.CreateUsingDieArray_TO_REFACTOR(dice);
    }
    public static CreateUsingMulitpleDie_TO_REFACTOR(one: Die, two: Die, three: Die, four: Die, five: Die): YatzyCollection {
        return this.CreateUsingDieArray_TO_REFACTOR([one, two, three, four, five]);
    }
    public static CreateUsingMultipleNumbers_TO_REFACTOR(one: number, two: number, three: number, four: number, five: number): YatzyCollection {
        return this.CreateUsingNumbersArray_TO_REFACTOR([one, two, three, four, five]);
    }

    private constructor(public dice: Die[]) { }

    private static validate(dice: Die[]): void {

        const numberOfDieInYatzyCollection = 5;

        if (isNullOrUndefined(dice))
            throw new Error('The Yatzy collection is null or undefined.');

        if (dice.length !== numberOfDieInYatzyCollection)
            throw new Error('A Yatzy collection needs exactly 5 die.');

        if (dice.some(die => isNullOrUndefined(die)))
            throw new Error('The Yatzy collection has a null or undefined value');
    }
}