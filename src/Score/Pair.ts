import { IScore } from "./IScore";
import { Dice } from '../Dice';

export class Pair implements IScore {

    Score(collection: Dice): number {
        let lets = 
            collection.dice
                .map(x => x.value)
                .filter((v,i,a) => a.indexOf(v) !== i)
                .sort((a,b) => b-a);

        return (lets.length > 0) 
            ? lets[0] + lets[0] 
            : 0;
    }
}