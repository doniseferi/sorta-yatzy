import { IScoreCard } from "./IScoreCard";

export interface IScoreCardFactory  {
    create() : IScoreCard
}