import { useAuth } from 'context/auth';
import AuthenticatedApp from 'pages/authenticated';
import UnauthenticatedApp from 'pages/unauthenticated';
import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
  min-height: 100vh;
`;

const Home: React.FC = () => {
  const { user } = useAuth();
  return <StyledHome id="home">{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</StyledHome>;
};

export default Home;
