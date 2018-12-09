import { IScore } from './IScore';
import { ScoreTypes } from '../Scorecard/ScoreTypes';

export interface IScoreFactory {
  create(landingOn: ScoreTypes): IScore;
}