import { ThemeProvider } from 'styled-components';

import { Router } from './router';
import { defaultTheme } from './styles/themes/default-theme';
import { GlobalStyle } from './styles';

import type { ReactElement } from './@types';

// ---------------------------------------------------------------------------------------------- //

export const App = (): ReactElement => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
