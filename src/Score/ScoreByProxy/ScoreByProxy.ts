import { IScore } from "../IScore";
import { Dice } from "../../Dice";
import { IScoreByProxy } from "./IScoreByProxy";

export abstract class ScoreByProxy implements IScore {
    abstract invoke(collection: Dice): number;

    protected readonly proxy: IScoreByProxy;

    constructor(proxy: IScoreByProxy) {
        this.proxy = proxy;
    }
}