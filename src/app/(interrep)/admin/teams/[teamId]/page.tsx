import { Metadata } from "next";
import { columns } from "./table/collumns";
import { DataTable } from "./table/date-table";

import DialogEditTeam from "@/components/dialogs/edit-team-dialog";
import Image from "next/image";
import DialogCreatePlayer from "@/components/dialogs/create-player-dialog";
import { GameCard } from "@/components/cards/game-card";
import { Game } from "@/types/games";
import { Team } from "@/types/teams";
import { Player } from "@/types/player";
import { Suspense } from "react";
import { TeamProvider } from "@/context/team-context";

interface TeamProps {
  params: {
    teamId: string;
  };
}

async function getTeam(teamId: string): Promise<Team | null> { 
    try {
      const res = await fetch(
        `https://667e1d1d297972455f6723ea.mockapi.io/tournament/1/teams/${teamId}`,
        {
          next: { revalidate: 259200 },
        }
      );
  
      if (!res.ok) { // Check if the response is successful
        throw new Error(`Failed to fetch team data. Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching team:', error);
      return null; 
    }
  }
  
  async function getPlayers(team: string, tournamentId: string): Promise<Player[]> {
    try {
      const res = await fetch(`https://667e1d1d297972455f6723ea.mockapi.io/tournament/${tournamentId}/teams/${team}/positions/1/players`, {
        cache: 'no-cache',
        next: { revalidate: 259200 },
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch players data. Status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching players:', error);
      return [];
    }
  }
  
  async function getGames(): Promise<Game[]> {
    try {
      const res = await fetch(
        "https://667e1d1d297972455f6723ea.mockapi.io/tournament/1/game",
        {
          next: { revalidate: 10800 },
        }
      );
  
      if (!res.ok) {
        throw new Error(`Failed to fetch games data. Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching games:', error);
      return [];
    }
  }
  

export const metadata: Metadata = {
  title: "admin - team",
};

export default async function AdminTeamPage({ params }: TeamProps) {
  const team = await getTeam(params.teamId);
  console.log(team);
  let players:Player[] = []
  if (team) {
       players = await getPlayers(team.id, team.tournamentId);

  }
  const games = await getGames();
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="bg-white flex flex-col lg:flex-row gap-3 self-start w-full justify-between px-4 py-2 items-center h-fit lg:h-20">
        <div className="w-full flex gap-4 items-center">
          <Image
            src={team?.avatar || '' }
            width={60}
            height={60}
            alt="foto do jogador"
            className="rounded-full"
          />
          <span className="text-lg lg:text-xl font-semibold w-full">
            {team?.name}
          </span>
        </div>
        <Suspense fallback={<p>lendo...</p>}>
          <TeamProvider teamData={team}>
            <DialogEditTeam></DialogEditTeam>
          </TeamProvider>
        </Suspense>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 self-start w-full justify-between px-4 py-2 items-center h-fit lg:h-20">
        <div className="w-full flex gap-4 items-center">
          <span className="text-xl font-semibold">Jogadores</span>
        </div>

        <DialogCreatePlayer></DialogCreatePlayer>
      </div>
      <DataTable columns={columns} data={players} />

      <div className="w-full">
        <div className="flex self-start w-full justify-between px-4 py-2 items-center h-20">
          <div className="w-full flex gap-4 items-center">
            <span className="text-xl font-semibold">Jogos</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
          {games.slice(5, 8).map((game) => (
            <GameCard key={game.id} href={`admin/games/${game.id}`} {...game} />
          ))}
        </div>
      </div>
    </div>
  );
}
