import { Button } from 'antd';
import { useAuth } from 'context/auth';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 100px auto;
`;

const AuthenticatedApp: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <Button type="primary" onClick={logout}>
        登出
      </Button>
      <div>{user && <span>{`Hello ${user.name}`}</span>}</div>
    </Container>
  );
};

export default AuthenticatedApp;
