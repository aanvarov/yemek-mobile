import * as types from './actionTypes';

const initialState = {
  token: null,
  user: {
    lang: 'en',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      return {
        token: action.payload.token,
        user: action.payload.user,
      };
    }
    case types.SIGN_OUT_SUCCESS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
