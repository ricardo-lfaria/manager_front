import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditPlayerForm from "../forms/edit-player-form";

export default function DialogEditPlayer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-4 w-full lg:w-1/2 lg:max-w-[240px] h-12 text-white rounded-lg text-center">
          Editar Jogador
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col w-4/5 lg:w-1/4 py-6 h-fit justify-start items-center gap-4">
        <DialogHeader className="border-b w-full pb-4">
          <DialogTitle className="px-4">Editar Jogador</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full px-4">
          <EditPlayerForm></EditPlayerForm>
        </div>
      </DialogContent>
    </Dialog>
  );
}
