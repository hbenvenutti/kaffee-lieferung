import coffee from '../../../../assets/coffee.svg';

import { Container, Content } from './styles';

import type { ReactElement } from 'react';
// ---------------------------------------------------------------------------------------------- //

export const Intro = (): ReactElement => {
  return (
    <Container>
      <div className="background" />

      <Content className="content">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
          <div className="list">
            <div>
              <span className="cart" />
              Compra simples e segura
            </div>

            <div>
              <span className="package" />
              Embalagem matém o café intacto
            </div>

            <div>
              <span className="timer" />
              Entrega rápida e rastreada
            </div>

            <div>
              <span className="coffee" />O café chega fresquinho até você
            </div>
          </div>
        </div>

        <img src={coffee} alt="" />
      </Content>
    </Container>
  );
};
