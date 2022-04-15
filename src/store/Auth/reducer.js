import * as types from './actionTypes';

const initialState = {
  accessToken: null,
  refreshToken: null,
  user: {
    lang: 'en',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      return Object.assign({}, state, {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        user: action.payload.user,
      });
    }
    case types.UPDATE_PROFILE: {
      return Object.assign({}, state, {
        user: action.payload,
      });
    }
    case types.SIGN_OUT_SUCCESS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
