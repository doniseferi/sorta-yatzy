import { ScoreByProxy } from "./ScoreByProxy";
import { Dice } from "../../Dice";

export class Fours extends ScoreByProxy {

    invoke(collection: Dice): number {
        return this.proxy.invoke(collection, 4);
    }
}