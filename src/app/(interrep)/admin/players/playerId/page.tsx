import { Metadata } from "next";
import { columns } from "./components/table/collumns";
import { DataTable } from "./components/table/date-table";
import DialogEditPlayer from "@/components/dialogs/edit-player-dialog";
import Image from "next/image";
import { PlayerProvider } from "@/context/player-context";
import { Player } from "@/types/player";
import { Scouts } from "@/types/scouts";

async function getPlayer(
  team: string,
  tournamentId: string
): Promise<Player | null> {
  try {
    const res = await fetch(
      `https://667e1d1d297972455f6723ea.mockapi.io/tournament/${tournamentId}/teams/${team}/positions/1/players/1`,
      {
        cache: "no-cache",
        //   next: { revalidate: 1 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch players data. Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching players:", error);
    return null;
  }
}

async function getPlayersScout(
  team: string,
  tournamentId: string
): Promise<Scouts[]> {
  try {
    const res = await fetch(
      `https://667e1d1d297972455f6723ea.mockapi.io/tournament/${tournamentId}/teams/${team}/positions/1/players/1/scouts`,
      {
        cache: "no-cache",
        // next: { revalidate: 259200 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch players data. Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching players:", error);
    return [];
  }
}

export const metadata: Metadata = {
  title: "admin - players",
};

export default async function AdminPlayersPage() {
  const player = await getPlayer("1", "1");
  const scouts = await getPlayersScout("1", "1");
  return (
    <div className="w-full max-w-screen-lg mx-auto overflow-x-hidden">
      <div className="flex flex-col w-screen gap-2 items-center justify-center overflow-x-hidden max-w-full">
        <div className="bg-white flex flex-col w-full lg:flex-row gap-3 self-start justify-between px-4 py-2 items-center h-fit lg:h-20">
          <div className="w-full flex gap-4 items-center overflow-hidden">
            <Image
              src="/ronaldo.png"
              width={75}
              height={75}
              alt="foto do jogador"
              className="rounded-full h-12 w-12  overflow-x-hidden"
            />

            <div className="flex gap-1  overflow-x-hidden">
              <span className="text-lg lg:text-xl font-semibold">Ronaldo</span>
              <span className="hidden lg:flex lg:text-lg">
                {"( República Demorô - Linha )"}
              </span>
            </div>
          </div>
          <PlayerProvider playerData={player}>
            <DialogEditPlayer></DialogEditPlayer>
          </PlayerProvider>
        </div>

        <div className="flex self-start justify-between px-4 py-2 items-center h-20  overflow-x-hidden">
          <div className="w-full flex gap-4 items-center">
            <span className="text-xl font-semibold">Últimos Jogos</span>
          </div>
        </div>
          <DataTable columns={columns} data={scouts} />
      </div>
    </div>
  );
}
