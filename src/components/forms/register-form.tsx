"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";

const registerSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .refine(
      (value) => /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value),
      "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número"
    ),
  confirmPassword: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .refine(
      (value) => /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value),
      "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número"
    ),
});

export type RegisterData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full lg:w-3/4 max-w-[448px] gap-6"
    >
      <div className="flex flex-col gap-8">
        <div className="flex items-center bg-white  border rounded-md h-14 px-4">
          <Mail className="w-5 h-5 text-zinc-500" />
          <Input
            {...register("email")}
            type="text"
            placeholder="Email"
            id="email"
            className=" border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          />
          {errors.email && (
            <span className="text-red-600 text-xs font-medium">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center bg-white  border rounded-md h-14 px-4">
            <Lock className="w-5 h-5 text-zinc-500" />
            <Input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              id="password"
              placeholder="Senha"
              className=" border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
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
          {errors.password && (
            <span className="text-red-600 text-xs font-medium">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center bg-white border rounded-md h-14 px-4">
            <Lock className="w-5 h-5 text-zinc-500" />
            <Input
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword", { required: true })}
              id="confirmPassword"
              placeholder="Confirmar Senha"
              className=" border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
            />
            <Button
              type="button"
              className="bg-transparent hover:bg-transparent"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <Eye className="text-neutral-600" />
              ) : (
                <EyeOff className="text-neutral-600" />
              )}
            </Button>
          </div>
          {errors.password && (
            <span className="text-red-600 text-xs font-medium">
              {errors.password.message}
            </span>
          )}
        </div>

        <Button className="h-14" type="submit">
          Criar Conta
        </Button>
        <div className="flex items-center gap-1.5 justify-center">
          <p className="font-medium">Já tem uma conta?</p>
          <Link
            href="/login"
            className="font-bold text-blue-800 hover:text-blue-800/8hover:decoration-blue-800/80"
          >
            Entre aqui
          </Link>
        </div>
      </div>
    </form>
  );
}
