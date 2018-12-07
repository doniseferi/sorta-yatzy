// import assert from 'assert';
// import { IWarrior } from "../src/ioc-example/interfaces";
// import { TYPES } from "../src/ioc-example/types";
// import { myContainer } from "../src/ioc-example/inversify.config";

// describe("Inversify POC can ", () => {
//     let warrior: IWarrior;

//     before('Initialize objects', () => {
//         warrior = myContainer.get<IWarrior>(TYPES.IWarrior);
//     });

//     it("call warrior.fight", () => {
//         assert.equal(warrior.fight(), "cut!");
//     })
//     it("call warrior.sneak", () => {
//         assert.equal(warrior.sneak(), "hit!");
//     })
// })