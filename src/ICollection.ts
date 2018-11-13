import Die from '../src/Die';

interface ICollection<T> {
    collection: ICollection<Die>
}

export default class Dice implements ICollection<Die> {
}