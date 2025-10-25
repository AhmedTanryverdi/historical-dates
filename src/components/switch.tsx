import React from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
  width: 132px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -100%;
  left: 0;
`;

const SwitchBtnsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 50%;
`;

const CurrentSlider = styled.div``;
const Switch = (): React.JSX.Element => {
  return (
    <CounterContainer>
      <CurrentSlider>06/06</CurrentSlider>
      <SwitchBtnsBlock>
        <Button>{'<'}</Button>
        <Button>{'>'}</Button>
      </SwitchBtnsBlock>
    </CounterContainer>
  );
};

export default Switch;
