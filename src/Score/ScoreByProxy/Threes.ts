import { ScoreByProxy } from "./ScoreByProxy";
import { Dice } from "../../Dice";

export class Threes extends ScoreByProxy {

    invoke(collection: Dice): number {
        return this.proxy.invoke(collection, 3);
    }
}