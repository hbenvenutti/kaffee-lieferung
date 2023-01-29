import { MapPinLine } from 'phosphor-react';

import { Form } from './styles';

import type { ReactElement } from '../../@types';

// * ------------------------------------------------------------------------------------------ * //

export const Checkout = (): ReactElement => {
  return (
    <main>
      <Form action="">
        <div className="left-column">
          <h2>Complete seu Pedido</h2>

          <div className="address-card">
            {/* -------------------------------------------------------------------------------- */}

            <div className="form-title">
              <MapPinLine weight="regular" />
              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber o pedido.</p>
              </div>
            </div>

            {/* -------------------------------------------------------------------------------- */}

            <div className="inputs">
              <input
                className="inflexible-input"
                type="text"
                name="cep"
                id="cep"
                placeholder="CEP"
              />

              <input
                type="text"
                className="flexible-input"
                name="street"
                id="street"
                placeholder="Rua"
              />

              <div className="input-row">
                <input
                  className="inflexible-input"
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Número"
                />
                <input
                  type="text"
                  className="flexible-input"
                  name="complement"
                  id="complement"
                  placeholder="Complemento"
                />
                <span>Opcional</span>
              </div>

              <div className="input-row">
                <input
                  className="inflexible-input"
                  type="text"
                  name="neighborhood"
                  id="neighborhood"
                  placeholder="Bairro"
                />

                <input
                  type="text"
                  className="flexible-input"
                  name="city"
                  id="city"
                  placeholder="Cidade"
                />

                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="UF"
                />
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------- */}

          <div className="payment-method-card">
            <h4>Pagamento</h4>
            <p>O pagamento é feito na entrega. Escolha a forma como deseja pagar.</p>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------ */}

        <div className="right-column">
          <h2>Cafés Selecionados</h2>
        </div>

        {/* ------------------------------------------------------------------------------------ */}
      </Form>
    </main>
  );
};
