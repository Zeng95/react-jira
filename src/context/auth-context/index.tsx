import React, { useContext, useState } from 'react';
import * as auth from 'services/auth';
import { SUCCESS_OK } from 'services/config';
import { User } from 'ts/interfaces/user';
import { setToken } from 'utils/auth-provider';

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
        console.error('Error:', e);
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
        console.error('Error:', e);
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
        console.error('Error:', e);
      }
    }
  };

  return React.createElement(AuthContext.Provider, { value: { user, register, login, logout } }, props.children);
};

export const useAuth = (): AuthContextType => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('useAuth 必须在 AuthProvider 中使用');
  }

  return auth;
};
