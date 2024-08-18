"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/manager/", label: "Home" },
  { href: "/manager/teams", label: "Time" },
  { href: "/manager/ranking", label: "Ranking" },
  { href: "/manager/leagues", label: "Ligas" },
  //   { href: "/manager/teams", label: "Seleção da Rodada" },
  { href: "/manager/perfil", label: "Perfil" },
];
const adminNavigationLinks = [
  { href: "/manager/admin", label: "Home" },
  { href: "/manager/admin/teams", label: "Time" },
  { href: "/manager/admin/campaign", label: "Campanhas" },
  { href: "/manager/admin/games", label: "Jogos" },
];

export function HamburguerNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/manager/admin");

  return (
    <>
      <div className="fixed lg:hidden z-10 w-full transform ">
        <button
          className={`inline-flex shadow-sm border ml-4 bg-white rounded-full items-center justify-center p-3 w-10 h-10 text-sm text-zinc-800 focus:bg-blue-800 focus:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-gray-200 ${
            isOpen ? "transform transition duration-300 ease-in-out" : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="sr-only">Open Main Menu</span>
          <Menu
            className={`fill-current relative right-[1px] bottom-[1px] h-5 w-5 transition duration-300 ease-in-out ${
              isOpen ? "transform rotate-45" : ""
            }`}
            viewBox="0 0 20 20"
          >
            <title>Menu</title>
          </Menu>
        </button>
        <div
          className={`w-full bg-white shadow py-4 transition duration-300 ease-in-out ${
            isOpen ? "fixed right-0" : "hidden"
          }`}
        >
          {(isAdmin ? adminNavigationLinks : navigationLinks).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-1 py-2 hover:bg-slate-100/50"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
