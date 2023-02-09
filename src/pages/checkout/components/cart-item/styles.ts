import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 5rem;
  padding: 0.5rem 0.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  h4 {
    font-weight: 400;
    line-height: 1.3;
    color: ${props => props.theme['subtitle']};
  }

  svg {
    width: 0.875rem;
    height: auto;
    fill: ${props => props.theme['primary2']};
    background: transparent;
  }

  .buttons-container {
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;

    > button {
      display: flex;
      gap: 0.25rem;
      align-items: center;
      border-radius: 6px;
      padding: 0.5rem;

      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }

  .counter-button {
    background-color: transparent;
  }

  .counter-buttons-container {
    display: flex;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme['button']};

    span {
      display: flex;
      width: 1.25rem;
      justify-content: center;
      line-height: 1.3;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 0.5rem;

    width: 10.687rem;
  }

  .info-container {
    display: flex;
    gap: 1.25rem;
    justify-content: space-between;
    align-items: center;
  }
`;
