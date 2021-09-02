import React, { useContext, useEffect, useState } from 'react';
import * as auth from 'services/auth';
import { SUCCESS_OK } from 'services/config';
import { getCurrentUser } from 'services/users';
import { User } from 'ts/interfaces/user';
import { getToken, setToken } from 'utils/auth-provider';

interface AuthFormProps {
  username: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  register: (form: AuthFormProps) => Promise<void>;
  login: (form: AuthFormProps) => Promise<void>;
  logout: () => Promise<void>;
}

const initializeUser = async (): Promise<User | null> => {
  let user = null;

  if (getToken()) {
    try {
      const response = await getCurrentUser();
      user = response.data.user;
    } catch (e) {
      if (e instanceof Error) {
        // * axios 可以直接在返回状态不为 2xx 的时候抛出异常
        console.error(e);
      }
    }
  }

  return user;
};

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  register: async () => undefined,
  login: async () => undefined,
  logout: async () => undefined
});
AuthContext.displayName = 'AuthContext';

export const AuthProvider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = async () => {
    try {
      await auth.logout();
      setUser(null);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
      }
    }
  };

  const login = async (form: AuthFormProps) => {
    try {
      const response = await auth.login(form);

      if (response.status === SUCCESS_OK && response.data.user) {
        setToken(response.data.user);
        setUser(response.data.user);
      }
    } catch (e) {
      if (e instanceof Error) {
        // * axios 可以直接在返回状态不为 2xx 的时候抛出异常
        console.error(e);
      }
    }
  };

  const register = async (form: AuthFormProps) => {
    try {
      const response = await auth.register(form);

      if (response.status === SUCCESS_OK && response.data.user) {
        setToken(response.data.user);
        setUser(response.data.user);
      }
    } catch (e) {
      if (e instanceof Error) {
        // * axios 可以直接在返回状态不为 2xx 的时候抛出异常
        console.error(e);
      }
    }
  };

  useEffect(() => {
    initializeUser().then(setUser);
  }, []);

  return React.createElement(AuthContext.Provider, { value: { user, register, login, logout } }, props.children);
};

export const useAuth = (): AuthContextType => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('useAuth 必须在 AuthProvider 中使用');
  }

  return auth;
};
