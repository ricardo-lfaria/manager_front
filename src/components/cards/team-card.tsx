import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function TeamCard() {
  return (
    <Link href="/admin/teams/teamId">
      <Card className="h-fit rounded-xl">
        <CardHeader className="shadow-sm border-b items-start p-2">
          <CardTitle className="text-lg">República Demorô</CardTitle>
          <CardDescription className="hidden">
            Card de república
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-4 gap-4">
          <Image
            src="/demoro.png"
            width={200}
            height={200}
            alt="foto do jogador"
            className="rounded-2xl"
          />
          <div className="flex gap-2">
            <p className="font-bold text-lg">Jogadores</p>
            <p className="text-lg">12</p>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Link>
  );
}
