import * as types from './actionTypes';

export const signInSuccess = (payload = {user: {}, token: ''}) => {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload,
  };
};

export const updateProfileAction = (payload = {}) => {
  return {
    type: types.UPDATE_PROFILE,
    payload: JSON.parse(payload),
  };
};

export const signOutSuccess = payload => {
  return {
    type: types.SIGN_OUT_SUCCESS,
    payload,
  };
};
