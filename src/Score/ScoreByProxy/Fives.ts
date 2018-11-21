import { ScoreByProxy } from "./ScoreByProxy";
import { Dice } from "../../Dice";

export class Fives extends ScoreByProxy {

    Score(collection: Dice): number {
        return this.proxy.Score(collection, 5);
    }
}