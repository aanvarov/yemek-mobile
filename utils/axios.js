import Axios from 'axios';
import store from '../store';
import { SIGN_OUT_SUCCESS } from '../store/Auth/actionTypes';
import { baseURL } from '../constants';

const axios = Axios.create({ baseURL, withCredentials: true });

axios.interceptors.request.use(config => {
  const token = store.getState().auth.token || null;
  config.headers.authorization = token ? `Bearer ${token}` : null;
  return config;
});

axios.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    if (err.response.status === 401) {
      store.dispatch({ type: SIGN_OUT_SUCCESS });
    }
    return Promise.reject(err);
  },
);

export default axios;
