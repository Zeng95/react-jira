import { AxiosResponse } from 'axios';
import { getToken } from 'utils/auth-provider';
import axios from './api';

export const getCurrentUser = (): Promise<AxiosResponse> => {
  return axios.request({
    url: '/me',
    method: 'get',
    headers: {
      Authorization: getToken() ? `Bearer ${getToken()}` : ''
    }
  });
};

export const getUsers = (): Promise<AxiosResponse> => {
  return axios.request({
    url: '/users',
    method: 'get',
    headers: {
      Authorization: getToken() ? `Bearer ${getToken()}` : ''
    }
  });
};
