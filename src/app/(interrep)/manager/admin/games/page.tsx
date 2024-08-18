import { Metadata } from "next";
import { GameCard } from "@/components/cards/game-card";
import Link from "next/link";
import DialogCreateGame from "@/components/dialogs/create-game-dialog";
import { Game } from "@/types/games";

export const metadata: Metadata = {
  title: "Games",
};

async function getSeriesAGames(): Promise<Game[]> {
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

async function getSeriesBGames(): Promise<Game[]> {
  const res = await fetch(
    "https://667e1d1d297972455f6723ea.mockapi.io/tournament/2/game",
    {
      // cache: "no-cache"
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

async function getFemaleGames(): Promise<Game[]> {
  const res = await fetch(
    "https://667e1d1d297972455f6723ea.mockapi.io/tournament/3/game",
    {
      // cache: "no-cache"
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function AdminGamesPage() {
  const seriesAGames = await getSeriesAGames();
  const seriesBGames = await getSeriesBGames();
  const femaleGames = await getFemaleGames();

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-semibold text-xl">Jogos</h1>
        <DialogCreateGame></DialogCreateGame>
      </div>

      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Últimas</p>
        </div>
        <Link
          href="/manager/admin/games"
          className="underline-offset-2 underline decoration-neutral-950 decoration-1"
        >
          Ver Todos
        </Link>
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
        {seriesAGames.slice(0, 3).map((game) => (
          <GameCard key={game.id} href={`/manager/admin/games/${game.id}`} {...game} />
        ))}
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Agendadas</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
        {seriesBGames.slice(0, 3).map((game) => (
          <GameCard key={game.id} href={`/manager/admin/games/${game.id}`} {...game} />
        ))}
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Histórico</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
        {femaleGames.slice(0, 3).map((game) => (
          <GameCard key={game.id} href={`/manager/admin/games/${game.id}`} {...game} />
        ))}
      </div>
    </div>
  );
}
