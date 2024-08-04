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

export function CampaignCard() {
  return (
    <Card className="h-fit rounded-xl">
      <CardHeader className="shadow-sm border-b p-2">
        <CardTitle className="text-base">Campanha</CardTitle>
        <CardDescription className="hidden">(PIV)</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col py-4 gap-4">
        <Image
          src="/scenery-sunset-calm-ocean.png"
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
