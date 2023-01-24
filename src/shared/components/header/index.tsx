import { NavLink } from 'react-router-dom';

import logo from '../../../assets/logo.svg';

import { CartSVG, Container, Counter, LocationSVG } from './styles';

import type { ReactElement } from '../../../@types';

// ---------------------------------------------------------------------------------------------- //

export const Header = (): ReactElement => {
  // *** ---- States ------------------------------------------------------------------------ *** //
  // const [cartCounter, setCartCounter] = useState<number>(0);

  // *** ---- Variables --------------------------------------------------------------------- *** //

  const cartCounter = 2; // ? Temporary
  const showCartCounter = cartCounter > 0 ? true : false;

  // *** ---- TSX --------------------------------------------------------------------------- *** //

  return (
    <Container>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <div>
        <span>
          <LocationSVG weight="fill" />
          Porto Alegre, RS
        </span>

        <div className="cart-div">
          <NavLink className="checkout-link" to="/checkout">
            <CartSVG weight="fill" />
          </NavLink>

          <Counter show={showCartCounter}>{cartCounter}</Counter>
        </div>
      </div>
    </Container>
  );
};
