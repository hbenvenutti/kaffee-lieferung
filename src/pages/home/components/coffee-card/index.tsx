import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';

import { CartFormComponent, Container } from './styles';

import type { CoffeeProps } from './@types';
import type { ReactElement } from '../../../../@types';

// * ------------------------------------------------------------------------------------------ * //

export const CoffeeCard = ({ coffee }: CoffeeProps): ReactElement => {
  // *** ---- States ------------------------------------------------------------------------ *** //

  const [counter, setCounter] = useState<number>(1);

  // *** ---- Functions --------------------------------------------------------------------- *** //

  const handleAddToCounter = (): void => {
    setCounter(state => state + 1);
  };

  // -------------------------------------------------------------------------------------------- //

  const handleSubtractFromCounter = (): void => {
    if (counter === 1) return;

    setCounter(state => state - 1);
  };

  // *** ---- TSX --------------------------------------------------------------------------- *** //

  return (
    <Container>
      <img src={coffee.imageUrl} alt="" />
      <div className="tags">
        {coffee.types.map(
          (type): ReactElement => (
            <span key={type}>{type}</span>
          )
        )}
      </div>
      <div className="description">
        <h3>{coffee.title}</h3>

        <p>{coffee.description}</p>
      </div>

      <CartFormComponent>
        <span>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(coffee.price)}
        </span>

        <div className="cart">
          <div className="input">
            <button onClick={() => handleSubtractFromCounter()} type="button">
              <Minus weight="fill" />
            </button>

            <span>{counter}</span>

            <button onClick={() => handleAddToCounter()} type="button">
              <Plus weight="fill" />
            </button>
          </div>

          <button className="addToCartButton" type="button">
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </CartFormComponent>
    </Container>
  );
};
