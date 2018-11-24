import { IScore } from "../IScore";
import { Dice } from "../../Dice";

export abstract class Straight implements IScore {

    private readonly requiredUniqueVariablesLength: number = 5;
    private requiredValueInVariables: number = 0;
    private requiredAbsenceFromVariables: number = 0;
    private points: number = 0;

    constructor(protected readonly smallStraight: boolean) {
        this.Initalise(smallStraight);
    }

    Score(collection: Dice): number {
        let die = collection.dice.map(x => x.value);
        let uniqueValues = [...new Set(die)];
        return (this.isStraight(uniqueValues))
            ? this.points
            : 0;
    }

    private isStraight(collection: number[]): boolean {
        return (
            this.isTheRightLength(collection) &&
            this.hasTheRequiredValue(collection) &&
            this.hasTheRequiredAbsence(collection)
        );
    }

    private hasTheRequiredAbsence(collection: number[]): boolean {
        return collection.includes(this.requiredAbsenceFromVariables) === false;
    }

    private hasTheRequiredValue(collection: number[]): boolean {
        return collection.includes(this.requiredValueInVariables);
    }

    private isTheRightLength(collection: number[]): boolean {
        return collection.length == this.requiredUniqueVariablesLength;
    }

    private Initalise(smallStraight: boolean) {
        if (smallStraight) {
            this.requiredValueInVariables = 1;
            this.requiredAbsenceFromVariables = 6;
            this.points = 15;
        }
        else {
            this.requiredValueInVariables = 6;
            this.requiredAbsenceFromVariables = 1;
            this.points = 20;
        }
    }
}