// file inversify.config.ts

import { Container } from "inversify";
import { TYPES } from "./types";
import { IWarrior, IWeapon, IThrowableWeapon } from "./interfaces";
import { Ninja, Katana, Shuriken } from "./entities";

const myContainer = new Container();
// myContainer.bind<IWarrior>(TYPES.IWarrior).to(Ninja);
myContainer.bind<IWarrior>(TYPES.IWarrior).to(Ninja);
myContainer.bind<IWeapon>(TYPES.IWeapon).to(Katana);
myContainer.bind<IThrowableWeapon>(TYPES.IThrowableWeapon).to(Shuriken);

export { myContainer };

//TYPES is used to decorate and declare interfaces that are going to be injectd
//CONTAINER is where the TYPES are registered to their concerete typesc