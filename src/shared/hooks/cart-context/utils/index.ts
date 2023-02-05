import type { CartItem } from '../@types';
import type { Coffee } from '../../../providers/coffee/@types';

// * ------------------------------------------------------------------------------------------ * //

export const calculateItemTotalPrice = (coffee: Coffee | CartItem, quantity: number): number => {
  return coffee.price * quantity;
};
