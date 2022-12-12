import { ThemeProvider } from 'styled-components';

import { Router } from './router';
import { defaultTheme } from './styles/themes/default-theme';

import type { ReactElement } from './@types';

// ---------------------------------------------------------------------------------------------- //

export const App = (): ReactElement => (
  <>
    <ThemeProvider theme={defaultTheme} />
    <Router />
    <h1>Café</h1>
  </>
);
