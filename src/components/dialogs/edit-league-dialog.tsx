import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditLeagueForm from "../forms/edit-league-form";

export async function DialogEditLeague() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-800 font-semibold p-4 w-1/2 max-w-[240px] h-12 text-white rounded-lg text-center">
          Editar Liga
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col w-4/5 lg:w-1/4 py-6 h-fit justify-start items-center gap-8">
        <DialogHeader className="border-b w-full pb-4">
          <DialogTitle className="px-4">Editar Liga</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full px-4">
          <EditLeagueForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
