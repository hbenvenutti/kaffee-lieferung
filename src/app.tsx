import { ThemeProvider } from 'styled-components';

import { Router } from './router';
import { defaultTheme } from './styles/themes/default-theme';
import { GlobalStyle } from './styles';
import { CartProvider } from './shared/hooks/cart-context';

import type { ReactElement } from './@types';

// ---------------------------------------------------------------------------------------------- //

export const App = (): ReactElement => (
  <ThemeProvider theme={defaultTheme}>
    <CartProvider>
      <GlobalStyle />
      <Router />
    </CartProvider>
  </ThemeProvider>
);
