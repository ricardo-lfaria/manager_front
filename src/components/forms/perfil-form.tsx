"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useController } from "react-hook-form";

const profileSchema = z.object({
  user: z.string().min(3, "Nome do perfil deve ter no mínimo 3 caracteres"),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .refine(
      (value) => /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value),
      "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número"
    ),
  email: z.string().email("Email inválido"),
  team: z.string().optional(),
  foto: z.string().optional(),
});

export type ProfileData = z.infer<typeof profileSchema>;

export default function PerfilForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileData) => {
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formDataToSend.append(key, value as string | Blob);
    }
    console.log(formDataToSend);
    const fileInput = document.getElementById(
      "foto"
    ) as HTMLInputElement | null;
    if (fileInput?.files && fileInput.files.length > 0) {
      formDataToSend.append("foto", fileInput.files[0]);
    }
    for (const [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }
  };
  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      console.log("Selected File:", selectedFile);
    }
  };
  const { field } = useController({
    name: "foto",
    control,
    defaultValue: "", 
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        <div className="w-full lg:w-1/2 flex flex-col gap-1">
          <label className="" htmlFor="user">
            Nome do Perfil
          </label>
          <Input type="text" id="user" {...register("user")} />
          {errors.user && <span>{errors.user.message}</span>}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-1">
          <label className="" htmlFor="email">
            Email
          </label>
          <Input type="text" id="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-1">
          <label className="" htmlFor="team">
            Time{" "}
          </label>
          <Input type="text" id="team" {...register("team")} />
          {errors.team && <span>{errors.team.message}</span>}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-1">
          <label className="" htmlFor="password">
            Senha
          </label>
          <div className="flex gap-1">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: true })}
            />
            <Button
              type="button"
              className="bg-transparent hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye className="text-neutral-600" />
              ) : (
                <EyeOff className="text-neutral-600" />
              )}
            </Button>
          </div>
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-1">
          <label className="" htmlFor="foto">
            Foto
          </label>
          <div className="relative">
            <Input
              type="file"
              id="foto"
              accept="image/*"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                handleFotoChange(e);
              }}
              className="pr-12 file:hidden"
              hidden
            />
            <Button
              type="button"
              onClick={() => {
                document.getElementById("foto")?.click();
              }}
              className="absolute top-2 right-2 text-xs h-6 py-1 px-6 rounded-md bg-blue-800 text-white"
            >
              Upload
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between my-4">
        <Button
          variant="outline"
          type="button"
          className="bg-transparent font-semibold p-4 max-w-[240px] h-12 text-neutral-600  border-neutral-600 rounded-lg text-center w-1/4"
        >
          Voltar
        </Button>
        <Button
          type="submit"
          className="bg-blue-800 font-semibold p-4 max-w-[240px] h-12 text-white rounded-lg text-center w-1/4"
        >
          Salvar
        </Button>
      </div>
    </form>
  );
}
