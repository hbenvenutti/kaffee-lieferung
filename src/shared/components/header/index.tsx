import logo from '../../../assets/logo.svg';

import { CartSVG, Container, LocationSVG } from './styles';

import type { ReactElement } from 'react';

// ---------------------------------------------------------------------------------------------- //

export const Header = (): ReactElement => {
  return (
    <Container>
      <img src={logo} alt="" />
      <div>
        <span>
          <LocationSVG weight="fill" />
          Porto Alegre, RS
        </span>

        <button>
          <CartSVG weight="fill" />
        </button>
      </div>
    </Container>
  );
};
