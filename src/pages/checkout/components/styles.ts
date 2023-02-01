import styled from 'styled-components';

import type { Color } from '../../../@types/styles';

// * ------------------------------------------------------------------------------------------ * //

export const cardBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props): Color => props.theme['card']};

  border-radius: 6px;
  padding: 2.5rem;

  width: 100%;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  .form-title {
    display: flex;
    gap: 0.5rem;
    justify-content: left;
    align-items: flex-start;

    h4 {
      line-height: 1.375rem;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
    }
  }
`;
