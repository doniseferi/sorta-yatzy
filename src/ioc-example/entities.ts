// file entities.ts

import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IWeapon, IThrowableWeapon, IWarrior } from "./interfaces"
import { TYPES } from "./types";

@injectable()
class Katana implements IWeapon {
    public hit() {
        return "cut!";
    }
}

@injectable()
class Shuriken implements IThrowableWeapon {
    public throw() {
        return "hit!";
    }
}

@injectable()
class Ninja implements IWarrior {

    private _katana: IWeapon;
    private _shuriken: IThrowableWeapon;

    public constructor(
        @inject(TYPES.IWeapon) katana: IWeapon,
        @inject(TYPES.IThrowableWeapon) shuriken: IThrowableWeapon) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); }
    public sneak() { return this._shuriken.throw(); }

}

export { Ninja, Katana, Shuriken };