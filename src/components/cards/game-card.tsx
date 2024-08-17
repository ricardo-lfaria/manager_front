import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface GameCardProps {
  href: string;
  id?: string;
  tournamentId?: string;
  createdAt?: Date;
  firstTeam?: string;
  secondTeam?: string;
  place?: string;
  time?: Date;
  firstTeamLogo?: string;
  secondTeamLogo?: string;
}

export async function GameCard({
  href,
  id,
  tournamentId,
  createdAt,
  firstTeam,
  secondTeam,
  place,
  time,
  firstTeamLogo,
  secondTeamLogo,
}: GameCardProps) {
  return (
    <Link href={href} className="w-full shadow-sm shadow-neutral-100"
    // pointer-events-none"
    >
      <div className="bg-white w-full h-fit gap-2 lg:h-16 flex flex-col lg:flex-row items-center justify-between rounded-md px-6 hover:bg-slate-100/40">
        <div className="flex items-center justify-between gap-9">
          <div className="flex items-center gap-5">
            <Image
              alt="Time-2"
              src={firstTeamLogo || ""}
              width={48}
              height={48}
              quality={100}
              className="rounded-lg lg:w-10 lg:h-10"
            />
            <p className="text-lg hidden lg:flex min-w-32 max-w-32 overflow-hidden truncate">{firstTeam}</p>
          </div>
          <p>X</p>
          <div className="flex items-center gap-6">
            <Image
              alt="Time-2"
              src={secondTeamLogo || ""}
              width={48}
              height={48}
              quality={100}
              className="lg:w-10 lg:h-10 rounded-lg"
            />
            <p className="text-lg hidden lg:flex overflow-hidden truncate min-w-32 max-w-32 ">{secondTeam}</p>
          </div>
        </div>
        <div className="flex w-[45%] gap-2 lg:gap-20">
          <div className="flex gap-2 items-center">
            <Calendar
              color="rgb(163 163 163)"
              className="w-3 h-3 lg:h-5 lg:w-5"
            />
            <p className="text-xs lg:text-lg">{time?.toString().slice(5, 10).replace("-", "/")}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Clock color="rgb(163 163 163)" className="w-3 h-3 lg:h-5 lg:w-5" />
            <p className="text-xs lg:text-lg">{time?.toString().slice(11, 16)}</p>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin
              fill="rgb(163 163 163)"
              color="rgb(163 163 163)"
              className="h-5 w-5"
            />
            <p className="text-xs lg:text-lg">{place}r</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
