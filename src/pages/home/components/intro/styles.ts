import styled from 'styled-components';

import background from '../../../../assets/background.svg';

import type { Color } from '../../../../@types/styles';

// ---------------------------------------------------------------------------------------------- //

export const Container = styled.div`
  display: grid;

  padding: 5.875rem 0;

  * {
    background: transparent;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .content,
  .background {
    grid-row: 1;
    grid-column: 1;
  }

  .background {
    width: 100%;
    height: auto;
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(25px);
  }
`;

// ---------------------------------------------------------------------------------------------- //

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  width: 100%;
  height: auto;

  padding: 0 10rem;
  z-index: 1;

  img {
    width: 29.75rem;
    height: auto;
  }

  p {
    font-size: 1.25rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`;

// *** ---- List elements ------------------------------------------------------------------- *** //

export const List = styled.div`
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: 1fr 1fr;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

// ---------------------------------------------------------------------------------------------- //

const baseSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  width: 2rem;
  height: 2rem;

  svg {
    fill: ${(props): Color => props.theme['confirmation-button-text']};
    width: 1rem;
    height: auto;
  }
`;

// ---------------------------------------------------------------------------------------------- //

export const CartSpan = styled(baseSpan)`
  background: ${(props): Color => props.theme['brand-secondary-3']};
`;

// ---------------------------------------------------------------------------------------------- //

export const PackageSpan = styled(baseSpan)`
  background: ${(props): Color => props.theme['title']};
`;

// ---------------------------------------------------------------------------------------------- //

export const TimerSpan = styled(baseSpan)`
  background: ${(props): Color => props.theme['brand-secondary-2']};
`;

// ---------------------------------------------------------------------------------------------- //

export const CoffeeSpan = styled(baseSpan)`
  background: ${(props): Color => props.theme['brand-primary-2']};
`;
