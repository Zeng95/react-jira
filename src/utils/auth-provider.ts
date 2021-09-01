// * 在真实环境中，如果使用 Firebase 等类似的第三方 auth 服务的话，本文件不需要开发者开发
// * 帮助操控 JWT
import { User } from 'ts/interfaces/user';

const LOCALSTORAGE_KEY = '__auth_provider_token__';

export const getToken = (): void => {
  window.localStorage.getItem(LOCALSTORAGE_KEY);
};

export const setToken = (user: User): void => {
  window.localStorage.setItem(LOCALSTORAGE_KEY, user.token || '');
};

export const removeToken = (): void => {
  window.localStorage.removeItem(LOCALSTORAGE_KEY);
};
