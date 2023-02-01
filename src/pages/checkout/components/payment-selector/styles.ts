import styled from 'styled-components';

import type { Color } from '../../../../@types/styles';
import type { PaymentSelectorStyleProps } from '../../@types';

// * ------------------------------------------------------------------------------------------ * //

export const Container = styled.button<PaymentSelectorStyleProps>`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.75rem;

  background-color: ${(props): Color =>
    props.isActive ? props.theme['primary1'] : props.theme['button']};

  padding: 1rem;
  border-radius: 6px;
  border: solid 1px ${props => (props.isActive ? props.theme['primary3'] : 'transparent')};
  box-sizing: border-box;

  width: 100%;
  height: 3.1875rem;

  transition: background-color 0.2s, border 0.1s;

  :hover {
    background-color: ${(props): Color => props.theme['primary1']};

    border: solid 1px ${(props): Color => props.theme['primary2']};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
