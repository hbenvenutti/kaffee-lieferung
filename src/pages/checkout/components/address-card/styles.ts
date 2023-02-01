import styled from 'styled-components';

import { cardBase } from '../styles';

import type { Color } from '../../../../@types/styles';

// * ------------------------------------------------------------------------------------------ * //

export const Container = styled(cardBase)`
  input {
    height: 2.625rem;
    border: 1px solid ${(props): Color => props.theme['button']};
    border-radius: 4px;
    background-color: ${(props): Color => props.theme['input']};
    padding: 0.75rem;

    ::placeholder {
      color: ${(props): Color => props.theme['label']};
      opacity: 1;
    }
  }

  span {
    position: absolute;

    left: 49%;
    font-style: italic;
    color: ${(props): Color => props.theme['label']};
    font-size: 0.75rem;
  }

  .input-flexible {
    flex: auto;
  }

  .input-inflexible {
    width: 12.5rem;
  }

  .input-row {
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
    align-items: center;
    overflow: visible;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  #state {
    width: 3.75rem;
  }
`;
