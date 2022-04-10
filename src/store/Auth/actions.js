import * as types from './actionTypes';

export const signInSuccess = (
  payload = { user: {}, accessToken: '', refreshToken: '' },
) => {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload,
  };
};

export const signOutSuccess = payload => {
  return {
    type: types.SIGN_OUT_SUCCESS,
    payload,
  };
};

export const updateProfileAction = (payload = {}) => {
  return {
    type: types.UPDATE_PROFILE,
    payload: JSON.parse(payload),
  };
};
