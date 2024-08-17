import { GameCard } from "@/components/cards/game-card";
import { TeamCard } from "@/components/cards/team-card";
import { Metadata } from "next";
import Link from "next/link";
import { DialogMarket } from "@/components/dialogs/market-dialog";
import { Game } from "@/types/games";
import { Team } from "@/types/teams";
import { Market } from "@/types/market";

async function getGames(): Promise<Game[]> {
  const res = await fetch(
    "https://667e1d1d297972455f6723ea.mockapi.io/tournament/1/game",
    {
      // cache: "no-cache"
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

async function getSerieATeam(): Promise<Team[]> {
  const res = await fetch(
    "https://667e1d1d297972455f6723ea.mockapi.io/tournament/1/teams",
    {
      // cache: "no-cache"
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

async function getSerieBTeam(): Promise<Team[]> {
  const res = await fetch(
    "https://667e1d1d297972455f6723ea.mockapi.io/tournament/2/teams",
    {
      // cache: "no-cache"
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

async function getFemaleTeam(): Promise<Team[]> {
  const res = await fetch(
    "https://667e1d1d297972455f6723ea.mockapi.io/tournament/3/teams",
    {
      // cache: "no-cache"
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export const metadata: Metadata = {
  title: "admin-home",
};

async function getMarket(marketId: string): Promise<Market | null> {
  try {
    const res = await fetch(
      `https://667e1d1d297972455f6723ea.mockapi.io/market/${marketId}`,
      {
        next: { revalidate: 259200 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch team data. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching team:", error);

    return null;
  }
}

function CheckMarket(market: Market | null, today: Date) {
  if (!market || !market.openAt || !market.closeAt) {
    console.log(`Problem with market data fetching: ${market}`, market);
    return false;
  }
  if (today >= market.openAt && today <= market.closeAt) {
    return true;
  }
  return false;
}

export default async function AdminHome() {
  const games = await getGames();
  const seriesATeam = await getSerieATeam();
  const seriesBTeam = await getSerieBTeam();
  const femaleTeam = await getFemaleTeam();
  const market = await getMarket("1");
  const today: Date = new Date();
  const openMarket = CheckMarket(market, today);

  return (
    <div className="flex flex-col px-4 gap-6 items-center justify-center">
      <h2 className="text-2xl w-full">
        Bem vindo, <strong>Administrador!</strong>
      </h2>
      <div className="bg-white flex  self-start w-full justify-between px-4 py-2 items-center h-fit lg:h-20">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-3">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {openMarket ? (
              <>
                <div className="flex items-center gap-3">
                  <span className="lg:text-xl font-semibold lg:mr-2">
                    Status do mercardo:
                  </span>
                  <div className="h-3 w-3 lg:w-[18px] lg:h-[18px] rounded-full bg-emerald-500 mt-0.5" />
                  <p className="lg:text-xl">Aberto</p>
                </div>
                <div className="flex items-center text-center gap-3">
                  <span className="lg:text-xl font-semibold">Fechamento:</span>
                  <p className="lg:text-xl">24/10</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <span className="lg:text-xl font-semibold lg:mr-2">
                    Status do mercardo:
                  </span>
                  <div className="h-3 w-3 lg:w-[18px] lg:h-[18px] rounded-full bg-rose-700 mt-0.5" />
                  <p className="lg:text-xl">Fechado</p>
                </div>
              </>
            )}
          </div>
          <div
            className={`flex items-center w-full lg:justify-end lg:w-1/3 ${
              !openMarket ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <DialogMarket />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Próximas Partidas</p>
        </div>
        <Link
          href="/manager/admin/games"
          className="underline-offset-2 underline decoration-neutral-950 decoration-1"
        >
          Ver todas partidas
        </Link>
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
        {games.slice(0, 5).map((game) => (
          <GameCard key={game.id} href={`/games/${game.id}`} {...game} />
        ))}
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Times</p>
        </div>
        <Link
          href="/manager/admin/teams"
          className="underline-offset-2 underline decoration-neutral-950 decoration-1"
        >
          Ver todos times
        </Link>
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col lg:flex-row gap-6 w-full xl:w-11/12 justify-start items-start self-start">
          {seriesATeam.slice(0, 5).map((team) => (
            <TeamCard
              key={team.id}
              href={`/manager/admin/teams/${team.id}`}
              {...team}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-6 w-full xl:w-11/12 justify-start items-start self-start">
          {seriesBTeam.slice(0, 5).map((team) => (
            <TeamCard
              key={team.id}
              href={`/manager/admin/teams/${team.id}`}
              {...team}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-6 w-full xl:w-11/12 justify-start items-start self-start">
          {femaleTeam.slice(0, 5).map((team) => (
            <TeamCard
              key={team.id}
              href={`/manager/admin/teams/${team.id}`}
              {...team}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
