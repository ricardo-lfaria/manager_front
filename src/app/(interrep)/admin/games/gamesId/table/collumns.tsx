"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type User = {
  position: string;
  name: string;
  owner: string;
  lastPostion: string;
  points: string;
  avatar: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "position",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-neutral-950 text-lg items-center"
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
          className="text-neutral-950 text-lg items-center "
        >
          Time
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
  },
  {
    accessorKey: "owner",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-neutral-950 text-lg items-center"
        >
          Usuario
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
  },
  {
    accessorKey: "lastPostion",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-neutral-950 text-lg items-center"
        >
          Última Pontuação
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
  },
  {
    accessorKey: "points",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-neutral-950 text-lg items-center"
        >
          Pontuação Total
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
  },
];
