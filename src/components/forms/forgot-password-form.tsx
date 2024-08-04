"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Mail } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z.string().email("Email inválido"),
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordData) => {
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

        <Button className="h-14" type="submit">
          Enviar redefinição de senha
        </Button>
        <div className="flex items-center gap-1.5 justify-center">
          <p className="font-medium">Novo por aqui?</p>
          <Link
            href="/login/register"
            className="font-bold text-blue-800 hover:text-blue-800/8hover:decoration-blue-800/80"
          >
            Registre-se
          </Link>
        </div>
      </div>
    </form>
  );
}
