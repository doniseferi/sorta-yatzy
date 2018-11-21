import { Dice } from '../../Dice';
import { IScoreProxy } from './IScoreProxy';

export class DieFaceMultiplier implements IScoreProxy {
    Score(collection: Dice, score: number): number {
        return (
            (collection
                .dice
                .filter(die => die.value == score))
                .length * score);
    }
}