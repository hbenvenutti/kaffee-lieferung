import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import coffeeImage from '../../../../assets/coffee.svg';

import { CartSpan, CoffeeSpan, Container, Content, List, PackageSpan, TimerSpan } from './styles';

import type { ReactElement } from '../../../../@types';

// ---------------------------------------------------------------------------------------------- //

export const Intro = (): ReactElement => {
  return (
    <Container>
      <div className="background" />

      <Content className="content">
        <div>
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
          </div>

          <List>
            <div>
              <CartSpan>
                <ShoppingCart weight="fill" />
              </CartSpan>
              Compra simples e segura
            </div>

            <div>
              <PackageSpan>
                <Package weight="fill" />
              </PackageSpan>
              Embalagem matém o café intacto
            </div>

            <div>
              <TimerSpan>
                <Timer weight="fill" />
              </TimerSpan>
              Entrega rápida e rastreada
            </div>

            <div>
              <CoffeeSpan>
                <Coffee weight="fill" />
              </CoffeeSpan>
              O café chega fresquinho até você
            </div>
          </List>
        </div>

        <img src={coffeeImage} alt="" />
      </Content>
    </Container>
  );
};
