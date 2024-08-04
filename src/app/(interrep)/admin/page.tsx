import { GameCard } from "@/components/cards/game-card";
import { TeamCard } from "@/components/cards/team-card";
import { Metadata } from "next";
import Link from "next/link";
import { DialogMarket } from "@/components/dialogs/market-dialog";

export const metadata: Metadata = {
  title: "admin-home",
};

export default async function AdminHome() {
  const mercadoAberto = true;
  return (
    <div className="flex flex-col px-4 gap-6 items-center justify-center">
      <h2 className="text-2xl w-full">
        Bem vindo, <strong>Administrador!</strong>
      </h2>
      <div className="bg-white flex  self-start w-full justify-between px-4 py-2 items-center h-fit lg:h-20">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-3">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {mercadoAberto ? (
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
                  <p className="lg:text-xl">Aberto</p>
                </div>
              </>
            )}
          </div>
          <div className="flex  items-center w-full lg:justify-end lg:w-1/3">
            <DialogMarket />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Próximas Partidas</p>
        </div>
        <Link
          href="/games"
          className="underline-offset-2 underline decoration-neutral-950 decoration-1"
        >
          Ver todas partidas
        </Link>
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
        <GameCard href="/admin/games/gamesId"/>
        <GameCard href="/admin/games/gamesId"/>
        <GameCard href="/admin/games/gamesId"/>
        <GameCard href="/admin/games/gamesId"/>
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Times</p>
        </div>
        <Link
          href="/admin/teams"
          className="underline-offset-2 underline decoration-neutral-950 decoration-1"
        >
          Ver todos times
        </Link>
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}
