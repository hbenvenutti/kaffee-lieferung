import { NavLink } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import { useCart } from '../../hooks/cart-context';

import { CartSVG, Container, Counter, LocationSVG } from './styles';

import type { ReactElement } from '../../../@types';

// ---------------------------------------------------------------------------------------------- //

export const Header = (): ReactElement => {
  // *** ---- Context ----------------------------------------------------------------------- *** //
  const { cartCounter, address } = useCart();

  // *** ---- Variables --------------------------------------------------------------------- *** //
  const showCartCounter = cartCounter > 0 ? true : false;

  const { city, state } = address;

  // *** ---- TSX --------------------------------------------------------------------------- *** //
  return (
    <Container>
      <NavLink to="/">
        <img
          src={logo}
          alt=""
        />
      </NavLink>

      <div>
        <span>
          <LocationSVG weight="fill" />
          {city || 'Porto Alegre'}, {state || 'RS'}
        </span>

        <div className="cart-div">
          <NavLink
            className="checkout-link"
            to="/checkout"
          >
            <CartSVG weight="fill" />
          </NavLink>

          <Counter show={showCartCounter}>{cartCounter}</Counter>
        </div>
      </div>
    </Container>
  );
};
