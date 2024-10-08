"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";
import Image from "next/image";
import { useTeamContext } from "@/context/team-context";
import DOMPurify from "dompurify";


const editTeamSchema = z.object({
  teamAvatar: z.string().url().optional(), 
  teamName: z
    .string()
    .trim()
    .min(1, "O nome da equipe é obrigatório")
    .max(30, "O nome da equipe deve ter no máximo 30 caracteres")
    .regex(/^[a-zA-Z0-9_-]+$/, "O nome da equipe pode conter apenas letras, números, hífens e underlines")
    .transform((value) => {
      try {
        const sanitizedValue = DOMPurify.sanitize(value);
        if (sanitizedValue !== value) {
          throw new Error("O nome da equipe contém caracteres inválidos.");
        }
        return sanitizedValue;
      } catch (error) {
        throw new Error("Ocorreu um erro ao validar o nome da equipe. Por favor, tente novamente.");
      }
    }),
});

type editTeamData = z.infer<typeof editTeamSchema>;

export default function EditTeamForm() {
  const { teamData } = useTeamContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<editTeamData>({
    resolver: zodResolver(editTeamSchema),
    defaultValues: {
      teamName: teamData?.name || "",
      teamAvatar: teamData?.avatar || "",
    },
  });

  const onSubmit = (data: editTeamData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={teamData?.avatar || "/demoro.png"}
          width={250}
          height={250}
          alt="foto do jogador"
          className="rounded-2xl"
        />
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="teamName" className="self-start">
            Nome da Time:
          </label>
          <Input
            type="text"
            id="teamName"
            {...register("teamName")}
            className="mt-1"
          />
          {errors.teamName && <span>{errors.teamName.message}</span>}
        </div>
      </div>
      <DialogClose className="w-full">
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
            Salvar Time
          </Button>
        </div>
      </DialogClose>
    </form>
  );
}
