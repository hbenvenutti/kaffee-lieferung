import type { CoffeeType } from './enums';

// ---------------------------------------------------------------------------------------------- //

interface Coffee {
  title: string;
  types: CoffeeType[];
  description: string;
  price: number;
  imageUrl: string;
}
