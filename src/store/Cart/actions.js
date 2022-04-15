import * as types from './actionTypes';

// get total count of foods and return count
export const getTotalCount = payload => {
  return {
    type: types.GET_TOTAL_COUNT,
    payload,
  };
};

// add food to cart
export const addedToCart = food => {
  return {
    type: types.ADDED_TO_CART,
    payload: { food },
  };
};

// update counter of food in cart by id
export const updateCounter = (id, counter) => {
  return {
    type: types.UPDATE_COUNTER,
    payload: { id, counter },
  };
};

export const clearCart = payload => {
  return {
    type: types.CLEAR_CART,
    payload,
  };
};
