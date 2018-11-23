import { Pair } from "./Pair";
import { Dice } from "../../Dice";

export class OnePair extends Pair {

    Score(collection: Dice): number {
        let duplicates = this.duplicates(collection);
        return duplicates.length > 0
            ? duplicates[0] * 2
            : 0;
    }
}