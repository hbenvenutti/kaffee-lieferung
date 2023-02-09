import { ActionTypes } from '../enums';

import type { Cart, CartItem } from '../@types';

// * ------------------------------------------------------------------------------------------ * //

const addToCartCase = (state: Cart, item: CartItem): Cart => {
  return [...state, item];
};

// ---------------------------------------------------------------------------------------------- //

const removeFromCartCase = (state: Cart, item: CartItem): Cart => {
  return state.filter(cartItem => cartItem.title !== item.title);
};

// ---------------------------------------------------------------------------------------------- //

const updateItemInCartCase = (state: Cart, item: CartItem): Cart => {
  return state.map(cartItem => {
    if (cartItem.title === item.title) return item;

    return cartItem;
  });
};

const emptyCart = (_state: Cart): Cart => {
  return [];
};

// * ------------------------------------------------------------------------------------------ * //

export const actionCases = {
  [ActionTypes.ADD_ITEM_TO_CART]: addToCartCase,
  [ActionTypes.REMOVE_ITEM_FROM_CART]: removeFromCartCase,
  [ActionTypes.UPDATE_ITEM_IN_CART]: updateItemInCartCase,
  [ActionTypes.EMPTY_CART]: emptyCart
};
