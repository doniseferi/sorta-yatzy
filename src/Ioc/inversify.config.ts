// file inversify.config.ts

import { Container } from "inversify";
import { IAccumulate } from "../Accumulate/IAccumulate";
import { TYPES } from "../ioc/types";
import { Accumulator } from "../Accumulate/Accumulator";

const container = new Container();
// myContainer.bind<IWarrior>(TYPES.IWarrior).to(Ninja);
// myContainer.bind<IWarrior>(TYPES.IWarrior).to(Ninja);
// myContainer.bind<IWeapon>(TYPES.IWeapon).to(Katana);
// myContainer.bind<IThrowableWeapon>(TYPES.IThrowableWeapon).to(Shuriken);
container.bind<IAccumulate>(TYPES.IAccumulate).to(Accumulator);

export { container };

//TYPES is used to decorate and declare interfaces that are going to be injectd
//CONTAINER is where the TYPES are registered to their concerete typesc