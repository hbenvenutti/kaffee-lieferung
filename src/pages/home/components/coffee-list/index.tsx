import { CoffeeType } from '../../../../shared/providers/coffee/@types/enums';
import { coffees } from '../../../../shared/providers/coffee';
import { CoffeeCard } from '../coffee-card';

import { Container, FilterButton } from './styles';

import type { ReactElement } from '../../../../@types';

// ---------------------------------------------------------------------------------------------- //

export const CoffeeList = (): ReactElement => {
  return (
    <Container>
      <div className="title">
        <h2>Nossos Cafés</h2>

        <div className="filters">
          <FilterButton isActive>{CoffeeType.traditional}</FilterButton>
          <FilterButton>{CoffeeType.special}</FilterButton>
          <FilterButton>{CoffeeType.latte}</FilterButton>
          <FilterButton>{CoffeeType.alcohol}</FilterButton>
          <FilterButton>{CoffeeType.cold}</FilterButton>
        </div>
      </div>
      <div className="list">
        {coffees.map(coffee => (
          <CoffeeCard coffee={coffee} key={coffee.title} />
        ))}
      </div>
    </Container>
  );
};
