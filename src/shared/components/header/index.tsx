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
      <img src={logo} alt="" />

      <div>
        <span>
          <LocationSVG weight="fill" />
          Porto Alegre, RS
        </span>

        <div className="cart-div">
          <button>
            <CartSVG weight="fill" />
          </button>

          <Counter show={showCartCounter}>{cartCounter}</Counter>
        </div>
      </div>
    </Container>
  );
};
