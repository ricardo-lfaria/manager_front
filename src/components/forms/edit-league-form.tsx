"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const editLeagueSchema = z.object({
  leagueName: z.string().min(1, "Nome da liga é obrigatório"),
  maxPlayers: z.number().min(2, "Máximo de jogadores deve ser pelo menos 2"),
  isPublic: z.boolean().optional(),
});

type EditLeagueData = z.infer<typeof editLeagueSchema>;

export default function EditLeagueForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditLeagueData>({
    resolver: zodResolver(editLeagueSchema),
  });

  const onSubmit = (data: EditLeagueData) => {};

  const handleDelete = () => {
    console.log("Deleting league...");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="leagueName">Nome da Liga:</label>
        <Input
          type="text"
          id="leagueName"
          {...register("leagueName")}
          className="mt-1"
        />
        {errors.leagueName && <span>{errors.leagueName.message}</span>}
      </div>

      <div>
        <label htmlFor="maxPlayers">Máximo de Jogadores:</label>
        <Select {...register("maxPlayers")}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent className="absolute bottom-0">
            {[...Array(15)].map((_, i) => (
              <SelectItem key={i} value={(i + 2).toString()}>
                {i + 2}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.maxPlayers && <span>{errors.maxPlayers.message}</span>}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="isPublic" {...register("isPublic")} />
        <label htmlFor="isPublic">Liga Pública?</label>
      </div>
      <div>
        <span
          className="hover:cursor-pointer text-red-600 font-medium underline underline-offset-[3px]"
          onClick={handleDelete}
        >
          Deletar Liga
        </span>
      </div>

      <div className="flex w-full gap-2 justify-between px-2">
        <Button
          variant="outline"
          type="button"
          className="bg-transparent font-semibold py-4 px-2 lg:px-6 max-w-[240px] h-10 text-neutral-600  border-neutral-600 rounded-lg text-center"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          className="font-semibold py-4 px-2 lg:px-6 max-w-[240px] h-10"
        >
          Salvar Liga
        </Button>
      </div>
    </form>
  );
}
