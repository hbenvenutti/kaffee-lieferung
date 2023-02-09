import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem 10rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    border-radius: 1000px;
  }

  svg {
    width: 1rem;
    height: 1rem;
    fill: ${props => props.theme['confirmation_button_text']};

    border-radius: 1000px;
  }
  .border {
    --secondary2: ${props => props.theme['secondary2']};
    --primary2: ${props => props.theme['primary2']};
    background: linear-gradient(to right, var(--secondary2), var(--primary2));
    border-radius: 6px 36px;
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 32.875rem;
    height: 100%;

    padding: 2.5rem;
    border: solid 1px transparent;
    border-radius: 6px 36px;
    background-color: ${props => props.theme['background']};
    background-clip: padding-box;
  }

  .line {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
  }

  .location-span {
    background-color: ${props => props.theme['primary2']};
  }

  .time-span {
    background-color: ${props => props.theme['secondary2']};
  }

  .title {
    h1 {
      color: ${props => props.theme['secondary3']};
    }

    p {
      font-size: 1.25rem;
    }
  }

  .payment-span {
    background-color: ${props => props.theme['secondary3']};
  }
`;
