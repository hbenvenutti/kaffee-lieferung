import { Intro } from './components/intro';
import { CoffeeList } from './components/coffee-list';

import type { ReactElement } from '../../@types';

// ---------------------------------------------------------------------------------------------- //

export const Home = (): ReactElement => (
  <>
    <Intro />
    <CoffeeList />
  </>
);
