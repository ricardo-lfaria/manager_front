import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateCampaignForm from "../forms/create-campaign-form";

export default function DialogCreateCampaign() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-4 w-1/2 max-w-[240px] h-12 rounded-lg">
          Adicionar Campanha
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col w-4/5 lg:w-1/4 py-6 h-fit justify-start items-center gap-4">
        <DialogHeader className="border-b w-full pb-4">
          <DialogTitle className="px-4">Campanha</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full px-4">
          <CreateCampaignForm></CreateCampaignForm>
        </div>
      </DialogContent>
    </Dialog>
  );
}
