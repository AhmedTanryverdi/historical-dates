import React from 'react';
import { Canvas, Cards, Dates, Switcher } from '@/feature/ui';

export const Home: React.FC = (): React.JSX.Element => {
  return (
    <div className="home">
      <Title title="Исторические даты" />
      <Canvas />
      <Dates />
      <Switcher />
      <Cards />
    </div>
  );
};

const Title: React.FC<{ title: string }> = ({ title }) => {
  return <h1 className="home__title">{title}</h1>;
};
