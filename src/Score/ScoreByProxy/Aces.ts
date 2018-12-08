import { ScoreByProxy } from "./ScoreByProxy";
import { Dice } from "../../Dice";
import { injectable } from "inversify";

export class Aces extends ScoreByProxy {

    invoke(collection: Dice): number {
        return this.proxy.invoke(collection, 1);
    }
}