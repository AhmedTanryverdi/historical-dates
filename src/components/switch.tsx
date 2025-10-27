import { ContextState } from '@/features/context';
import { controller } from '@/features/controller';
import { ContextType, SceneProps } from '@/shared/types';
import React, { useContext } from 'react';
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

const Switch = ({ useRefWheel }: SceneProps): React.JSX.Element => {
  const { currentData, setCurrentData, setDirection } = useContext<ContextType | null>(
    ContextState
  ) as ContextType;

  return (
    <CounterContainer>
      <CurrentSlider>0{currentData}/06</CurrentSlider>
      <SwitchBtnsBlock>
        <Button
          onClick={() => {
            if (currentData > 1 && currentData <= 6) {
              setCurrentData(currentData - 1);
              if (useRefWheel.current) {
                setDirection('left');
                controller(useRefWheel.current, 'left');
              }
            }
          }}
        >
          {'<'}
        </Button>
        <Button
          onClick={() => {
            if (currentData >= 1 && currentData < 6) {
              setCurrentData(currentData + 1);
              if (useRefWheel.current) {
                setDirection('right');
                controller(useRefWheel.current, 'rigth');
              }
            }
          }}
        >
          {'>'}
        </Button>
      </SwitchBtnsBlock>
    </CounterContainer>
  );
};

export default Switch;
