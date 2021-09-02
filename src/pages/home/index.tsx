import { useAuth } from 'context/auth';
import AuthenticatedApp from 'pages/authenticated';
import UnauthenticatedApp from 'pages/unauthenticated';
import React from 'react';

const Home: React.FC = () => {
  const { user } = useAuth();
  return <div id="home">{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
};

export default Home;
