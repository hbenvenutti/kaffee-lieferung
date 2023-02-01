import { useTheme } from 'styled-components';
import { MapPinLine } from 'phosphor-react';

import { Container } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const AddressCard = (): ReactElement => {
  const { secondary3 } = useTheme();

  return (
    <Container>
      <div className="form-title">
        <MapPinLine
          color={secondary3}
          weight="regular"
          className="svg-location"
        />

        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber o pedido.</p>
        </div>
      </div>
      {/* ---- End - form-title ------------------------------------------------------ *** */}

      <div className="inputs">
        <input
          className="input-inflexible"
          type="text"
          name="cep"
          id="cep"
          placeholder="CEP"
        />

        {/* ------------------------------------------------------------------------------ */}

        <input
          type="text"
          className="input-flexible"
          name="street"
          id="street"
          placeholder="Rua"
        />

        {/* ------------------------------------------------------------------------------ */}

        <div className="input-row">
          <input
            className="input-inflexible"
            type="text"
            name="number"
            id="number"
            placeholder="Número"
          />

          <input
            type="text"
            className="input-flexible"
            name="complement"
            id="complement"
            placeholder="Complemento"
          />

          <span>Opcional</span>
        </div>
        {/* ---- End - input-row --------------------------------------------------------- */}

        <div className="input-row">
          <input
            className="input-inflexible"
            type="text"
            name="neighborhood"
            id="neighborhood"
            placeholder="Bairro"
          />

          {/* ---------------------------------------------------------------------------- */}

          <input
            type="text"
            className="input-flexible"
            name="city"
            id="city"
            placeholder="Cidade"
          />

          {/* ---------------------------------------------------------------------------- */}

          <input
            type="text"
            name="state"
            id="state"
            placeholder="UF"
          />
        </div>
        {/* ---- End - input-row --------------------------------------------------------- */}
      </div>
    </Container>
  );
};
