export type ContextType = {
  currentData: number;
  setCurrentData: (param: number) => void;
  direction: string;
  setDirection: (param: string) => void;
};

export interface SceneProps {
  useRefWheel: React.RefObject<HTMLDivElement | null>;
}
