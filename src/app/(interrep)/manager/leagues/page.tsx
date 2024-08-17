import { Metadata } from "next";
import { User, columns } from "./components/table/collumns";
import { DataTable } from "./components/table/date-table";
import { DialogCreateLeague } from "@/components/dialogs/create-league-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "league",
};

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://667e1d1d297972455f6723ea.mockapi.io/teams", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function LeaguePage() {
  const users = await getUsers();
  const hasLeague = true;
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <p className="text-2xl font-bold self-start">Ligas</p>
      <div className="bg-white flex self-start w-full justify-between px-4 py-2 items-center h-20">
        {hasLeague ? (
          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <span className="text-lg lg:text-xl font-semibold">
              Liga sjdiasj
            </span>
            <div className="flex gap-4 lg:items-center lg:justify-end w-1/3">
              <div className="flex gap-1 items-center">
                <p className="text-lg font-bold">Jogadores:</p>
                <p className=" text-lg">45</p>
              </div>
              <Button
                className="p-4 lg:w-1/2 max-w-[240px] lg:h-12 rounded-lg"
                asChild
              >
                <Link href="/manager/leagues/leagueId">Visualizar Liga</Link>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <span className="text-lg lg:text-xl font-semibold">
              Você ainda não criou uma liga!
            </span>
            <DialogCreateLeague></DialogCreateLeague>
          </>
        )}
      </div>

      <DataTable columns={columns} data={users} />
    </div>
  );
}
