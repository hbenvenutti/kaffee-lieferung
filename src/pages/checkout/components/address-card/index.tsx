import { useTheme } from 'styled-components';
import { MapPinLine } from 'phosphor-react';

import { useCart } from '../../../../shared/hooks/cart-context';
import { AddressInput } from '../../../../shared/hooks/cart-context/enums';

import { Container } from './styles';

import type { ChangeEvent, ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const AddressCard = (): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { secondary3 } = useTheme();
  const {
    address,
    setCity,
    setComplement,
    setNeighborhood,
    setNumber,
    setState,
    setStreet,
    setPostalCode
  } = useCart();

  // *** --- Dictionaries ------------------------------------------------------------------- *** //
  const setFunctions = {
    [AddressInput.CITY]: setCity,
    [AddressInput.COMPLEMENT]: setComplement,
    [AddressInput.NEIGHBORHOOD]: setNeighborhood,
    [AddressInput.NUMBER]: setNumber,
    [AddressInput.STATE]: setState,
    [AddressInput.STREET]: setStreet,
    [AddressInput.POSTAL_CODE]: setPostalCode
  };

  // *** --- Functions ---------------------------------------------------------------------- *** //
  const onInputChange = (event: ChangeEvent<HTMLInputElement>, input: AddressInput): void => {
    const { value } = event.target;

    setFunctions[input](value);
  };

  // *** --- Variables ---------------------------------------------------------------------- *** //
  const { city, complement, neighborhood, number, postalCode, state, street } = address;

  // *** --- TSX ---------------------------------------------------------------------------- *** //
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
          value={postalCode}
          onChange={event => onInputChange(event, AddressInput.POSTAL_CODE)}
        />

        {/* ------------------------------------------------------------------------------ */}

        <input
          type="text"
          className="input-flexible"
          name="street"
          id="street"
          placeholder="Rua"
          value={street}
          onChange={event => onInputChange(event, AddressInput.STREET)}
        />

        {/* ------------------------------------------------------------------------------ */}

        <div className="input-row">
          <input
            className="input-inflexible"
            type="text"
            name="number"
            id="number"
            placeholder="Número"
            value={number}
            onChange={event => onInputChange(event, AddressInput.NUMBER)}
          />

          <input
            type="text"
            className="input-flexible"
            name="complement"
            id="complement"
            placeholder="Complemento"
            value={complement}
            onChange={event => onInputChange(event, AddressInput.COMPLEMENT)}
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
            value={neighborhood}
            onChange={event => onInputChange(event, AddressInput.NEIGHBORHOOD)}
          />

          {/* ---------------------------------------------------------------------------- */}

          <input
            type="text"
            className="input-flexible"
            name="city"
            id="city"
            placeholder="Cidade"
            value={city}
            onChange={event => onInputChange(event, AddressInput.CITY)}
          />

          {/* ---------------------------------------------------------------------------- */}

          <input
            type="text"
            name="state"
            id="state"
            placeholder="UF"
            value={state}
            onChange={event => onInputChange(event, AddressInput.STATE)}
          />
        </div>
        {/* ---- End - input-row --------------------------------------------------------- */}
      </div>
    </Container>
  );
};
