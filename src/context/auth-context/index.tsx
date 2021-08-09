import { handleUserResponse } from 'auth-provider';
import React, { createElement, useContext, useState } from 'react';
import * as auth from 'services/auth';
import { SUCCESS_OK } from 'services/config';
import { User } from 'ts/interfaces/user';

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

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const register = async (form: AuthFormProps) => {
    try {
      const response = await auth.register(form);

      if (response.status === SUCCESS_OK && response.data.user) {
        handleUserResponse(response.data.user);
        setUser(response.data.user);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const login = async (form: AuthFormProps) => {
    try {
      const response = await auth.login(form);

      if (response.status === SUCCESS_OK && response.data.user) {
        handleUserResponse(response.data.user);
        setUser(response.data.user);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    try {
      await auth.logout();
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return createElement(AuthContext.Provider, { value: { user, register, login, logout } }, children);
};

export const useAuth = (): AuthContextType => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('useAuth 必须在 AuthProvider 中使用');
  }

  return auth;
};
