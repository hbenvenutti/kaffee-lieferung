import { AddressCard } from './components/address-card';
import { PaymentCard } from './components/payment-card';
import { Container } from './styles';
import { CartCard } from './components/cart-card';

import type { ReactElement } from '../../@types';

// * ------------------------------------------------------------------------------------------ * //

export const Checkout = (): ReactElement => {
  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <Container>
      <div className="column-left">
        <h2>Complete seu Pedido</h2>

        <AddressCard />

        <PaymentCard />
      </div>
      {/*// --- End - column-left ----------------------------------------------------------- */}

      <div className="column-right">
        <h2>Cafés Selecionados</h2>
        <CartCard />
      </div>
      {/*// --- End of column-right ---------------------------------------------------------- */}
    </Container>
  );
};
