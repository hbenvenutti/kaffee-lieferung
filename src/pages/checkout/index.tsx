import type { ReactElement } from '../../@types';

// * ------------------------------------------------------------------------------------------ * //

export const Checkout = (): ReactElement => {
  return (
    <form action="">
      <div>
        <h2>Complete seu Pedido</h2>
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber o pedido.</p>
        </div>

        <div>
          <h4>Pagamento</h4>
          <p>O pagamento é feito na entrega. Escolha a forma como deseja pagar.</p>
        </div>
      </div>

      <div>
        <h2>Cafés Selecionados</h2>
      </div>
    </form>
  );
};
