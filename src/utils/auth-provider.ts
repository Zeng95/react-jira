// * 帮助操控 JWT
import { User } from 'ts/interfaces/user';

const localStorageKey = '__auth_provider_token__';

export const getToken = (): void => {
  window.localStorage.getItem(localStorageKey);
};

export const setToken = (user: User): void => {
  window.localStorage.setItem(localStorageKey, user.token || '');
};

export const removeToken = (): void => {
  window.localStorage.removeItem(localStorageKey);
};
