import { IScore } from '../IScore';
import { Dice } from '../../Dice';
import Die from '../../Die';
import { isNullOrUndefined } from 'util';

export class Occurrences implements IScore {
  constructor(private xOfAKind: number) {}

  invoke = (collection: Dice): number => {
    let die = collection.dice.find(x => this.getOccurrences(collection, x) >= this.xOfAKind);
    return !isNullOrUndefined(die) ? die.value * this.xOfAKind : 0;
  };

  getOccurrences = (collection: Dice, die: Die): number =>
    collection.dice.filter(v => v.value === die.value).length;
}