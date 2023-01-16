import { Container, FilterButton } from './styles';

import type { ReactElement } from '../../../../@types';

// ---------------------------------------------------------------------------------------------- //

export const CoffeeList = (): ReactElement => {
  return (
    <Container>
      <div className="title">
        <h2>Nossos Cafés</h2>

        <div className="filters">
          <FilterButton isActive>TRADICIONAL</FilterButton>
          <FilterButton>ESPECIAL</FilterButton>
          <FilterButton>COM LEITE</FilterButton>
          <FilterButton>ALCOÓLICO</FilterButton>
          <FilterButton>GELADO</FilterButton>
        </div>
      </div>
    </Container>
  );
};
