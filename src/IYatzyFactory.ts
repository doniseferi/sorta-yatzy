import Yatzy from './Yatzy';

export interface IYatzyFactory {
  create(): Yatzy;
}