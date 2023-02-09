import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../../../shared/hooks/cart-context';
import { CartItem } from '../cart-item';
import { formatPrice } from '../../../../shared/utils/format-price';

import { Container } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const CartCard = (): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { cart, total, deliveryPrice, finalPrice, handleEmptyCart, address } = useCart();
  const navigate = useNavigate();

  // *** --- Variables ---------------------------------------------------------------------- *** //
  const { street, number, neighborhood, city, state } = address;
  const isCartEmpty = cart.length === 0;
  const page = '/done';

  const isButtonDisabled = isCartEmpty || !street || !number || !neighborhood || !city || !state;

  // *** --- Functions ---------------------------------------------------------------------- *** //
  const handleSubmit = (): void => {
    handleEmptyCart();
    navigate(page);
  };

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <Container>
      {isCartEmpty ? (
        <>
          <p>Nenhum item no carrinho!</p>
          <hr />
        </>
      ) : (
        cart.map(item => (
          <Fragment key={item.title}>
            <CartItem item={item} />
            <hr />
          </Fragment>
        ))
      )}

      <div className="total-section">
        <div>
          Total de itens <span>{formatPrice(total)}</span>
        </div>

        <div>
          Entrega <span>{formatPrice(deliveryPrice)}</span>
        </div>

        <div>
          <strong>Total</strong>
          <strong>{formatPrice(finalPrice)}</strong>
        </div>
      </div>

      <button
        disabled={isButtonDisabled}
        onClick={handleSubmit}
      >
        CONFIRMAR PEDIDO
      </button>
    </Container>
  );
};
