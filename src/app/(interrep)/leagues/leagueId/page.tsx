import { Metadata } from "next";

import { User, columns } from "../components/table/collumns";
import { DataTable } from "../components/table/date-table";
import { DialogEditLeague } from "@/components/dialogs/edit-league-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DialogShareLeague } from "@/components/dialogs/share-league-dialog";

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

export default async function OwnLeaguePage() {
  const users = await getUsers();
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col lg:flex-row  gap-2 self-start w-full lg:justify-between px-4 py-2 items-center">
        <p className="lg:text-2xl text-xl font-bold self-start">Liga sjdiasj</p>
        <div className="flex items-center w-full lg:w-1/3 gap-4">
          <DialogShareLeague></DialogShareLeague>
          <DialogEditLeague></DialogEditLeague>
        </div>
      </div>
      <div className="bg-white flex self-start w-full justify-between px-4 py-2 items-center h-20">
        <div className="flex gap-1 items-center">
          <Avatar className="h-16 w-16">
            <AvatarImage src={users[10].avatar} />
            <AvatarFallback>IR</AvatarFallback>
          </Avatar>
          <span className="text-xl font-semibold">{users[4].name}</span>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-blue-800 font-semibold">Posição:</p>
          <p className="">{users[4].lastPostion}</p>
        </div>
      </div>

      <DataTable columns={columns} data={users} />
    </div>
  );
}
