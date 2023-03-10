import { MapPin, ShoppingCart } from 'phosphor-react';
import styled from 'styled-components';

import type { CounterProps, Visibility } from './@types';
import type { Color } from '../../../@types/styles';

// ---------------------------------------------------------------------------------------------- //

export const Container = styled.header`
  position: sticky;
  top: 0;

  background: ${(props): Color => props.theme['background']};

  width: 100%;
  height: 6.75rem;
  max-width: 90rem;
  margin: auto;

  z-index: 3;
  display: flex;
  justify-content: space-between;

  padding: 2rem 10rem;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .cart-div {
    display: flex;
    align-items: flex-start;
    justify-content: left;
    gap: 0px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    color: ${(props): Color => props.theme['primary3']};
    background-color: ${(props): Color => props.theme['primary1']};

    border-radius: 6px;

    padding: 0.5rem;
  }

  .checkout-link {
    display: flex;
    justify-content: center;

    color: ${(props): Color => props.theme['secondary3']};
    background-color: ${(props): Color => props.theme['secondary1']};

    width: 2.375rem;
    height: 2.375rem;

    border-radius: 6px;
  }
`;

// ---------------------------------------------------------------------------------------------- //

export const LocationSVG = styled(MapPin)`
  fill: ${(props): Color => props.theme['primary3']};

  width: 1.375rem;
  height: auto;
`;

// ---------------------------------------------------------------------------------------------- //

export const CartSVG = styled(ShoppingCart)`
  fill: ${(props): Color => props.theme['secondary3']};

  width: 1.375rem;
  height: auto;
`;

// ---------------------------------------------------------------------------------------------- //

export const Counter = styled.div<CounterProps>`
  visibility: ${(props): Visibility => (props.show ? 'visible' : 'hidden')};

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props): Color => props.theme['secondary3']};
  color: ${(props): Color => props.theme['confirmation_button_text']};

  border-radius: 50px;

  font-weight: 700;

  width: 1.25rem;
  height: 1.25rem;

  margin-left: -0.625rem;
  margin-top: -0.5rem;
`;
