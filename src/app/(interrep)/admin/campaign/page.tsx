import { CampaignCard } from "@/components/cards/campaign-card";
import { Metadata } from "next";
import DialogCreateCampaign from "@/components/dialogs/create-campaign-dialog";

export const metadata: Metadata = {
  title: "admin - campaign",
};

export default async function AdminCampaignPage() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-semibold text-xl">Campanhas</h1>
        <DialogCreateCampaign></DialogCreateCampaign>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
      </div>
    </div>
  );
}
