import { ScoreByProxy } from './ScoreByProxy';
import { Dice } from '../../Dice';

export class Fives extends ScoreByProxy {
  invoke = (collection: Dice): number => this.proxy.invoke(collection, 5);
}
