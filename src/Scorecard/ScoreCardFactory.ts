import { IScoreFactory } from "../Score/IScoreFactory";
import { ShortCard } from "./ScoreCard";
import { IScoreCardFactory } from "./IScoreCardFactory";
import { IScoreCard } from "./IScoreCard";
import { ScoreFactory } from "../Score/ScoreFactory";
import { injectable, inject } from "inversify";
import { TYPES } from "../Ioc/types";

@injectable()
export class ScoreCardFactory implements IScoreCardFactory {

    private readonly _scoreFactory: IScoreFactory;
    constructor(@inject(TYPES.IScoreFactory) scoreFactory: IScoreFactory) {
        scoreFactory == null
            ? this._scoreFactory = new ScoreFactory()
            : this._scoreFactory = scoreFactory;
    }

    Create(): IScoreCard {
        return new ShortCard(this._scoreFactory);
    }
}