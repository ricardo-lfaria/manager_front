import { Metadata } from "next";
import { columns } from "./table/collumns";
import { DataTable } from "./table/date-table";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/cards/game-card";
import { Game } from "@/types/games";
import { Player } from "@/types/player";

export const metadata: Metadata = {
  title: "Game",
};

interface GameProps {
  params: {
    gameId: string;
  };
}

async function getGame(gameId: string): Promise<Game | null> {
  try {
    const res = await fetch(
      `https://667e1d1d297972455f6723ea.mockapi.io/tournament/1/game/${gameId}`,
      {
        cache: "no-cache",
        // next: { revalidate: 10800 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch games data. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return null;
  }
}

async function getPlayers(
  team: string,
  tournamentId: string,
  position: string
): Promise<Player[]> {
  try {
    const res = await fetch(
      `https://667e1d1d297972455f6723ea.mockapi.io/tournament/${tournamentId}/teams/${team}/positions/${position}/players`,
      {
        cache: "no-cache",
        // next: { revalidate: 2 },
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
export default async function AdminGamePage({ params }: GameProps) {
  const game = await getGame(params.gameId);
  const firstTeamPlayers = await getPlayers("1", "1", "1");
  const secondTeamPlayers = await getPlayers("2", "2", "2");

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className=" flex self-start w-full justify-between px-4 py-2 items-center h-20">
        <span className="text-2xl font-bold">Partida</span>
        <Button className="p-4 w-1/2 max-w-[240px] h-12 rounded-lg">
          Importar Dados
        </Button>
      </div>
      <GameCard href="" {...game}></GameCard>
      <span className="text-2xl font-bold self-start">República 1</span>
      <DataTable columns={columns} data={firstTeamPlayers} />

      <span className="text-2xl font-bold self-start">República 2</span>
      <DataTable columns={columns} data={secondTeamPlayers} />
    </div>
  );
}
