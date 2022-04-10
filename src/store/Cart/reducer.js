import * as types from './actionTypes';

const initialState = {
  cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADDED_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case types.CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    default: {
      return state;
    }
  }
};
