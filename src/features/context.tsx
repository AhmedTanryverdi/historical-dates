import { createContext, ReactNode, useState } from 'react';

type ContextType = {
  currentData: number;
  setCurrentData: (param: number) => void;
  direction: string;
  setDirection: (param: string) => void;
};

export const ContextState = createContext<ContextType | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentData, setCurrentData] = useState(1);
  const [direction, setDirection] = useState('left');
  return (
    <ContextState.Provider
      value={{
        currentData,
        setCurrentData,
        direction,
        setDirection
      }}
    >
      {children}
    </ContextState.Provider>
  );
};
