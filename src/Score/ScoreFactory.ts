import { IScore } from "./IScore";
import { IScoreFactory } from "./IScoreFactory";
import { Chance } from "./Chance";
import { Aces } from "./ScoreByProxy/Aces";
import { DieFaceMultiplier } from "./ScoreByProxy/DieFaceMultiplier";
import { Twos } from "./ScoreByProxy/Twos";
import { OnePair } from "./Pairs/OnePair";
import { TwoPairs } from "./Pairs/TwoPairs";
import { ThreeOfAKind } from "./Occurrences/ThreeOfAKind";
import { FourOfAKind } from "./Occurrences/FourOfAKind";
import { SmallStraight } from "./Straights/SmallStraight";
import { LargeStraight } from "./Straights/LargeStraight";
import { FullHouse } from "./FullHouse";
import { YatzyScore } from "./YatzyScore";
import { Threes } from "./ScoreByProxy/Threes";
import { Fours } from "./ScoreByProxy/Fours";
import { Fives } from "./ScoreByProxy/Fives";
import { Sixes } from "./ScoreByProxy/Sixes";
import { ScoreTypes } from "../Scorecard/ScoreTypes";
import { injectable } from "inversify";
import { container } from "../Ioc/inversify.config";
import { TYPES } from "../Ioc/types";
import { IAccumulate } from "../Accumulate/IAccumulate";

@injectable()
export class ScoreFactory implements IScoreFactory {

    create(landingOn: ScoreTypes): IScore {

        switch (landingOn) {
            case ScoreTypes.Aces:
                return new Aces(new DieFaceMultiplier());
            case ScoreTypes.Twos:
                return new Twos(new DieFaceMultiplier());
            case ScoreTypes.Threes:
                return new Threes(new DieFaceMultiplier());
            case ScoreTypes.Fours:
                return new Fours(new DieFaceMultiplier());
            case ScoreTypes.Fives:
                return new Fives(new DieFaceMultiplier());
            case ScoreTypes.Sixes:
                return new Sixes(new DieFaceMultiplier());
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
                return new FullHouse(container.get<IAccumulate>(TYPES.IAccumulate));
            case ScoreTypes.Yatzy:
                return new YatzyScore();
            case ScoreTypes.Chance:
                return new Chance(container.get<IAccumulate>(TYPES.IAccumulate));
            default: throw new Error("Can not recongise score card type.")
        }
    }
}