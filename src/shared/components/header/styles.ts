import { MapPin, ShoppingCart } from 'phosphor-react';
import styled from 'styled-components';

import type { Color } from '../../../@types/styles';

// ---------------------------------------------------------------------------------------------- //

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 2rem 10rem;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    color: ${(props): Color => props.theme['brand-primary-3']};
    background-color: ${(props): Color => props.theme['brand-primary-1']};

    border-radius: 6px;

    padding: 0.5rem;
  }

  button {
    color: ${(props): Color => props.theme['brand-secondary-3']};
    background-color: ${(props): Color => props.theme['brand-secondary-1']};

    width: 2.375rem;
    height: 2.375rem;

    border-radius: 6px;
  }
`;

export const LocationSVG = styled(MapPin)`
  fill: ${(props): Color => props.theme['brand-primary-3']};

  background-color: transparent;
  width: 1.375rem;
  height: auto;
`;

export const CartSVG = styled(ShoppingCart)`
  fill: ${(props): Color => props.theme['brand-secondary-3']};

  background-color: transparent;
  width: 1.375rem;
  height: auto;
`;
