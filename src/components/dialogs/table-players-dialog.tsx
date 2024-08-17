import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DataTable } from "../../app/(interrep)/manager/teams/(tournament)/components/table/date-table";
import { columns } from "../../app/(interrep)/manager/teams/(tournament)/components/table/collumns";
import { Player } from "@/types/player";

async function getTeamPlayers(
  tournament: string,
  team: string
): Promise<Player[]> {
  try {
    const res = await fetch(
      `https://667e1d1d297972455f6723ea.mockapi.io/tournament/${tournament}/teams/${team}/positions/1/players`,
      {
        cache: "no-cache",
        //   next: { revalidate: 259200 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch players data. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching players:", error);
    return [];
  }
}

export async function Dialogtable() {
  const players = await getTeamPlayers("1", "1");

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
