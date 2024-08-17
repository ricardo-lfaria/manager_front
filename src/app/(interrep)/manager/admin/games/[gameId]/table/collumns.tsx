"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Player } from "@/types/player";

export const columns: ColumnDef<Player>[] = [
  {
    accessorKey: "position",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-neutral-950 text-lg items-center font-semibold"
        >
          Posição
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-neutral-950 text-lg items-center font-semibold"
        >
          Nome {/* Changed from 'Time' to 'Nome' */}
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
  },

  {
    accessorKey: "avarage", // Corrected the typo
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-neutral-950 text-lg items-center font-semibold"
        >
          Média {/* Changed from 'Última Pontuação' to 'Média' */}
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-neutral-950 text-lg items-center"
        >
          Preço {/* Changed from 'Pontuação Total' to 'Preço' */}
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
  },
  {
    accessorKey: "last",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-neutral-950 text-lg items-center"
        >
          {/* Changed from 'Pontuação Total' to 'Last' (adjust as needed) */}
          Last
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
  },
];
