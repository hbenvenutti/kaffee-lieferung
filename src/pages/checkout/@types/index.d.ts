import type { CartItem } from '../../../shared/hooks/cart-context/@types';
import type { PaymentMethod } from '../enums';
import type { ButtonHTMLAttributes } from 'react';

// * ------------------------------------------------------------------------------------------ * //

interface PaymentSelectorStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

// ---------------------------------------------------------------------------------------------- //

interface PaymentSelectorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  method: PaymentMethod;
  text: string;
}

// ---------------------------------------------------------------------------------------------- //

interface CartItemProps {
  item: CartItem;
}
