import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateGameForm from "../forms/create-game-form";

export default function DialogCreateGame() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-800 font-semibold p-4 w-1/2 max-w-[240px] h-12 text-white rounded-lg text-center">
          Agendar Partida
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col w-4/5 lg:w-1/4 py-6 h-fit justify-start items-center gap-4">
        <DialogHeader className="border-b w-full pb-4">
          <DialogTitle className="px-4">Agendar Partida</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full px-4">
          <CreateGameForm></CreateGameForm>
        </div>
      </DialogContent>
    </Dialog>
  );
}
