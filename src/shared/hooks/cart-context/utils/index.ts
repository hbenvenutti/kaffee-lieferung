import type { Coffee } from '../../../providers/coffee/@types';

// * ------------------------------------------------------------------------------------------ * //

export const calculateItemTotalPrice = (coffee: Coffee, quantity: number): number => {
  return coffee.price * quantity;
};
