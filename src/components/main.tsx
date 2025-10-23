import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  padding: 0 80px;
  position: relative;
  background-color: white;
`;

const Title = styled.h1`
  max-width: 353px;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
`;

const Main = (): React.JSX.Element => {
  return (
    <MainContainer>
      <Title>Исторические даты</Title>
    </MainContainer>
  );
};

export default Main;
