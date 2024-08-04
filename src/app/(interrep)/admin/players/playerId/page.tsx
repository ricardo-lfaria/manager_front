import { Metadata } from "next";
import { User, columns } from "./components/table/collumns";
import { DataTable } from "./components/table/date-table";
import DialogEditPlayer from "@/components/dialogs/edit-player-dialog";
import Image from "next/image";

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://667e1d1d297972455f6723ea.mockapi.io/teams", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export const metadata: Metadata = {
  title: "admin - players",
};

export default async function AdminPlayersPage() {
  const users = await getUsers();
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="bg-white flex flex-col lg:flex-row gap-3 self-start w-full justify-between px-4 py-2 items-center h-fit lg:h-20">
        <div className="w-full flex  gap-4 items-center">
          <Image
            src="/ronaldo.png"
            width={75}
            height={75}
            alt="foto do jogador"
            className="rounded-full h-12 w-12"
          />

          <div className="flex gap-1">
            <span className="text-lg lg:text-xl font-semibold">Ronaldo</span>
            <span className="hidden lg:flex lg:text-lg">{"( República Demorô - Linha )"}</span>
          </div>
        </div>

        <DialogEditPlayer></DialogEditPlayer>
      </div>

      <div className="flex self-start w-full justify-between px-4 py-2 items-center h-20">
        <div className="w-full flex gap-4 items-center">
          <span className="text-xl font-semibold">Últimos Jogos</span>
        </div>
      </div>

      <DataTable columns={columns} data={users} />
    </div>
  );
}
