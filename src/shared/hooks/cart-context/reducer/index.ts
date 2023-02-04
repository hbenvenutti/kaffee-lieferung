import { calculateItemTotalPrice } from './utils';
import { actionCases } from './action-cases';

import type { Action, Cart } from '../@types';

// * ------------------------------------------------------------------------------------------ * //

export const cartItemsReducer = (state: Cart, action: Action): Cart => {
  const { item } = action.payload;

  item.total = calculateItemTotalPrice(item);

  return actionCases[action.type](state, item);
};
