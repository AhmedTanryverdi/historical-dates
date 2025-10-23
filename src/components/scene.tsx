import React from 'react';
import styled from 'styled-components';

const SceneContainer = styled.section`
  max-width: 536px;
  width: 100%;
  height: 530px;
  margin: 215px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wheel = styled.div`
  max-width: 530px;
  width: 100%;
  height: 530px;
  border: 1px solid grey;
  border-radius: 50%;
  position: relative;
`;

const Button = styled.button`
  width: 6px;
  height: 6px;
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% - 3px);
  transform-origin: 0% 50%;
  background-color: #000;
  border-radius: 50%;
`;

const Scene = (): React.JSX.Element => {
  return (
    <SceneContainer>
      <Wheel>
        {Array.from({ length: 6 }, (_, i) => i).map((i: number) => (
          <Button
            key={i}
            style={{
              transform: `rotate(${i * 60}deg) translate(${265}px) rotate(${-i * 60}deg)`
            }}
          />
        ))}
      </Wheel>
    </SceneContainer>
  );
};

export default Scene;
