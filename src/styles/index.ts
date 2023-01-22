import { createGlobalStyle } from 'styled-components';

import type { Color } from '../@types/styles';

// ---------------------------------------------------------------------------------------------- //

export const GlobalStyle = createGlobalStyle`
  html {
    @media (max-width: 720px) {
      font-size: 93.75%;
    }

    @media (max-width: 540px) {
      font-size: 87.5%;
    }

    @media (max-width: 450px) {
      font-size: 60%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props): Color => props.theme['text']};
    border: none;
  }

  body {
    background: ${(props): Color => props.theme['background']};
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Baloo 2', sans-serif;
  }

  h1 {
    color: ${(props): Color => props.theme['title']};
    font-size: 3rem;
    line-height: 3.9rem;
  }

  h2, h3 {
    color: ${(props): Color => props.theme['subtitle']}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a, button {
    cursor: pointer;
  }
`;
