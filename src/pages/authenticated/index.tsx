import { Button } from 'antd';
import { useAuth } from 'context/auth';
import React from 'react';
import styled from 'styled-components';
import ProjectListPage from './project-list';

const Container = styled.div`
  max-width: 600px;
  margin: 100px auto;
`;

const AuthenticatedApp: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Container>
      <Button type="primary" onClick={logout}>
        登出
      </Button>
      <ProjectListPage />
    </Container>
  );
};

export default AuthenticatedApp;
