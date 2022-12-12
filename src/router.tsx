import { Route, Routes } from 'react-router-dom';

import type { ReactElement } from './@types';

// ---------------------------------------------------------------------------------------------- //

export const Router = (): ReactElement => (
  <Routes>
    <Route path="/">
      <Route path="/" />
      <Route path="/checkout" />
      <Route path="/done" />
    </Route>
  </Routes>
);
