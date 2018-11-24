import { IScore } from "../IScore";
import { Dice } from "../../Dice";

export abstract class Straight implements IScore {

    private readonly shouldInclude: number;
    private readonly shouldntInclude: number;
    private readonly points: number;

    constructor(protected readonly smallStraight: boolean) {
        if (smallStraight) {
            this.shouldInclude = 1;
            this.shouldntInclude = 6;
            this.points = 15;
        } else {
            this.shouldInclude = 6;
            this.shouldntInclude = 1;
            this.points = 20;
        }
    }

    Score(collection: Dice): number {
        let die = collection.dice.map(x => x.value);
        let uniqueValues = [...new Set(die)];
        return (
            uniqueValues.length >= 5 &&
            uniqueValues.includes(this.shouldInclude) &&
            uniqueValues.includes(this.shouldntInclude) === false)
            ? this.points
            : 0;
    }
}