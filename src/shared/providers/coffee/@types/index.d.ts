import type { CoffeeType } from './enums';

// ---------------------------------------------------------------------------------------------- //

interface Coffee {
  title: string;
  type: CoffeeType[];
  description: string;
  price: number;
  imageUrl: string;
}
