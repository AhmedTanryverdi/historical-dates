import { ContextType } from '@/shared/types';
import { createContext, ReactNode, useState } from 'react';

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
