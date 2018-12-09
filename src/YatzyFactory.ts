import Yatzy from './Yatzy';
import { inject, injectable } from 'inversify';
import { TYPES } from './Ioc/types';
import { IYatzyFactory } from './IYatzyFactory';
import { IScoreCard } from './Scorecard/IScoreCard';
import { IScoreCardFactory } from './Scorecard/IScoreCardFactory';

@injectable()
export class YatzyFactory implements IYatzyFactory {
  private readonly _scoreCard: IScoreCard;

  constructor(@inject(TYPES.IScoreCardFactory) scoreCardFactory: IScoreCardFactory) {
    this._scoreCard = scoreCardFactory.create();
  }

  Create(): Yatzy {
    return new Yatzy(this._scoreCard);
  }
}