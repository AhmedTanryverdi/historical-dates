import React, { useContext, useRef } from 'react';
import gsap from 'gsap';
import { ContextState } from '@/features/context';
import { controller } from '@/features/controller';
import styled from 'styled-components';
import { ContextType, SceneProps } from '@/shared/types';

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
  width: 12px;
  height: 12px;
  position: absolute;
  top: calc(50% - 6px);
  left: calc(50% - 6px);
  transform-origin: 50% 50%;
  background-color: #000;
  border-radius: 50%;
  transition: 0.3s;
  span {
    opacity: 0;
    font-size: 20px;
    color: #303e58;
  }
  &:hover,
  &.active {
    width: 56px;
    height: 56px;
    top: calc(50% - 28px);
    left: calc(50% - 28px);
    background-color: transparent;
    border: 1px solid #303e58;
    transition: 0.3s;
    span {
      opacity: 1;
    }
  }
`;

const Scene = ({ useRefWheel }: SceneProps): React.JSX.Element => {
  const { currentData, setCurrentData, direction, setDirection } = useContext<ContextType | null>(
    ContextState
  ) as ContextType;

  const buttonRefs = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null)
  ];
  return (
    <SceneContainer>
      <Wheel ref={useRefWheel}>
        {Array.from({ length: 6 }, (_, i) => i).map((i: number) => {
          if (buttonRefs[i].current) {
            const r = () =>
              direction === 'left'
                ? gsap.to(buttonRefs[i].current, { rotation: '-=60', duration: 0 })
                : gsap.to(buttonRefs[i].current, { rotation: '+=60', duration: 0 });
            r();
          }
          return (
            <Button
              key={i}
              ref={buttonRefs[i]}
              className={i + 1 === currentData ? 'active' : ''}
              style={{
                transform: `rotate(${i * 60}deg) translate(${265}px) rotate(${-i * 60}deg)`
              }}
              onClick={() => {
                setCurrentData(i + 1);
                if (useRefWheel.current) {
                  setDirection('left');
                  controller(useRefWheel.current, 'left');
                }
              }}
            >
              <span>{i + 1}</span>
            </Button>
          );
        })}
      </Wheel>
    </SceneContainer>
  );
};

export default Scene;
