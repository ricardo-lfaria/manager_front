import { CampaignCard } from "@/components/cards/campaign-card";
import { Metadata } from "next";
import DialogCreateCampaign from "@/components/dialogs/create-campaign-dialog";
import { Campaign } from "@/types/campaign";

export const metadata: Metadata = {
  title: "Campaign",
};

async function getCampaign(): Promise<Campaign[]> {
  try {
    const res = await fetch(
      `https://667e1d1d297972455f6723ea.mockapi.io/campaign`,
      {
        cache: "no-cache",
        // next: { revalidate: 259200 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch team data. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching team:", error);
    return [];
  }
}

export default async function AdminCampaignPage() {
  const campaigns = await getCampaign();
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-semibold text-xl">Campanhas</h1>
        <DialogCreateCampaign></DialogCreateCampaign>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {campaigns?.map((campaign) => (
          <CampaignCard key={campaign.id} {...campaign} />
        ))}
      </div>
    </div>
  );
}
