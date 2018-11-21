import { Dice } from '../../Dice';

export class DieFaceMultiplier {
    Score(collection: Dice, dieToCount: number): number {
        return (
            (collection
                .dice
                .filter(die => die.value == dieToCount))
                .length * dieToCount);
    }
}