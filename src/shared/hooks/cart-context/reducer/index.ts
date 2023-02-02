import { ActionTypes } from '../enums';

import { calculateItemTotalPrice } from './utils';

import type { Action, Cart } from '../@types';

// * ------------------------------------------------------------------------------------------ * //

export const cartItemsReducer = (state: Cart, action: Action): Cart => {
  const { item } = action.payload;

  item.total = calculateItemTotalPrice(item);

  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return [...state, item];

    case ActionTypes.UPDATE_ITEM_IN_CART:
      return state.map(cartItem => {
        if (cartItem.title === item.title) return item;

        return cartItem;
      });

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const index = state.findIndex(cartItem => cartItem.title === item.title);

      if (index < 0) return state;

      return state.splice(index, 1);
    }

    default:
      return state;
  }
};

// * ------------------------------------------------------------------------------------------ * //
