import { AuthProvider } from 'context/auth-context';
import LoginPage from 'pages/login';
import React from 'react';

const Home: React.FC = () => {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
};

export default Home;
