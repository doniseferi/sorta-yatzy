import { IScore } from "./IScore";
import { YatzyCollection } from '../YatzyCollection';

export default class Change implements IScore {
    Score(collection: YatzyCollection): number {
        throw new Error("Method not implemented.");
    }

}