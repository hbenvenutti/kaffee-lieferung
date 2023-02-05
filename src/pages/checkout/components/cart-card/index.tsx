import { Fragment } from 'react';

import { useCart } from '../../../../shared/hooks/cart-context';
import { CartItem } from '../cart-item';

import { Container } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const CartCard = (): ReactElement => {
  const { cart } = useCart();

  return (
    <Container>
      {cart.map(item => (
        <Fragment key={item.title}>
          <CartItem item={item} />
          <hr />
        </Fragment>
      ))}

      <button>CONFIRMAR PEDIDO</button>
    </Container>
  );
};
