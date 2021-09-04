import { Button } from 'antd';
import { useAuth } from 'context/auth';
import Header from 'layout/Header';
import Main from 'layout/Main';
import React from 'react';
import styled from 'styled-components';
import ProjectListPage from './ProjectList';

const Container = styled.div.attrs({
  className: 'w-full'
})``;

const AuthenticatedApp: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Container>
      <Header>
        <Button type="primary" onClick={logout}>
          登出
        </Button>
      </Header>

      <Main>
        <ProjectListPage />
      </Main>
    </Container>
  );
};

export default AuthenticatedApp;
