import { createContext, useContext } from 'react';

import { CartProvider } from './provider';

import type { CartContextData } from './@types';

// * ------------------------------------------------------------------------------------------ * //

const CartContext = createContext<CartContextData>({} as CartContextData);

// ---------------------------------------------------------------------------------------------- //

const useCart = (): CartContextData => useContext(CartContext);

// * ------------------------------------------------------------------------------------------ * //

export { CartContext };
export { CartProvider };
export { useCart };
