import { IScore } from './IScore';
import { Dice } from '../Dice';
import { IAccumulate } from '../Accumulate/IAccumulate';
import { TYPES } from '../Ioc/types';
import { inject } from 'inversify';
import 'reflect-metadata';

export class FullHouse implements IScore {
  constructor(@inject(TYPES.IAccumulate) private readonly accumulate: IAccumulate) {}

  invoke = (collection: Dice): number => {
    let values = [...new Set(collection.dice.map(x => x.value)).values()];
    if (values.length !== 2) {
      return 0;
    }

    return this.accumulate.sum(collection);
  };
}
