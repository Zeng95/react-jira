import { Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import LoginPage from './login';
import RegisterPage from './register';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const UnauthenticatedApp: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  return (
    <Container>
      {authenticated ? <LoginPage /> : <RegisterPage />}
      <Button type="primary" onClick={() => setAuthenticated(!authenticated)}>
        切换到{authenticated ? '注册' : '登录'}
      </Button>
    </Container>
  );
};

export default UnauthenticatedApp;
