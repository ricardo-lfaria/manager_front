import { Metadata } from "next";
import { User, columns } from "./components/table/collumns";
import { DataTable } from "./components/table/date-table";
import DialogEditTeam from "@/components/dialogs/edit-team-dialog";
import Image from "next/image";
import DialogCreatePlayer from "@/components/dialogs/create-player-dialog";
import { GameCard } from "@/components/cards/game-card";

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://667e1d1d297972455f6723ea.mockapi.io/teams", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export const metadata: Metadata = {
  title: "admin - team",
};

export default async function AdminTeamPage() {
  const users = await getUsers();
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="bg-white flex flex-col lg:flex-row gap-3 self-start w-full justify-between px-4 py-2 items-center h-fit lg:h-20">
        <div className="w-full flex gap-4 items-center">
          <Image
            src="/demoro.png"
            width={75}
            height={75}
            alt="foto do jogador"
            className="rounded-2xl"
          />
          <span className="text-lg lg:text-xl font-semibold w-full">
            República Demorô
          </span>
        </div>

        <DialogEditTeam></DialogEditTeam>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 self-start w-full justify-between px-4 py-2 items-center h-fit lg:h-20">
        <div className="w-full flex gap-4 items-center">
          <span className="text-xl font-semibold">Jogadores</span>
        </div>

        <DialogCreatePlayer></DialogCreatePlayer>
      </div>
      <DataTable columns={columns} data={users} />

      <div className="w-full">
        <div className="flex self-start w-full justify-between px-4 py-2 items-center h-20">
          <div className="w-full flex gap-4 items-center">
            <span className="text-xl font-semibold">Jogos</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
          <GameCard href="/admin/games/gamesId"></GameCard>
          <GameCard href="/admin/games/gamesId"></GameCard>
          <GameCard href="/admin/games/gamesId"></GameCard>
          <GameCard href="/admin/games/gamesId"></GameCard>
        </div>
      </div>
    </div>
  );
}
