"use client";

import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";
const editPlayerSchema = z.object({
  name: z.string().min(1, "Nome do Time é obrigatório"),
  fraternity: z.number(),
  position: z.number(),
  photo: z.string(),
  active: z.boolean(),
});

type EditPlayerData = z.infer<typeof editPlayerSchema>;

export default function EditPlayerForm() {
  const [photoSelected, setPhotoSelected] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditPlayerData>({
    resolver: zodResolver(editPlayerSchema),
  });

  const onSubmit = (data: EditPlayerData) => {
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formDataToSend.append(key, value as string | Blob);
    }
    console.log(formDataToSend);
    const fileInput = document.getElementById(
      "photo"
    ) as HTMLInputElement | null;
    if (fileInput?.files && fileInput.files.length > 0) {
      formDataToSend.append("photo", fileInput.files[0]);
    }
    for (const [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }
  };
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setPhotoSelected(true);
      console.log("Selected File:", selectedFile);
    }
  };
  const { field } = useController({
    name: "photo",
    control,
    defaultValue: "",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="name" className="self-start">
            Nome
          </label>
          <Input type="text" id="name" {...register("name")} className="mt-1" />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className="w-full flex flex-col gap-1">
          <label htmlFor="fraternity">República</label>
          <Select {...register("fraternity")}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent>
              {[...Array(5)].map((_, i) => (
                <SelectItem key={i} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.fraternity && <span>{errors.fraternity.message}</span>}
        </div>

        <div className="w-full flex flex-col gap-1">
          <label htmlFor="position">Posição:</label>
          <Select {...register("position")}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent>
              {[...Array(5)].map((_, i) => (
                <SelectItem key={i} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.position && <span>{errors.position.message}</span>}
        </div>

        <div className="w-full flex flex-col gap-1">
          <label className="" htmlFor="photo">
            Foto
          </label>
          <div className="relative">
            <Input
              type="file"
              id="photo"
              accept="image/*"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                handlePhotoChange(e);
              }}
              className="pr-12 file:hidden"
              hidden
            />

            <Button
              type="button"
              onClick={() => {
                document.getElementById("photo")?.click();
              }}
              className="absolute top-2 right-2 text-xs h-6 py-1 px-6 rounded-md bg-blue-800 text-white"
            >
              Upload
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="active"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Ativo
          </label>
          <Select {...register("active")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Ativo</SelectItem>
              <SelectItem value="false">Desativo</SelectItem>
            </SelectContent>
          </Select>
          {errors.active && <span>{errors.active.message}</span>}
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
            Salvar Jogador
          </Button>
        </div>
      </DialogClose>
    </form>
  );
}
