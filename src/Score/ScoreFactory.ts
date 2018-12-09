import { IScore } from './IScore';
import { IScoreFactory } from './IScoreFactory';
import { Chance } from './Chance';
import { Aces } from './ScoreByProxy/Aces';
import { Twos } from './ScoreByProxy/Twos';
import { OnePair } from './Pairs/OnePair';
import { TwoPairs } from './Pairs/TwoPairs';
import { ThreeOfAKind } from './Occurrences/ThreeOfAKind';
import { FourOfAKind } from './Occurrences/FourOfAKind';
import { SmallStraight } from './Straights/SmallStraight';
import { LargeStraight } from './Straights/LargeStraight';
import { FullHouse } from './FullHouse';
import { YatzyScore } from './YatzyScore';
import { Threes } from './ScoreByProxy/Threes';
import { Fours } from './ScoreByProxy/Fours';
import { Fives } from './ScoreByProxy/Fives';
import { Sixes } from './ScoreByProxy/Sixes';
import { ScoreTypes } from '../Scorecard/ScoreTypes';
import { injectable } from 'inversify';
import { container } from '../Ioc/inversify.config';
import { TYPES } from '../Ioc/types';
import { IAccumulate } from '../Accumulate/IAccumulate';
import { IScoreByProxy } from './ScoreByProxy/IScoreByProxy';

@injectable()
export class ScoreFactory implements IScoreFactory {
  private readonly _scoreByProxy: IScoreByProxy;

  private readonly _accumulate: IAccumulate;

  constructor() {
    this._scoreByProxy = container.get<IScoreByProxy>(TYPES.IScoreByProxy);
    this._accumulate = container.get<IAccumulate>(TYPES.IAccumulate);
  }

  create = (landingOn: ScoreTypes): IScore => {
    switch (landingOn) {
      case ScoreTypes.Aces:
        return new Aces(this._scoreByProxy);
      case ScoreTypes.Twos:
        return new Twos(this._scoreByProxy);
      case ScoreTypes.Threes:
        return new Threes(this._scoreByProxy);
      case ScoreTypes.Fours:
        return new Fours(this._scoreByProxy);
      case ScoreTypes.Fives:
        return new Fives(this._scoreByProxy);
      case ScoreTypes.Sixes:
        return new Sixes(this._scoreByProxy);
      case ScoreTypes.OnePair:
        return new OnePair();
      case ScoreTypes.TwoPairs:
        return new TwoPairs();
      case ScoreTypes.ThreeOfAKind:
        return new ThreeOfAKind();
      case ScoreTypes.FourOfAKind:
        return new FourOfAKind();
      case ScoreTypes.SmallStraight:
        return new SmallStraight();
      case ScoreTypes.LargeStraight:
        return new LargeStraight();
      case ScoreTypes.FullHouse:
        return new FullHouse(this._accumulate);
      case ScoreTypes.Yatzy:
        return new YatzyScore();
      case ScoreTypes.Chance:
        return new Chance(this._accumulate);
      default:
        throw new Error('Can not recongise score card type.');
    }
  };
}
