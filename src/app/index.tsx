import { AuthProvider } from 'context/auth';
import Home from 'pages/home';
import React from 'react';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

export default App;
