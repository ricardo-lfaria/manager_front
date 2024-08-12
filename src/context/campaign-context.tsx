"use client";
import { Campaign } from "@/types/campaign";
import { createContext, useContext, ReactNode } from "react";

interface CampaignContextType {
  campaignData: Campaign | null;
}

const CampaignContext = createContext<CampaignContextType | undefined>(
  undefined
);

export const useCampaignContext = () => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error(
      "useCampaignContext must be used within a CampaignProvider"
    );
  }
  return context;
};

interface CampaignProviderProps {
  campaignData: Campaign | null;
  children: ReactNode;
}

export const CampaignProvider: React.FC<CampaignProviderProps> = ({
  campaignData,
  children,
}) => {
  return (
    <CampaignContext.Provider value={{ campaignData }}>
      {children}
    </CampaignContext.Provider>
  );
};
