import { IScoreFactory } from "../Score/IScoreFactory";
import { ScoreCard } from "./ScoreCard";
import { IScoreCardFactory } from "./IScoreCardFactory";
import { IScoreCard } from "./IScoreCard";
import { injectable, inject } from "inversify";
import { TYPES } from "../Ioc/types";
import { container } from "../Ioc/inversify.config";

@injectable()
export class ScoreCardFactory implements IScoreCardFactory {

    private readonly _scoreFactory: IScoreFactory;
    constructor(@inject(TYPES.IScoreFactory) scoreFactory?: IScoreFactory) {
        scoreFactory == null
            ? this._scoreFactory = container.get<IScoreFactory>(TYPES.IScoreFactory)
            : this._scoreFactory = scoreFactory;
    }

    Create(): IScoreCard {
        return new ScoreCard(this._scoreFactory);
    }
}