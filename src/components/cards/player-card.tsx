import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Player } from "@/types/player";

interface PlayerCardProps extends Player {}

export function PlayerCard({  id,
    teamId,
    createdAt,
    name,
    avatar,
    goals,
    avarage,
    price,
    last,
    status,
    kicks,}:PlayerCardProps) {
  return (
    <Card className="h-fit rounded-xl">
      <CardHeader className="shadow-sm my-4 border-b">
        <CardTitle className="text-lg max-w-32 overflow-hidden truncate">{name}</CardTitle>
        <CardDescription>(Linha)</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col py-2 gap-4">
        <Image
          src={avatar ||"/ronaldo.png"}
          width={400}
          height={400}
          alt="foto do jogador"
          className="rounded-2xl w-10/12 h-10/12 self-center"
        />
        <div className="flex gap-2">
          <TrendingUp color="rgb(34 197 94)" />
          <p className="font-bold text-lg">Média</p>
          <p className="text-lg">{avarage}</p>
        </div>
        <div className="flex gap-2">
          <TrendingUp color="rgb(34 197 94)" />
          <p className="font-bold text-lg">Gol</p>
          <p className="text-lg">{goals}</p>
        </div>
        <div className="flex gap-2">
          <TrendingDown color="red" />
          <p className="font-bold text-lg">Chutes</p>
          <p className="text-lg">{kicks}</p>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
