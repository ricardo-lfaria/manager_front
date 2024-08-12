import { PlayerCard } from "@/components/cards/player-card";
import { Button } from "@/components/ui/button";
import { Player } from "@/types/player";

import { UserCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "teams",
};

async function getTeamPlayers(
  tournament: string,
  team: string,
  position: string
): Promise<Player[]> {
  try {
    const res = await fetch(
      `https://667e1d1d297972455f6723ea.mockapi.io/tournament/${tournament}/teams/${team}/positions/${position}/players`,
      {
        cache: "no-cache",
        //   next: { revalidate: 259200 },
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

export default async function TeamsPage() {
  const playersSerieB = await getTeamPlayers("1", "1", "1");
  const playersSerieA = await getTeamPlayers("2", "2", "2");
  const playersFemale = await getTeamPlayers("1", "1", "1");

  return (
    <div className="flex flex-col gap-6 items-center justify-center lg:pr-0">
      <div className="bg-white flex flex-col lg:flex-row lg:self-start w-full lg:justify-between px-4 py-2 items-center h-fit lg:h-20">
        <Link href="/" className="flex gap-3 items-center">
          <UserCircle
            strokeWidth={2}
            size={36}
            className="w-5 h-5 lg:w-9 lg:h-9"
          />
          <span className="text-lg lg:text-xl font-semibold">
            Time de Ricardo
          </span>
        </Link>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <p className="text-sm lg:text-lg font-bold text-blue-800">
            Pontuação Temporada :
          </p>
          <p className="text-sm lg:text-lg font-semibold">500</p>
          <p className="text-sm lg:text-lg font-bold text-emerald-600">
            Última Pontuação :
          </p>
          <p className="text-sm lg:text-lg font-semibold">200</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 w-full lg:items-center py-1">
        <p className="text-lg lg:text-2xl font-bold">Escalação Série B</p>
        <Button
          asChild
          className="w-full lg:w-1/5 lg:h-14 text-lg mr-6 lg:max-w-[240px]"
        >
          <Link href="/teams/male/serie-b" className="w-full">
            Mudar Escalação
          </Link>
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        {playersSerieB.slice(0, 5).map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 w-full lg:items-center py-1">
        <p className="text-lg lg:text-2xl font-bold">Escalação Série A</p>
        <Button
          asChild
          className="w-full lg:w-1/5 lg:h-14 text-lg mr-6 lg:max-w-[240px]"
        >
          <Link href="/teams/male/serie-a" className="w-full">
            Mudar Escalação
          </Link>
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        {playersSerieA.slice(0, 5).map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 w-full lg:items-center py-1">
        <p className="text-lg lg:text-2xl font-bold">Escalação Feminino</p>
        <Button
          asChild
          className="w-full lg:w-1/5 lg:h-14 text-lg mr-6 lg:max-w-[240px]"
        >
          <Link href="/teams/female" className="w-full">
            Mudar Escalação
          </Link>
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        {playersFemale.slice(5, 10).map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>
    </div>
  );
}
