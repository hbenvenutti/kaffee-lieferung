export enum PaymentMethod {
  money = 'money',
  credit = 'credit',
  debit = 'debit'
}

// ---------------------------------------------------------------------------------------------- //

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  UPDATE_ITEM_IN_CART = 'UPDATE_ITEM_IN_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  EMPTY_CART = 'EMPTY_CART'
}

// ---------------------------------------------------------------------------------------------- //

export enum AddressInput {
  CITY = 'CITY',
  COMPLEMENT = 'COMPLEMENT',
  NEIGHBORHOOD = 'NEIGHBORHOOD',
  NUMBER = 'NUMBER',
  STATE = 'STATE',
  STREET = 'STREET',
  POSTAL_CODE = 'POSTAL_CODE'
}
