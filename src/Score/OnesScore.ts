import { IScore } from "./IScore";
import { Dice } from '../Dice';
import { IScoreProxy } from "./ScoreProxy/IScoreProxy";


abstract class DieFaceScore implements IScore {
    abstract Score(collection: Dice): number;

    protected readonly proxy: IScoreProxy;

    constructor(proxy: IScoreProxy) {
        this.proxy = proxy;
    }
}

export class Aces extends DieFaceScore {

    Score(collection: Dice): number {
        return this.proxy.Score(collection, 1);
    }
}

export class Twos extends DieFaceScore {

    Score(collection: Dice): number {
        return this.proxy.Score(collection, 2);
    }
}

export class Threes extends DieFaceScore {

    Score(collection: Dice): number {
        return this.proxy.Score(collection, 3);
    }
}