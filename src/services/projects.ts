import { AxiosResponse } from 'axios';
import { getToken } from 'utils/auth-provider';
import axios from './api';

export const getProjects = (params: Record<string, unknown>): Promise<AxiosResponse> => {
  return axios.request({
    url: '/projects',
    method: 'get',
    headers: {
      Authorization: getToken() ? `Bearer ${getToken()}` : ''
    },
    params
  });
};
