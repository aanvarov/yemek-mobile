import * as types from './actionTypes';

export const addedToCart = (payload = { cart: [] }) => {
  return {
    type: types.ADDED_TO_CART,
    payload,
  };
};

export const clearCart = payload => {
  return {
    type: types.CLEAR_CART,
    payload,
  };
};
