import { Minus, Plus, Trash } from 'phosphor-react';

import { formatPrice } from '../../../../shared/utils/format-price';
import { useCart } from '../../../../shared/hooks/cart-context';

import { Container } from './styles';

import type { ReactElement } from 'react';
import type { CartItemProps } from '../../@types';

// * ------------------------------------------------------------------------------------------ * //

export const CartItem = ({ item, ..._props }: CartItemProps): ReactElement => {
  // *** --- Props -------------------------------------------------------------------------- *** //
  const { title, imageUrl, quantity, total } = item;

  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { handleChangeQuantityOfItem, handleItemRemovalFromCart } = useCart();

  // *** --- Functions ---------------------------------------------------------------------- *** //
  const addOneToItemCounter = (): void => {
    const newQuantity = quantity + 1;

    handleChangeQuantityOfItem(item, newQuantity);
  };

  // -------------------------------------------------------------------------------------------- //

  const subtractOneFromItemCounter = (): void => {
    const newQuantity = quantity - 1;

    handleChangeQuantityOfItem(item, newQuantity);
  };

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <Container>
      <div className="info-container">
        <img src={imageUrl} />

        <div className="info">
          <h4>{title}</h4>

          <div className="buttons-container">
            <div className="counter-buttons-container">
              <button
                className="counter-button"
                onClick={subtractOneFromItemCounter}
              >
                <Minus weight="fill" />
              </button>

              <span>{quantity}</span>

              <button
                className="counter-button"
                onClick={addOneToItemCounter}
              >
                <Plus weight="fill" />
              </button>
            </div>

            <button onClick={() => handleItemRemovalFromCart(item)}>
              <Trash />
              REMOVER
            </button>
          </div>
        </div>
      </div>

      <strong>{formatPrice(total)}</strong>
    </Container>
  );
};
