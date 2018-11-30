import { Pair } from "./Pair";
import { Dice } from "../../Dice";

export class TwoPairs extends Pair {

    invoke(collection: Dice): number {
        let duplicates = this.duplicates(collection);
        return (duplicates.length > 1)
            ? (duplicates[0] * 2) + (duplicates[1] * 2)
            : 0;
    }
}