import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditCampaignForm from "../forms/edit-campaign-form";

export default function DialogEditCampaign() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-fit p-[3px]">Editar</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col w-4/5 lg:w-1/4 py-6 h-fit justify-start items-center gap-4">
        <DialogHeader className="border-b w-full pb-4">
          <DialogTitle className="px-4">Campanha</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full px-4">
          <EditCampaignForm></EditCampaignForm>
        </div>
      </DialogContent>
    </Dialog>
  );
}
