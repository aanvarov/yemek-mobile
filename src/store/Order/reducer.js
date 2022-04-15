import * as types from './actionTypes';

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_ORDER: {
      return Object.assign({}, state, {
        orders: [...state.orders, action.payload.order],
      });
    }
    default: {
      return state;
    }
  }
};
