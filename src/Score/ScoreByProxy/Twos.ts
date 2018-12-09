import { Dice } from '../../Dice';
import { ScoreByProxy } from '../ScoreByProxy/ScoreByProxy';

export class Twos extends ScoreByProxy {
  invoke(collection: Dice): number {
    return this.proxy.invoke(collection, 2);
  }
}