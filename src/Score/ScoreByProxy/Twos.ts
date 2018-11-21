import { Dice } from "../../Dice";
import {ScoreByProxy} from '../ScoreByProxy/ScoreByProxy';

export class Twos extends ScoreByProxy {

    Score(collection: Dice): number {
        return this.proxy.Score(collection, 2);
    }
}