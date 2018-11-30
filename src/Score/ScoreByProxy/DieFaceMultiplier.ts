import { Dice } from '../../Dice';
import { IScoreByProxy } from './IScoreByProxy';

export class DieFaceMultiplier implements IScoreByProxy {
    invoke(collection: Dice, score: number): number {
        return (
            (collection
                .dice
                .filter(die => die.value == score))
                .length * score);
    }
}