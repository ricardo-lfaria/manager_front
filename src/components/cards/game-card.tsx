import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface GameCardProps {
    href: string
}

export function GameCard({href}: GameCardProps) {
  return (
    <Link href={href} className="w-full shadow-sm shadow-neutral-100">
      <div className="bg-white w-full h-fit gap-2 lg:h-16 flex flex-col lg:flex-row items-center justify-between rounded-md px-6 hover:bg-slate-100/40">
        <div className="flex items-center justify-between gap-9">
          <div className="flex items-center gap-5">
            <Image
              alt="Time-1"
              src="/demoro.png"
              width={48}
              height={48}
              quality={100}
              className="lg:w-10 lg:h-10"
            />
            <p className="text-lg hidden lg:flex">República Demoro</p>
          </div>
          <p>X</p>
          <div className="flex items-center gap-6">
            <Image
              alt="Time-1"
              src="/demoro.png"
              width={48}
              height={48}
              quality={100}
              className="lg:w-10 lg:h-10"
            />
            <p className="text-lg hidden lg:flex">República Demoro</p>
          </div>
        </div>
        <div className="flex gap-2 lg:gap-20">
          <div className="flex gap-2 items-center">
            <Calendar color="rgb(163 163 163)" className="w-3 h-3 lg:h-5 lg:w-5"/>
            <p className="text-xs lg:text-lg">16/05</p>
          </div>
          <div className="flex gap-2 items-center">
            <Clock color="rgb(163 163 163)" className="w-3 h-3 lg:h-5 lg:w-5" />
            <p className="text-xs lg:text-lg">19:00</p>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin fill="rgb(163 163 163)" color="rgb(163 163 163)" className="h-5 w-5"/>
            <p className="text-xs lg:text-lg">Star Soccer</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
