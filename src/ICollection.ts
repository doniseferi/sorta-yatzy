import Die from '../src/Die';
import { isNullOrUndefined } from 'util';

export default class Dice {
    
    private readonly numberOfDieInYatzyCollection = 5;

    constructor(public dice: Die[]) {
        this.validate(dice);
    }

    validate(dice: Die[]): any {
        if (isNullOrUndefined(dice))
            throw new Error('The Yatzy collection is null or undefined.');

        if (dice.length !== this.numberOfDieInYatzyCollection)
            throw new Error('A Yatzy collection needs exactly 5 die.');

        if (dice.some(die => isNullOrUndefined(die)))
            throw new Error('The Yatzy collection has a null or undefined value');
    }
}