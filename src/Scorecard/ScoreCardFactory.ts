import { IScoreFactory } from "../Score/IScoreFactory";
import { ShortCard } from "./ScoreCard";
import { IScoreCardFactory } from "./IScoreFactory";
import { IScoreCard } from "./IScoreCard";
import { ScoreFactory } from "../Score/ScoreFactory";

export class ScoreCardFactory implements IScoreCardFactory {

    private readonly _scoreFactory: IScoreFactory;
    constructor(scoreFactory?: IScoreFactory) {
        //TODO: use intesifyjs for ioc and dip inv con
        scoreFactory == null
            ? this._scoreFactory = new ScoreFactory()
            : this._scoreFactory = scoreFactory;
    }

    Create(): IScoreCard {
        return new ShortCard(this._scoreFactory);
    }
}