import { AxiosResponse } from 'axios';
import { removeToken } from 'utils/auth-provider';
import axios from './api';

export const logout = (): Promise<void> => {
  return new Promise((resolve) => {
    removeToken();
    resolve();
  });
};

export const login = <Type>(data: Type): Promise<AxiosResponse> => {
  return axios.request({
    url: '/login',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data
  });
};

export const register = <Type>(data: Type): Promise<AxiosResponse> => {
  return axios.request({
    url: '/register',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data
  });
};
