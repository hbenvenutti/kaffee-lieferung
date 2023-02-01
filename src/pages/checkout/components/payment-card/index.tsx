import { useState } from 'react';
import { useTheme } from 'styled-components';
import { CurrencyDollar } from 'phosphor-react';

import { PaymentMethod } from '../../enums';
import { PaymentSelector } from '../payment-selector';

import { Container } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const PaymentCard = (): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { primary2 } = useTheme();

  // *** --- States ------------------------------------------------------------------------- *** //

  const [isCreditButtonActive, setIsCreditButtonActive] = useState(false);
  const [isDebitButtonActive, setIsDebitButtonActive] = useState(false);
  const [isMoneyButtonActive, setIsMoneyButtonActive] = useState(false);

  // *** ---- Dictionaries ------------------------------------------------------------------ *** //

  const selectors = {
    money: setIsMoneyButtonActive,
    debit: setIsDebitButtonActive,
    credit: setIsCreditButtonActive
  };

  // *** --- Functions --------------------------------------------------------------------- *** //

  const handlePaymentSelection = (selector: PaymentMethod): void => {
    resetSelectors();

    selectors[selector](true);
  };

  // -------------------------------------------------------------------------------------------- //

  const resetSelectors = (): void => {
    setIsCreditButtonActive(false);
    setIsDebitButtonActive(false);
    setIsMoneyButtonActive(false);
  };

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <Container>
      <div className="form-title">
        <CurrencyDollar
          color={primary2}
          weight="regular"
          className="svg-dollar"
        />

        <div>
          <h4>Pagamento</h4>
          <p>O pagamento é feito na entrega. Escolha a forma como deseja pagar.</p>
        </div>
      </div>
      {/* ---- End - form-title ------------------------------------------------------ *** */}

      <div className="buttons-container">
        <PaymentSelector
          text="Cartão de Crédito"
          method={PaymentMethod.credit}
          onClick={() => handlePaymentSelection(PaymentMethod.credit)}
          isActive={isCreditButtonActive}
        />

        {/* ------------------------------------------------------------------------------ */}

        <PaymentSelector
          text="Cartão de Debito"
          method={PaymentMethod.debit}
          onClick={() => handlePaymentSelection(PaymentMethod.debit)}
          isActive={isDebitButtonActive}
        />

        {/* ------------------------------------------------------------------------------ */}

        <PaymentSelector
          text="Dinheiro"
          method={PaymentMethod.money}
          onClick={() => handlePaymentSelection(PaymentMethod.money)}
          isActive={isMoneyButtonActive}
        />
      </div>
      {/* ---- End - buttons-container --------------------------------------------------- */}
    </Container>
  );
};
