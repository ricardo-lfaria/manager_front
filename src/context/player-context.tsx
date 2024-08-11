"use client";
import { Player } from "@/types/player";
import { createContext, useContext, ReactNode } from "react";

interface PlayerContextType {
  playerData: Player | null;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayerContext must be used within a PlayerProvider");
  }
  return context;
};

interface PlayerProviderProps {
  playerData: Player | null;
  children: ReactNode;
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({
  playerData,
  children,
}) => {
  return (
    <PlayerContext.Provider value={{ playerData }}>
      {children}
    </PlayerContext.Provider>
  );
};
