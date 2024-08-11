'use client'
import { Team } from '@/types/teams';
import { createContext, useContext, ReactNode } from 'react';

interface TeamContextType {
  teamData: Team | null;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const useTeamContext = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeamContext must be used within a TeamProvider');
  }
  return context;
};

interface TeamProviderProps {
  teamData: Team | null;
  children: ReactNode;
}

export const TeamProvider: React.FC<TeamProviderProps> = ({ teamData, children }) => {
  return (
    <TeamContext.Provider value={{ teamData }}>
      {children}
    </TeamContext.Provider>
  );
};
