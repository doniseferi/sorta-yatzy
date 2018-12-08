import { IScore } from "../IScore";
import { Dice } from "../../Dice";
import { IScoreByProxy } from "./IScoreByProxy";
import { inject, injectable } from "inversify";
import { TYPES } from "../../Ioc/types";

@injectable()
export abstract class ScoreByProxy implements IScore {
    abstract invoke(collection: Dice): number;

    protected readonly proxy: IScoreByProxy;

    constructor(@inject(TYPES.IScoreByProxy) proxy: IScoreByProxy) {
        this.proxy = proxy;
    }
}