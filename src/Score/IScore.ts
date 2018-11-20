import { YatzyCollection } from "../YatzyCollection";

export interface IScore {
    Score(collection: YatzyCollection): number;
}