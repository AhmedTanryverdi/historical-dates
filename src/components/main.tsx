import React from 'react';
import styled from 'styled-components';
import Scene from './scene';
import Slider from './slider';

const MainContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 80px;
  padding-bottom: 20px;
`;

const Title = styled.h1`
  max-width: 353px;
  width: 100%;
  position: relative;
  top: 170px;
  font-weight: bold;
  font-size: 56px;
  color: #42567a;
`;

const Main = (): React.JSX.Element => {
  return (
    <MainContainer>
      <Title>Исторические даты</Title>
      <Scene />
      <Slider />
    </MainContainer>
  );
};

export default Main;
