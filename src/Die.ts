import { isNullOrUndefined } from "util";

export default class Die {

    constructor(public value: number) {
        this.validate(value);
    }

    private validate(value: number): void {
        if (isNullOrUndefined(value))
            throw new Error('A die can not have a value of null or undefined.');

        if (isNaN(value))
            throw new Error('A die can only have a numeric value');

        if (value < 1 || value > 6)
            throw new Error('A die can only have a value between 1 and 6.');
    }
}