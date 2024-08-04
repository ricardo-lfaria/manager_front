import { UserCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { User, columns } from "./table/collumns";
import { DataTable } from "./table/date-table";
import { Button } from "@/components/ui/button";
import { GameCard } from "@/components/cards/game-card";

export const metadata: Metadata = {
  title: "ranking",
};

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://667e1d1d297972455f6723ea.mockapi.io/teams", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function AdminGamePage() {
  const users = await getUsers();

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className=" flex self-start w-full justify-between px-4 py-2 items-center h-20">
        <span className="text-2xl font-bold">Partida</span>
        <Button className="p-4 w-1/2 max-w-[240px] h-12 rounded-lg">
          Importar Dados
        </Button>
      </div>
      <GameCard href=""></GameCard>
      <span className="text-2xl font-bold self-start">República 1</span>
      <DataTable columns={columns} data={users} />
      
      <span className="text-2xl font-bold self-start">República 2</span>
      <DataTable columns={columns} data={users} />
    </div>
  );
}
