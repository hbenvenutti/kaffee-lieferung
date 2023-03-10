import type { Coffee } from '../../../providers/coffee/@types';
import type { ActionTypes, PaymentMethod } from '../enums';

// * ------------------------------------------------------------------------------------------ * //

interface CartContextData {
  address: {
    street: string;
    postalCode: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  cart: Cart;
  cartCounter: number;
  method: PaymentMethod;
  total: number;
  deliveryPrice: number;
  finalPrice: number;

  handleItemAdditionToCart: (coffee: Coffee, quantity: number) => void;
  handleItemRemovalFromCart: (item: CartItem) => void;
  handleChangeQuantityOfItem: (item: CartItem, quantity: number) => void;
  handleEmptyCart: () => void;

  setCity: (city: string) => void;
  setComplement: (complement: string) => void;
  setNeighborhood: (neighborhood: string) => void;
  setNumber: (number: string) => void;
  setPostalCode: (postalCode: string) => void;
  setState: (state: string) => void;
  setStreet: (street: string) => void;

  setMethod: (method: PaymentMethod) => void;
}

// ---------------------------------------------------------------------------------------------- //

interface CartProviderProps {
  children: ReactNode;
}

// ---------------------------------------------------------------------------------------------- //

interface CartItem extends Coffee {
  quantity: number;
  total: number;
}

// ---------------------------------------------------------------------------------------------- //

type Cart = CartItem[];

// ---------------------------------------------------------------------------------------------- //

interface Action {
  type: ActionTypes;
  payload?: {
    item: CartItem;
  };
}
