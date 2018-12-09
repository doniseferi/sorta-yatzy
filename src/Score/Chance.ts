import { IScore } from './IScore';
import { Dice } from '../Dice';
import { IAccumulate } from '../Accumulate/IAccumulate';
import { inject } from 'inversify';
import { TYPES } from '../Ioc/types';

export class Chance implements IScore {
  constructor(@inject(TYPES.IAccumulate) private readonly accumulate: IAccumulate) {}

  invoke(collection: Dice): number {
    return this.accumulate.sum(collection);
  }
}