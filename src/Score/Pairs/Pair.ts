import { IScore } from '../IScore';
import { Dice } from '../../Dice';

export abstract class Pair implements IScore {
  abstract invoke(collection: Dice): number;

  protected duplicates = (collection: Dice): number[] => [
    ...new Set(
      collection.dice
        .map(x => x.value)
        .filter((v, i, a) => a.indexOf(v) !== i)
        .sort((a, b) => b - a)
    )
  ];
}