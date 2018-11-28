import { IScore } from "../Score/IScore";
import { Chance } from "../Score/Chance";
import { Accumulator } from "../Accumulate/Accumulator";
import { Aces } from "../Score/ScoreByProxy/Aces";
import { DieFaceMultiplier } from "../Score/ScoreByProxy/DieFaceMultiplier";
import { Twos } from "../Score/ScoreByProxy/Twos";
import { OnePair } from "../Score/Pairs/OnePair";
import { TwoPairs } from "../Score/Pairs/TwoPairs";
import { ThreeOfAKind } from "../Score/Occurrences/ThreeOfAKind";
import { FourOfAKind } from "../Score/Occurrences/FourOfAKind";
import { SmallStraight } from "../Score/Straights/SmallStraight";
import { LargeStraight } from "../Score/Straights/LargeStraight";
import { FullHouse } from "../Score/FullHouse";
import { YatzyScore } from "../Score/YatzyScore";

export interface IScoreCardFactory {
    Create(landingOn: ScoreTypes): IScore;
}

export class ScoreCardFactory implements IScoreCardFactory {

    Create(landingOn: ScoreTypes): IScore {
        throw new Error("Method not implemented.");

        switch (landingOn) {
            case ScoreTypes.Chance:
                return new Chance(new Accumulator());
            case ScoreTypes.Aces:
                return new Aces(new DieFaceMultiplier());
            case ScoreTypes.Twos:
                return new Twos(new DieFaceMultiplier());
            case ScoreTypes.Threes:
                return new Twos(new DieFaceMultiplier());
            case ScoreTypes.Fours:
                return new Twos(new DieFaceMultiplier());
            case ScoreTypes.Fives:
                return new Twos(new DieFaceMultiplier());
            case ScoreTypes.Sixes:
                return new Twos(new DieFaceMultiplier());
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
                return new FullHouse(new Accumulator());
            case ScoreTypes.Yahtzee:
                return new YatzyScore();
            default: throw new Error("Can not recongise score card type.")
        }
    }
}