import { CoffeeType } from './@types/enums';

import type { Coffee } from './@types';

// ---------------------------------------------------------------------------------------------- //

export const coffees: Coffee[] = [
  {
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.traditional]
  },
  {
    title: 'Expresso Cremoso',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.traditional]
  },
  {
    title: 'Expresso Americano',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.traditional]
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.traditional, CoffeeType.cold]
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.traditional, CoffeeType.latte]
  },
  {
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.traditional, CoffeeType.latte]
  },
  {
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.traditional, CoffeeType.latte]
  },
  {
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.traditional, CoffeeType.latte]
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.traditional, CoffeeType.latte]
  },
  {
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.special, CoffeeType.latte]
  },
  {
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.special, CoffeeType.alcohol, CoffeeType.cold]
  },
  {
    title: 'Havaino',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.special]
  },
  {
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.special]
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imageUrl: '',
    type: [CoffeeType.special]
  }
];
