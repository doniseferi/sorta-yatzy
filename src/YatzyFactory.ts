import Yatzy from "./Yatzy";
import { IScoreCardFactory } from "./Scorecard/IScoreFactory";
import { ScoreCardFactory } from "./Scorecard/ScoreCardFactory";
import { IScoreCard } from "./Scorecard/IScoreCard";

export interface IYatzyFactory {
    Create(): Yatzy;
}
export class YatzyFactory implements IYatzyFactory {

    private readonly _scoreCard: IScoreCard;
    constructor(scoreCardFactory?: IScoreCardFactory) {
        scoreCardFactory == null
            ? this._scoreCard = new ScoreCardFactory().Create()
            : this._scoreCard = scoreCardFactory.Create();
    }

    Create(): Yatzy {
        return new Yatzy(this._scoreCard);
    }
}