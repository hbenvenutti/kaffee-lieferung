import { createGlobalStyle } from 'styled-components';

import type { Color } from '../@types/styles';

// ---------------------------------------------------------------------------------------------- //

export const GlobalStyle = createGlobalStyle`
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props): Color => props.theme['text']};
    background: ${(props): Color => props.theme['background']};
    border: none;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Baloo 2', sans-serif;
  }

  h1 {
    color: ${(props): Color => props.theme['title']}
  }

  h2, h3 {
    color: ${(props): Color => props.theme['subtitle']}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body {
    padding: 0 10rem;
  }

  a, button {
    cursor: pointer;
  }
`;
