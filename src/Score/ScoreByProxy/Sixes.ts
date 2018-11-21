import { ScoreByProxy } from "./ScoreByProxy";
import { Dice } from "../../Dice";

export class Sixes extends ScoreByProxy {

    Score(collection: Dice): number {
        return this.proxy.Score(collection, 6);
    }
}