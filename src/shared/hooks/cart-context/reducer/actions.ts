import { ActionTypes } from '../enums';

import type { Action, CartItem } from '../@types';

// * ------------------------------------------------------------------------------------------ * //

export const addItemToCartAction = (item: CartItem): Action => {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item
    }
  };
};

// ---------------------------------------------------------------------------------------------- //

export const updateItemInCartAction = (item: CartItem): Action => {
  return {
    type: ActionTypes.UPDATE_ITEM_IN_CART,
    payload: {
      item
    }
  };
};

// ---------------------------------------------------------------------------------------------- //

export const removeItemFromCartAction = (item: CartItem): Action => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      item
    }
  };
};
