import { Metadata } from "next";
import { GameCard } from "@/components/cards/game-card";
import Link from "next/link";
import DialogCreateGame from "@/components/dialogs/create-game-dialog";

export const metadata: Metadata = {
  title: "admin - games",
};

export default async function AdminGamesPage() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-semibold text-xl">Campanhas</h1>
        <DialogCreateGame></DialogCreateGame>
      </div>

      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Últimas</p>
        </div>
        <Link
          href="/admin/games"
          className="underline-offset-2 underline decoration-neutral-950 decoration-1"
        >
          Ver Todos
        </Link>
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Agendadas</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Histórico</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
        <GameCard href="/admin/games/gamesId"></GameCard>
      </div>
    </div>
  );
}
