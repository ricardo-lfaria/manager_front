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
  Camera,
  UserCircle,
  BookMarked,
} from "lucide-react";
import { Logo } from "../logo";
import LogoutButton from "../buttons/logout-button";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/manager/", icon: Home, label: "Home" },
  { href: "/manager/teams", icon: UsersRound, label: "Seu Time" },
  { href: "/manager/ranking", icon: BarChartBig, label: "Ranking" },
  { href: "/manager/leagues", icon: Crown, label: "Ligas" },
  //   { href: "/manager/best-players", icon: Star, label: "Seleção da Rodada" },
  //   { href: "/manager/most-used-players", icon: Receipt, label: "Mais Escalados" },
];

const adminNavigationLinks = [
  { href: "/manager/admin", icon: Home, label: "Home" },
  { href: "/manager/admin/teams", icon: UsersRound, label: "Time" },
  { href: "/manager/admin/campaign", icon: Camera, label: "Campanhas" },
  { href: "/manager/admin/games", icon: BookMarked, label: "Jogos" },
];

export function Nav() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/manager/admin");
  return (
    <>
      <div className="lg:hidden py-8 flex border-r border-neutral-100">
        <HamburguerNav />
      </div>

      <div className="hidden lg:flex flex-col  justify-between left-0 w-2/12 px-6 py-8 bg-white border-r border-neutral-100 gap-5">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col w-full items-start">
            <Link href="/manager/">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex md:flex-col items-start gap-4">
            {(isAdmin ? adminNavigationLinks : navigationLinks).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 flex items-center gap-2 hover:underline-offset-4 hover:underline hover:decoration-blue-800 hover:decoration-2"
              >
                <link.icon color="rgb(30,64,175)" strokeWidth={2} size={24} />
                <span className="text-base font-semibold">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link href="/manager/perfil" className="flex gap-3 items-center">
            <UserCircle strokeWidth={2} size={36} />
            <span className="text-xl font-semibold">Perfil</span>
          </Link>
          <Link href="/login">
            <LogoutButton></LogoutButton>
          </Link>
        </div>
      </div>
    </>
  );
}
