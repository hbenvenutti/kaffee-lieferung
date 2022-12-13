import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { DefaultLayout } from './layouts/default-layout';

import type { ReactElement } from './@types';

// ---------------------------------------------------------------------------------------------- //

export const Router = (): ReactElement => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" />
      <Route path="/done" />
    </Route>
  </Routes>
);
