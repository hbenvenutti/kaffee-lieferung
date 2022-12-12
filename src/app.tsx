import type { ReactElement } from './@types';
import { Router } from './router';

// ---------------------------------------------------------------------------------------------- //

export const App = (): ReactElement => (
  <>
    <Router />
    <h1>Café</h1>
  </>
);
