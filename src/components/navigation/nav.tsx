"use client";
import Link from "next/link";
import { HamburguerNav } from "./hambuguer-nav";
import {
  Home,
  Star,
  Crown,
  BarChartBig,
  UsersRound,
  Receipt,
  UserCircle,
  LogOut,
} from "lucide-react";
import { Logo } from "../logo";
export function Nav() {
  return (
    <>
      <div className="lg:hidden py-8 flex  border-r border-neutral-100">
        <HamburguerNav></HamburguerNav>
      </div>
      <div className="hidden lg:flex flex-col justify-between left-0 w-2/12 px-6 py-8 bg-white border-r border-neutral-100 gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col w-full items-start ">
            <Link href="/" className="">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex md:flex-col items-start gap-4">
            <Link
              href="/"
              className="px-3 flex items-center gap-2 hover:underline-offset-4 hover:underline hover:  hover:decoration-blue-800 hover:decoration-2"
            >
              <Home color="rgb(30,64,175)" strokeWidth={2} size={24}></Home>
              <span className="text-base font-semibold">Home</span>
            </Link>
            <Link
              href="/teams"
              className="px-3 flex items-center gap-2 hover:underline-offset-4 hover:underline hover:  hover:decoration-blue-800 hover:decoration-2"
            >
              <UsersRound
                color="rgb(30,64,175)"
                strokeWidth={2}
                size={24}
              ></UsersRound>
              <span className="text-base font-semibold">Seu Time</span>
            </Link>
            <Link
              href="/ranking"
              className="px-3 flex items-center gap-2 hover:underline-offset-4 hover:underline hover:  hover:decoration-blue-800 hover:decoration-2"
            >
              <BarChartBig
                color="rgb(30,64,175)"
                strokeWidth={2}
                size={24}
              ></BarChartBig>
              <span className="text-base font-semibold">Ranking</span>
            </Link>

            <Link
              href="/leagues"
              className="px-3 flex items-center gap-2 hover:underline-offset-4 hover:underline hover:  hover:decoration-blue-800 hover:decoration-2"
            >
              <Crown color="rgb(30,64,175)" strokeWidth={2} size={24}></Crown>
              <span className="text-base font-semibold">Ligas</span>
            </Link>
            <Link
              href="/contact"
              className="px-3 flex items-center gap-2 hover:underline-offset-4 hover:underline hover:  hover:decoration-blue-800 hover:decoration-2"
            >
              <Star color="rgb(30,64,175)" strokeWidth={2} size={24}></Star>
              <span className="text-base font-semibold">Seleção da Rodada</span>
            </Link>
            <Link
              href="/contact"
              className="px-3 flex items-center gap-2 hover:underline-offset-4 hover:underline hover:  hover:decoration-blue-800 hover:decoration-2"
            >
              <Receipt
                color="rgb(30,64,175)"
                strokeWidth={2}
                size={24}
              ></Receipt>
              <span className="text-base font-semibold">Mais Escalados</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link href="/perfil" className="flex gap-3 items-center">
            <UserCircle strokeWidth={2} size={36} />
            <span className="text-xl font-semibold">Perfil</span>
          </Link>
          <Link href="/login">
            <LogOut strokeWidth={2} size={36} color="red" />
          </Link>
        </div>
      </div>
    </>
  );
}
