import { Outlet } from 'react-router-dom';

import { Header } from '../shared/components/header';

import type { ReactElement } from '../@types';

// ---------------------------------------------------------------------------------------------- //

export const DefaultLayout = (): ReactElement => (
  <>
    <Header />
    <Outlet />;
  </>
);
