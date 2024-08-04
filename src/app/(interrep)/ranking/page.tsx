import { UserCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { User, columns } from "./table/collumns";
import { DataTable } from "./table/date-table";

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

export default async function RankingPage() {
  const users = await getUsers();

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <p className="text-2xl font-bold self-start">Ranking</p>
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
        <div className="flex gap-4">
          <p className="text-lg font-bold text-blue-800">Sua Colocação:</p>
          <p className="text-lg font-semibold">{users[4].position}</p>
        </div>
      </div>

      <DataTable columns={columns} data={users} />
    </div>
  );
}
