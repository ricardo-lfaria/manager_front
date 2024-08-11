import { GameCard } from "@/components/cards/game-card";
import { PlayerCard } from "@/components/cards/player-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Game } from "@/types/games";
async function getGames(): Promise<Game[]> {
  const res = await fetch(
    "https://667e1d1d297972455f6723ea.mockapi.io/tournament/1/game",
    {
      //   cache: "no-cache",
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
}

export const metadata: Metadata = {
  title: "InterREP Manager | Sua Central do Fantasy Game",
  description:
    "Mergulhe no mundo do fantasy game do InterREP! Escale seu time dos sonhos com os craques do torneio, " +
     "acompanhe as partidas em tempo real e dispute o topo do ranking com seus amigos. Viva a emoção do InterREP como nunca antes!",
  keywords:
    "InterREP, fantasy game, futebol society, São Carlos, USP, UFSCar, IFSP",
};

export default async function Home() {
  const games = await getGames();
  return (
    <div className="flex flex-col px-4 gap-6 items-center justify-center">
      <h2 className="text-2xl w-full">
        Bem vindo, <strong>Usuário!</strong>
      </h2>
      <Carousel
        className="w-8/12 lg:w-11/12"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="lg:h-[300px] max-h-32 lg:max-h-[300px] w-full">
          <CarouselItem className="w-full">
            <Image
              alt="imagem 1 carrosel"
              src="/scenery-sunset-calm-ocean.png"
              width={600}
              height={300}
              className="w-full"
            />
          </CarouselItem>
          <CarouselItem className="">
            <Image
              alt="imagem 1 carrosel"
              src="/scenery-sunset-calm-ocean.png"
              width={600}
              height={300}
              className="w-full"
            />
          </CarouselItem>
          <CarouselItem className="">
            <Image
              alt="imagem 1 carrosel"
              src="/scenery-sunset-calm-ocean.png"
              width={600}
              height={300}
              className="w-full"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-row px-4 w-full gap-2 justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Seu time</p>
          <p className="text-neutral-600 text-base ">
            Veja como estão se saindo seus principais jogadores
          </p>
        </div>
        <Link
          href="/teams"
          className="underline-offset-2 underline decoration-neutral-950 decoration-1"
        >
          Ver time
        </Link>
      </div>
      <div className="flex flex-col w-11/12 lg:flex-row gap-2">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <p className="text-xl font-bold">Jogos</p>
          <p className="text-neutral-600 text-base ">
            Fique por dentro das datas dos próximos jogos da InterRep
          </p>
        </div>
        <Link
          href="/games"
          className="underline-offset-2 underline decoration-neutral-950 decoration-1"
        >
          Ver Todos
        </Link>
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-11/12 justify-start items-start self-start">
        {games.slice(0, 10).map((game) => (
          <GameCard key={game.id} href={`/games/${game.id}`} {...game} />
        ))}
      </div>
    </div>
  );
}
