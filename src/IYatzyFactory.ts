import Yatzy from './Yatzy';

export interface IYatzyFactory {
  Create(): Yatzy;
}