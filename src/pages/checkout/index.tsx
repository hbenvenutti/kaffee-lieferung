import { AddressCard } from './components/address-card';
import { PaymentCard } from './components/payment-card';
import { Container } from './styles';

import type { ReactElement } from '../../@types';

// * ------------------------------------------------------------------------------------------ * //

export const Checkout = (): ReactElement => {
  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <main>
      <Container>
        <div className="column-left">
          <h2>Complete seu Pedido</h2>

          <AddressCard />

          <PaymentCard />
        </div>
        {/*// --- End - column-left ----------------------------------------------------------- */}

        <div className="column-right">
          <h2>Cafés Selecionados</h2>
        </div>
        {/*// --- End of column-right ---------------------------------------------------------- */}
      </Container>
    </main>
  );
};
