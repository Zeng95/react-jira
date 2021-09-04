import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  height: calc(100vh - 6rem);
`;

const PageMain: React.FC = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default PageMain;
