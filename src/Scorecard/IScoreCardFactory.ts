import { IScore } from "../Score/IScore";
import { ScoreTypes } from "./ScoreTypes";

export interface IScoreCardFactory {
    Create(landingOn: ScoreTypes): IScore;
}