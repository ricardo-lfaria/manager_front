'use client'
import { Game } from '@/types/games';
import { createContext, useContext, ReactNode } from 'react';

interface GameContextType {
  gameData: Game | null;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  gameData: Game | null;
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ gameData, children }) => {
  return (
    <GameContext.Provider value={{ gameData }}>
      {children}
    </GameContext.Provider>
  );
};
