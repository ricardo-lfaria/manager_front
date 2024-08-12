import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import DialogEditCampaign from "../dialogs/edit-campaign-dialog";
import { Button } from "../ui/button";

interface CampaignCardProps {
  id: string;
  name: string;
  image: string;
  createdAt: Date;
  starts: Date;
  ends: Date;
}

export function CampaignCard({
  id,
  name,
  image,
  createdAt,
  starts,
  ends,
}: CampaignCardProps) {
  return (
    <Card className="h-fit rounded-xl">
      <CardHeader className="shadow-sm border-b p-2">
        <CardTitle className="text-base">{name}</CardTitle>
        <CardDescription className="hidden">campanha</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col py-4 gap-4">
        <Image
          src={image ||"/scenery-sunset-calm-ocean.png"}
          width={400}
          height={400}
          alt="foto do jogador"
          className="rounded-2xl"
        />
        <div className="flex flex-col gap-2 w-full">
          <DialogEditCampaign></DialogEditCampaign>
          <Button type="button" className="bg-red-600 h-fit p-[3px]">
            Excluir
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
