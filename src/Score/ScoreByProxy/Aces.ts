import { ScoreByProxy } from "./ScoreByProxy";
import { Dice } from "../../Dice";

export class Aces extends ScoreByProxy {

    invoke(collection: Dice): number {
        return this.proxy.invoke(collection, 1);
    }
}