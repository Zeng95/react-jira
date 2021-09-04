import { Card, Divider } from 'antd';
import left from 'assets/images/left.svg';
import logo from 'assets/images/logo.svg';
import right from 'assets/images/right.svg';
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
  padding: 3rem 0;
  background-image: url(${logo});
  background-size: 8rem;
`;

const Background = styled.div.attrs({
  className: 'absolute w-full h-full bg-no-repeat bg-fixed'
})`
  background-image: url(${left}), url(${right});
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  z-index: -1;
`;

const ShadowCard = styled(Card).attrs({
  className: 'text-center'
})`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
`;

const Title = styled.h2.attrs({
  className: 'text-4xl'
})`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const UnauthenticatedApp: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const handleChangeAuthenticatedState = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <Container>
      {/* Header */}
      <Header />

      {/* Background */}
      <Background />

      {/* Main Content */}
      <ShadowCard>
        <Title>{authenticated ? '请登录' : '请注册'}</Title>
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
