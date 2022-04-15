import * as types from './actionTypes';

// save order details to store
export const saveOrder = order => {
  return {
    type: types.SAVE_ORDER,
    payload: { order },
  };
};
