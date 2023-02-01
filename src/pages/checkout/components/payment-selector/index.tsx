import { useTheme } from 'styled-components';
import { Bank, CreditCard, Money } from 'phosphor-react';

import { Container } from './styles';

import type { PaymentSelectorProps } from '../../@types';
import type { ReactElement } from '../../../../@types';

// * ------------------------------------------------------------------------------------------ * //

const PaymentSelector = (props: PaymentSelectorProps): ReactElement => {
  // *** --- Props -------------------------------------------------------------------------- *** //
  const { isActive, method, text, onClick } = props;

  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { primary2 } = useTheme();

  // *** --- Variables ---------------------------------------------------------------------- *** //
  const icons = {
    money: Money,
    credit: CreditCard,
    debit: Bank
  };

  const Icon = icons[method];

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <Container
      onClick={onClick}
      isActive={isActive}
      type="button"
    >
      <Icon color={primary2} />
      {text}
    </Container>
  );
};

// * ------------------------------------------------------------------------------------------ * //

export { PaymentSelector };
