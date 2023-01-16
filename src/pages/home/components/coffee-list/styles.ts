import styled from 'styled-components';

import type { Background, FilterButtonProps } from './@types';
import type { Color } from '../../../../@types/styles';

// ---------------------------------------------------------------------------------------------- //

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 10rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
  }

  .filters {
    display: flex;
    gap: 0.5rem;
  }
`;

// ---------------------------------------------------------------------------------------------- //

export const FilterButton = styled.button<FilterButtonProps>`
  border: solid ${(props): Color => props.theme['brand-secondary-2']} 1px;
  border-radius: 100px;

  background: ${(props): Background =>
    props.isActive ? props.theme['brand-secondary-2'] : 'transparent'};

  color: ${(props): Color =>
    props.isActive ? props.theme['confirmation-button-text'] : props.theme['brand-secondary-3']};

  font-weight: 700;
  font-size: 0.625rem;

  padding: 0.375rem 0.75rem;
`;
