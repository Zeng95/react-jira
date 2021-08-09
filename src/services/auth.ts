import { AxiosResponse } from 'axios';
import axios from './api';
import { LOCAL_STORAGE_KEY } from './config';

export const logout = (): Promise<void> => {
  return new Promise((resolve) => {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    resolve();
  });
};

export const login = <Type>(data: Type): Promise<AxiosResponse> => {
  return axios.request({
    url: '/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  });
};

export const register = <Type>(data: Type): Promise<AxiosResponse> => {
  return axios.request({
    url: '/register',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  });
};
