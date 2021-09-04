import { AuthProvider } from 'context/auth';
import Home from 'pages/Home';
import React from 'react';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

export default App;
