import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import deliveryImage from '../../assets/delivery.svg';
import { useCart } from '../../shared/hooks/cart-context';

import { Container } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const SuccessPage = (): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { address } = useCart();

  // *** --- Variables ---------------------------------------------------------------------- *** //
  const { city, state, street, number, neighborhood } = address;

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <Container>
      <div className="title">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <div className="content">
        <div className="border">
          <div className="info">
            <div className="line">
              <span className="location-span">
                <MapPin weight="fill" />
              </span>

              <div>
                <p>
                  Entrega em <strong>{`${street}, ${number}`}</strong>
                </p>
                <p>{`${neighborhood} - ${city}, ${state}`}</p>
              </div>
            </div>

            <div className="line">
              <span className="time-span">
                <Timer weight="fill" />
              </span>

              <div>
                <p>Previsao de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div className="line">
              <span className="payment-span">
                <CurrencyDollar weight="fill" />
              </span>

              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de credito</strong>
              </div>
            </div>
          </div>
        </div>

        <img
          src={deliveryImage}
          alt="lambreta levando o pedido até o cliente."
        />
      </div>
    </Container>
  );
};
