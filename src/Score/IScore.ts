import { Dice } from '../Dice';

export interface IScore {
  invoke(collection: Dice): number;
}