import { Card, Divider } from 'antd';
import logo from 'assets/images/logo.svg';
import React, { useState } from 'react';
import styled from 'styled-components';
import LoginPage from './login';
import RegisterPage from './register';

const Container = styled.div.attrs({
  className: 'flex flex-col justify-center items-center min-h-screen'
})``;

const Header = styled.header.attrs({
  className: 'w-full bg-no-repeat bg-center'
})`
  padding: 5rem 0;
  background-image: url(${logo});
  background-size: 8rem;
`;

const ShadowCard = styled(Card).attrs({
  className: 'text-center'
})`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
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
