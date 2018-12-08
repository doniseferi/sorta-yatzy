import { Container } from "inversify";
import { IAccumulate } from "../Accumulate/IAccumulate";
import { TYPES } from "../ioc/types";
import { Accumulator } from "../Accumulate/Accumulator";
import { IScoreFactory } from "../Score/IScoreFactory";
import { ScoreFactory } from "../Score/ScoreFactory";
import { IScoreCardFactory } from "../Scorecard/IScoreCardFactory";
import { ScoreCardFactory } from "../Scorecard/ScoreCardFactory";
import { IYatzyFactory } from "../IYatzyFactory";
import { YatzyFactory } from "../YatzyFactory";
import { DieFaceMultiplier } from "../Score/ScoreByProxy/DieFaceMultiplier";
import { IScoreByProxy } from "../Score/ScoreByProxy/IScoreByProxy";
import { Aces } from "../Score/ScoreByProxy/Aces";

const container = new Container();
container.bind<IAccumulate>(TYPES.IAccumulate).to(Accumulator);
container.bind<IScoreCardFactory>(TYPES.IScoreCardFactory).to(ScoreCardFactory);
container.bind<IScoreFactory>(TYPES.IScoreFactory).to(ScoreFactory);
container.bind<IYatzyFactory>(TYPES.IYatzyFactory).to(YatzyFactory);
container.bind<IScoreByProxy>(TYPES.IScoreByProxy).to(DieFaceMultiplier);
container.bind<Aces>(TYPES.Aces).to(Aces);

export { container };