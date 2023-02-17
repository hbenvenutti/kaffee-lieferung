import tradicionalImg from '../../../assets/coffees/expresso-tradicional.svg';
import americanoImg from '../../../assets/coffees/expresso-americano.svg';
import cremosoImg from '../../../assets/coffees/expresso-cremoso.svg';
import geladoImg from '../../../assets/coffees/expresso-gelado.svg';
import cafeComLeiteImg from '../../../assets/coffees/cafe-com-leite.svg';
import latteImg from '../../../assets/coffees/latte.svg';
import capuccinoImg from '../../../assets/coffees/capuccino.svg';
import macchiatoImg from '../../../assets/coffees/macchiato.svg';
import mocaccinoImg from '../../../assets/coffees/mocaccino.svg';
import chocolateQuenteImg from '../../../assets/coffees/chocolate-quente.svg';
import cubanoImg from '../../../assets/coffees/cubano.svg';
import havaianoImg from '../../../assets/coffees/havaiano.svg';
import arabeImg from '../../../assets/coffees/arabe.svg';
import irlandesImg from '../../../assets/coffees/irlandes.svg';

import { CoffeeType } from './@types/enums';

import type { Coffee } from './@types';

// ---------------------------------------------------------------------------------------------- //

export const coffees: Coffee[] = [
  {
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageUrl: tradicionalImg,
    types: [CoffeeType.traditional]
  },
  {
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageUrl: americanoImg,
    types: [CoffeeType.traditional]
  },
  {
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imageUrl: cremosoImg,
    types: [CoffeeType.traditional]
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imageUrl: geladoImg,
    types: [CoffeeType.traditional, CoffeeType.cold]
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageUrl: cafeComLeiteImg,
    types: [CoffeeType.traditional, CoffeeType.latte]
  },
  {
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imageUrl: latteImg,
    types: [CoffeeType.traditional, CoffeeType.latte]
  },
  {
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imageUrl: capuccinoImg,
    types: [CoffeeType.traditional, CoffeeType.latte]
  },
  {
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imageUrl: macchiatoImg,
    types: [CoffeeType.traditional, CoffeeType.latte]
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imageUrl: mocaccinoImg,
    types: [CoffeeType.traditional, CoffeeType.latte]
  },
  {
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imageUrl: chocolateQuenteImg,
    types: [CoffeeType.special, CoffeeType.latte]
  },
  {
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imageUrl: cubanoImg,
    types: [CoffeeType.special, CoffeeType.alcohol, CoffeeType.cold]
  },
  {
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    imageUrl: havaianoImg,
    types: [CoffeeType.special]
  },
  {
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imageUrl: arabeImg,
    types: [CoffeeType.special]
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imageUrl: irlandesImg,
    types: [CoffeeType.special]
  }
];
