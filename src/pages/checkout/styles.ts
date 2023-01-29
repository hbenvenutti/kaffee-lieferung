import styled from 'styled-components';

import type { Color } from '../../@types/styles';

// * ------------------------------------------------------------------------------------------ * //

export const Form = styled.form`
  display: flex;
  gap: 2rem;

  padding: 2rem 10rem;

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

  .address-card {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;

    background: ${(props): Color => props.theme['card']};

    border-radius: 6px;
    padding: 2.5rem;
  }

  .form-title {
    display: flex;
    gap: 0.5rem;
    justify-content: left;
    align-items: flex-start;

    svg {
      width: 1.375rem;
      height: 1.375rem;

      path,
      line,
      circle {
        stroke: ${(props): Color => props.theme['brand-secondary-3']};
      }
    }

    h4 {
      line-height: 1.375rem;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .input-row {
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
    align-items: center;
    overflow: visible;

    span {
      position: absolute;

      left: 49%;
      font-style: italic;
      color: ${(props): Color => props.theme['label']};
      font-size: 0.75rem;
    }
  }

  .left-column {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
    width: 40rem;
  }

  #cep,
  #neighborhood,
  #number {
    width: 200px;
  }

  #city,
  #complement,
  #street {
    flex: auto;
  }

  #state {
    width: 3.75rem;
  }
`;
