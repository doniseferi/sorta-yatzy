import { IScore } from '../IScore';
import { Dice } from '../../Dice';

export abstract class Straight implements IScore {
  private readonly requiredUniqueVariablesLength: number = 5;
  private readonly requiredValueInVariables: number;
  private readonly requiredAbsenceFromVariables: number;
  private readonly points: number;

  constructor(protected readonly smallStraight: boolean) {
    if (smallStraight) {
      this.requiredValueInVariables = 1;
      this.requiredAbsenceFromVariables = 6;
      this.points = 15;
    } else {
      this.requiredValueInVariables = 6;
      this.requiredAbsenceFromVariables = 1;
      this.points = 20;
    }
  }

  invoke = (collection: Dice): number => {
    let die = collection.dice.map(x => x.value);
    let uniqueValues = [...new Set(die)];
    return this.isStraight(uniqueValues) ? this.points : 0;
  };

  private isStraight = (collection: number[]): boolean =>
    this.isTheRightLength(collection) &&
    this.hasTheRequiredValue(collection) &&
    this.hasTheRequiredAbsence(collection);

  private hasTheRequiredAbsence = (uniqueDieFaces: number[]): boolean =>
    uniqueDieFaces.includes(this.requiredAbsenceFromVariables) === false;

  private hasTheRequiredValue = (uniqueDieFaces: number[]): boolean =>
    uniqueDieFaces.includes(this.requiredValueInVariables);

  private isTheRightLength = (unqiueDieFaces: number[]): boolean =>
    unqiueDieFaces.length == this.requiredUniqueVariablesLength;
}