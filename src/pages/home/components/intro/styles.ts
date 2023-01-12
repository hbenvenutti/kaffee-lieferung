import styled from 'styled-components';

import background from '../../../../assets/background.svg';

// ---------------------------------------------------------------------------------------------- //

export const Container = styled.div`
  display: grid;

  padding: 5.875rem 0;

  * {
    background: transparent;
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
`;
