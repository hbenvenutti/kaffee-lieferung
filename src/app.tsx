import { Router } from './router';

import type { ReactElement } from './@types';

// ---------------------------------------------------------------------------------------------- //

export const App = (): ReactElement => (
  <>
    <Router />
    <h1>Café</h1>
  </>
);
