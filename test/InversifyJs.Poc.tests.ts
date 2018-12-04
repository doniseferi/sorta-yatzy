import assert from 'assert';
import { Warrior } from "../src/ioc-example/interfaces";
import { TYPES } from "../src/ioc-example/types";
import { myContainer } from "../src/ioc-example/inversify.config";

describe("Inversify POC can ", () => {
    let warrior: Warrior;

    before('Initialize objects', () => {
      warrior = myContainer.get<Warrior>(TYPES.Warrior);
    });

    it("call warrior.fight", () => {
        assert.equal(warrior.fight(), "cut!");
    })
    it("call warrior.sneak", () => {
        assert.equal(warrior.sneak(), "hit!");
    })
})