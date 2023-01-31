import styled from 'styled-components';

import type { Color } from '../../../../@types/styles';

// * ------------------------------------------------------------------------------------------ * //

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 16rem;
  height: 19.375rem;
  padding: 1.25rem;

  background: ${(props): Color => props.theme['card']};
  border-radius: 6px 36px;

  // *** ---- Tags -------------------------------------------------------------------------- *** //

  img {
    width: 7.5rem;
    height: auto;
    margin-top: -2.5rem;
  }

  // -------------------------------------------------------------------------------------------- //

  p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props): Color => props.theme['label']};
  }

  // *** ---- classes ----------------------------------------------------------------------- *** //

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    align-items: center;
    justify-content: center;
  }

  // -------------------------------------------------------------------------------------------- //

  .tags {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    width: 100%;

    span {
      border-radius: 100px;

      background: ${(props): Color => props.theme['secondary1']};
      color: ${(props): Color => props.theme['secondary3']};

      font-size: 0.625rem;
      font-weight: 700;

      padding: 0.375rem 0.75rem;
    }
  }
`;

// @ ------------------------------------------------------------------------------------------ @ //

export const CartFormComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  // *** ---- Tags -------------------------------------------------------------------------- *** //

  > span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
  }

  // *** ---- classes ----------------------------------------------------------------------- *** //

  .addToCartButton {
    background-color: ${(props): Color => props.theme['primary3']};
    border-radius: 6px;
    padding: 0.5rem;
    width: 2.375rem;
    height: 2.375rem;

    svg {
      fill: ${(props): Color => props.theme['confirmation_button_text']};
      width: 1.375rem;
      height: auto;
    }
  }

  //  -------------------------------------------------------------------------------------------- //

  .cart {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  // -------------------------------------------------------------------------------------------- //

  .input {
    display: flex;
    gap: 0.25rem;

    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props): Color => props.theme['button']};
    height: 2.375rem;

    button {
      background-color: transparent;
    }

    svg {
      fill: ${(props): Color => props.theme['primary2']};
      width: 0.875rem;
      height: auto;
    }
  }
`;
