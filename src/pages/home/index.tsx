import { useAuth } from 'context/auth-context';
import UnauthenticatedApp from 'pages/unauthenticated';
import React from 'react';

const Home: React.FC = () => {
  const { user } = useAuth();

  return <div id="home">{user ? `Hello ${user.name}` : <UnauthenticatedApp />}</div>;
};

export default Home;
