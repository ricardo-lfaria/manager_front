import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DataTable } from "../../app/(interrep)/teams/(tournament)/components/table/date-table";
import {
  User,
  columns,
} from "../../app/(interrep)/teams/(tournament)/components/table/collumns";

async function getPlayers(): Promise<User[]> {
  const res = await fetch("https://667e1d1d297972455f6723ea.mockapi.io/teams", {
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
}

export async function Dialogtable() {
  const players = await getPlayers();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="border-blue-800 text-blue-800 rounded-lg border font-semibold p-3 w-[100px]"
          variant="outline"
        >
          Escalar
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col  justify-center items-center">
        <DialogHeader className="hidden">
          <DialogTitle>Table Dialog</DialogTitle>
          <DialogDescription>Table with all the players</DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <DataTable columns={columns} data={players} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
