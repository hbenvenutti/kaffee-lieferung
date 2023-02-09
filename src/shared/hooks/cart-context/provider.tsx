import { useEffect, useReducer, useState } from 'react';

import { cartItemsReducer } from './reducer';
import {
  addItemToCartAction,
  emptyCartAction,
  removeItemFromCartAction,
  updateItemInCartAction
} from './reducer/actions';
import { PaymentMethod } from './enums';
import { calculateItemTotalPrice } from './utils';

import { CartContext } from '.';

import type { Coffee } from '../../providers/coffee/@types';
import type { ReactElement } from 'react';
import type { Cart, CartItem, CartProviderProps } from './@types';

// * ------------------------------------------------------------------------------------------ * //

export const CartProvider = ({ children }: CartProviderProps): ReactElement => {
  // *** --- Reducers ----------------------------------------------------------------------- *** //
  const [cart, dispatch] = useReducer(cartItemsReducer, [] as Cart);

  // -------------------------------------------------------------------------------------------- //

  const addItemToCart = (item: CartItem): void => {
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

  // -------------------------------------------------------------------------------------------- //

  const emptyCart = (): void => {
    dispatch(emptyCartAction());
  };

  // *** --- States ------------------------------------------------------------------------- *** //
  const [method, setMethod] = useState<PaymentMethod>(PaymentMethod.money);
  const [total, setTotal] = useState<number>(0);
  const [cartCounter, setCartCounter] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);

  const [city, setCity] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [street, setStreet] = useState<string>('');

  // *** --- Variables ---------------------------------------------------------------------- *** //
  const deliveryPrice = 3.5;

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
  const handleItemAdditionToCart = (coffee: Coffee, quantity: number): void => {
    const isItemInCart = cart.find(cartItem => cartItem.title === coffee.title);

    const item: CartItem = {
      ...coffee,
      quantity,
      total: calculateItemTotalPrice(coffee, quantity)
    };

    if (isItemInCart) return updateItemInCart(item);

    addItemToCart(item);
  };

  // -------------------------------------------------------------------------------------------- //

  const handleChangeQuantityOfItem = (item: CartItem, quantity: number): void => {
    if (quantity < 1) return;

    item.quantity = quantity;
    item.total = calculateItemTotalPrice(item, quantity);

    updateItemInCart(item);
  };

  // -------------------------------------------------------------------------------------------- //

  const handleItemRemovalFromCart = (item: CartItem): void => {
    removeItemFromCart(item);
  };

  // -------------------------------------------------------------------------------------------- //

  const handleEmptyCart = (): void => {
    emptyCart();
  };

  // *** --- Effects ------------------------------------------------------------------------ *** //
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.total, 0);

    setCartCounter(cart.length);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    const finalPrice = total === 0 ? 0 : total + deliveryPrice;

    setFinalPrice(finalPrice);
  }, [total]);

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <CartContext.Provider
      value={{
        address,
        cart,
        cartCounter,
        method,
        total,
        finalPrice,
        deliveryPrice,

        setCity,
        setComplement,
        setNeighborhood,
        setNumber,
        setPostalCode,
        setState,
        setStreet,
        setMethod,

        handleItemAdditionToCart,
        handleItemRemovalFromCart,
        handleChangeQuantityOfItem,
        handleEmptyCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
