"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scouts } from "@/types/scouts";

const headerButtonClassName =
  "text-neutral-950 text-lg items-center font-semibold";

export const columns: ColumnDef<Scouts>[] = [
  {
    accessorKey: "ec",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        EC
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "go",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        GO
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "ca",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        CA
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "caz",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        CAZ
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "cv",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        CV
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "rb",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        RB
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "fc",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        FC
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "gc",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        GC
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "fs",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        FS
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "as",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        AS
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "fg",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        FG
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "ft",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        FT
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "pp",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        PP
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "gst",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        GST
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "sg",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        SG
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "ddg",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        DDG
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "dpg",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        DPG
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "gsg",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        GSG
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
  {
    accessorKey: "sgg",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={headerButtonClassName}
      >
        SGG
        <ArrowUpDown className="ml-2 h-5 w-5" />
      </Button>
    ),
  },
];
