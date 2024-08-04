"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function HamburguerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed lg:hidden z-10 w-full transform ">
        <button
          className={`inline-flex shadow-sm border ml-4 bg-white rounded-full items-center justify-center p-3 w-10 h-10 text-sm text-zinc-800  focus:bg-blue-800 focus:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-gray-200 ${
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
          <Link
            href="/"
            className="block px-1 py-2 hover:bg-slate-100/50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/teams"
            className="block px-1 py-2 hover:bg-slate-100/50"
            onClick={toggleMenu}
          >
            Time
          </Link>
          <Link
            href="/ranking"
            className="block px-1 py-2 hover:bg-slate-100/50"
            onClick={toggleMenu}
          >
            Ranking
          </Link>
          <Link
            href="/leagues"
            className="block px-1 py-2 hover:bg-slate-100/50"
            onClick={toggleMenu}
          >
            Ligas
          </Link>
          <Link
            href="/teams"
            className="block px-1 py-2 hover:bg-slate-100/50"
            onClick={toggleMenu}
          >
            Seleção da Rodada
          </Link>
          <Link
            href="/teams"
            className="block px-1 py-2 hover:bg-slate-100/50"
            onClick={toggleMenu}
          >
            Pefil
          </Link>
        </div>
      </div>
    </>
  );
}
