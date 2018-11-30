import { IScoreCard } from "./IScoreCard";
import { Dice } from "../Dice";
import { IScoreCardFactory } from "./IScoreCardFactory";
import { ScoreTypes } from "./ScoreTypes";

export class ShortCard implements IScoreCard {

    constructor(private readonly scoreCardFactory: IScoreCardFactory) {
    }

    Aces(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.Aces).Score(dice);
    }
    Twos(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.Twos).Score(dice);
    }

    Threes(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.Threes).Score(dice);
    }

    Fours(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.Fours).Score(dice);
    }

    Fives(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.Fives).Score(dice);
    }

    Sixes(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.Sixes).Score(dice);
    }

    OnePair(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.OnePair).Score(dice);
    }

    TwoPairs(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.TwoPairs).Score(dice);
    }

    ThreeOfAKind(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.ThreeOfAKind).Score(dice);
    }

    FourOfAKind(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.FourOfAKind).Score(dice);
    }

    SmallStraight(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.SmallStraight).Score(dice);
    }

    LargeStraight(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.LargeStraight).Score(dice);
    }

    FullHouse(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.FullHouse).Score(dice);
    }

    Yatzy(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.Yatzy).Score(dice);
    }

    Chance(dice: Dice): number {
        return this.scoreCardFactory.Create(ScoreTypes.Chance).Score(dice);
    }
}