// * 帮助操控 JWT

import { User } from 'ts/interfaces/user';

const localStorageKey = '__auth_provider_token__';

export const getToken = (): void => {
  window.localStorage.getItem(localStorageKey);
};

export const handleUserResponse = (user: User): User => {
  window.localStorage.setItem(localStorageKey, user.token || '');
  return user;
};

export const logout = (): void => {
  window.localStorage.removeItem(localStorageKey);
};
