"use client";
import { Market } from "@/types/market";
import { createContext, useContext, ReactNode } from "react";

interface MarketContextType {
  marketData: Market | null;
}

const MarketContext = createContext<MarketContextType | undefined>(undefined);

export const useMarketContext = () => {
  const context = useContext(MarketContext);
  if (!context) {
    throw new Error("useMarketContext must be used within a MarketProvider");
  }
  return context;
};

interface MarketProviderProps {
  marketData: Market | null;
  children: ReactNode;
}

export const MarketProvider: React.FC<MarketProviderProps> = ({
  marketData,
  children,
}) => {
  return (
    <MarketContext.Provider value={{ marketData }}>
      {children}
    </MarketContext.Provider>
  );
};
