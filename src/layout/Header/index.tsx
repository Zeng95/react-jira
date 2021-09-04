import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 6rem;
`;

const PageHeader: React.FC = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default PageHeader;
