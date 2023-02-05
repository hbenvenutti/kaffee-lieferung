import styled from 'styled-components';

import { cardBase } from '../styles';

// * ------------------------------------------------------------------------------------------ * //

export const Container = styled(cardBase)`
  border-radius: 0.375rem 2.75rem;
  gap: 1.5rem;

  hr {
    border: solid 1px ${props => props.theme['button']};
  }

  > button {
    width: 100%;
    color: ${props => props.theme['confirmation_button_text']};
    background-color: ${props => props.theme['secondary2']};

    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    font-weight: 700;
  }
`;
