import { useEffect, useReducer, useState } from 'react';

import { itemsReducer } from './reducer';
import {
  addItemToCartAction,
  removeItemFromCartAction,
  updateItemInCartAction
} from './reducer/actions';
import { PaymentMethod } from './enums';

import { CartContext } from '.';

import type { ReactElement, ReactNode } from 'react';
import type { Cart, CartItem } from './@types';

// * ------------------------------------------------------------------------------------------ * //

export const CartProvider = (children: ReactNode): ReactElement => {
  // *** --- Reducers ----------------------------------------------------------------------- *** //
  const [items, dispatch] = useReducer(itemsReducer, [] as Cart);

  // -------------------------------------------------------------------------------------------- //

  const addItemToCart = (item: CartItem): void => {
    item.total = item.price * item.quantity;

    dispatch(addItemToCartAction(item));
  };

  // -------------------------------------------------------------------------------------------- //

  const updateItemInCart = (item: CartItem): void => {
    dispatch(updateItemInCartAction(item));
  };

  // -------------------------------------------------------------------------------------------- //

  const removeItemFromCart = (item: CartItem): void => {
    dispatch(removeItemFromCartAction(item));
  };

  // *** --- States ------------------------------------------------------------------------- *** //
  const [method, setMethod] = useState<PaymentMethod>(PaymentMethod.money);
  const [total, setTotal] = useState<number>(0);

  const [city, setCity] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [number, setNumber] = useState<number>(0);
  const [postalCode, setPostalCode] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [street, setStreet] = useState<string>('');

  // *** --- Variables ---------------------------------------------------------------------- *** //
  const address = {
    city,
    complement,
    neighborhood,
    number,
    state,
    street,
    postalCode
  };

  // *** --- Functions ---------------------------------------------------------------------- *** //
  const handleItemAdditionToCart = (item: CartItem): void => {
    const isItemInCart = items.find(cartItem => cartItem.title === item.title);

    if (isItemInCart) return updateItemInCart(item);

    addItemToCart(item);
  };

  // -------------------------------------------------------------------------------------------- //

  const handleItemRemovalFromCart = (item: CartItem): void => {
    removeItemFromCart(item);
  };

  // *** --- Effects ------------------------------------------------------------------------ *** //
  useEffect(() => {
    const total = items.reduce((sum, item) => sum + item.total, 0);
    setTotal(total);
  }, [items]);

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <CartContext.Provider
      value={{
        address,
        items,
        method,
        total,

        setCity,
        setComplement,
        setNeighborhood,
        setNumber,
        setPostalCode,
        setState,
        setStreet,
        setMethod,

        handleItemAdditionToCart,
        handleItemRemovalFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
