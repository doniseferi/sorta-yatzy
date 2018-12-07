import { IScoreCard } from "./IScoreCard";

export interface IScoreCardFactory  {
    Create() : IScoreCard
}