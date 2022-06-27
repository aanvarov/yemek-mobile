import Axios from 'axios';
import store from '../store';
import { SIGN_OUT_SUCCESS } from '../store/Auth/actionTypes';
import { baseURL } from '../constants';
import { signInSuccess } from '../store/Auth/actions';

const axios = Axios.create({ baseURL, withCredentials: true });

axios.interceptors.request.use(config => {
  const accessToken = store.getState().auth.accessToken || null;
  config.headers.authorization = accessToken ? `Bearer ${accessToken}` : null;
  config.headers['x-refresh-token'] =
    store.getState().auth.refreshToken || null;
  return config;
});

axios.interceptors.response.use(
  res => {
    // console.log('res.headers[x-access-token]', res.headers['x-access-token']);
    const newAccessToken = res.headers['x-access-token'];
    // console.log('accessToken', newAccessToken);

    if (newAccessToken) {
      const state = store.getState();
      // const accessToken = res.headers['x-access-token'];
      store.dispatch(
        signInSuccess({
          ...state.auth,
          accessToken: newAccessToken,
        }),
      );
    }
    return res;
  },
  error => {
    console.log('AXIOS----------error', { ...error });
    // if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
    //   return Promise.reject(error);
    // }
    // if (error) {
    //   return store.dispatch({ type: SIGN_OUT_SUCCESS });
    // }
    return Promise.reject(error);
  },
);

export default axios;
