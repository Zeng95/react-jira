import { Card, Divider } from 'antd';
import logo from 'assets/images/logo.svg';
import React, { useState } from 'react';
import styled from 'styled-components';
import LoginPage from './login';
import RegisterPage from './register';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  padding: 5rem 0;
  background: url(${logo}) no-repeat center/8rem;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const UnauthenticatedApp: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const handleChangeAuthenticatedState = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <Container>
      <Header />
      <ShadowCard>
        {authenticated ? <LoginPage /> : <RegisterPage />}
        <Divider />
        <a onClick={handleChangeAuthenticatedState}>
          {authenticated ? '没有账号？注册新账号' : '已经有账号了？直接登录'}
        </a>
      </ShadowCard>
    </Container>
  );
};

export default UnauthenticatedApp;
