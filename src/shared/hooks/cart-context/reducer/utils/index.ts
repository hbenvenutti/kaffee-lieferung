import type { CartItem } from '../../@types';

// * ------------------------------------------------------------------------------------------ * //

export const calculateItemTotalPrice = (item: CartItem): number => {
  return item.price * item.quantity;
};
