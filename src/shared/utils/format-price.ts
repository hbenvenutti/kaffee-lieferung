export const formatPrice = (price: number): string => {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};
