import { AuthProvider } from 'context/auth-context';
import Home from 'pages/home';
import React from 'react';

const App: React.FC = () => {
  return (
    <div id="app" className="flex flex-col mx-auto my-6">
      <AuthProvider>
        <Home />
      </AuthProvider>
    </div>
  );
};

export default App;
