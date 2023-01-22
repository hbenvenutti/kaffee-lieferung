import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useState } from 'react';

import { Container } from './styles';

import type { CoffeeProps } from './@types';
import type { ReactElement } from '../../../../@types';

// ---------------------------------------------------------------------------------------------- //

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

      <h3>{coffee.title}</h3>

      <p>{coffee.description}</p>

      <span>{coffee.price}</span>

      <form action="">
        <div className="input">
          <button onClick={() => handleAddToCounter()} type="button">
            <Plus />
          </button>

          <span>{counter}</span>

          <button onClick={() => handleSubtractFromCounter()} type="button">
            <Minus />
          </button>
        </div>

        <button type="submit">
          <ShoppingCart />
        </button>
      </form>
    </Container>
  );
};
