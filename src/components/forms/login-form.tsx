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
import { Checkbox } from "@/components/ui/checkbox";
import router from "next/router";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .refine(
      (value) => /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value),
      "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número"
    ),
});

export type LoginData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    console.log(data);
    setIsLoading(true); // Show loading indicator
    setError(null); // Clear previous errors

    try {
      const res = await fetch("https://667e1d1d297972455f6723ea.mockapi.io/auth/1", { 
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(data),
      });
      console.log(res)

      if (res.ok) {
          const { token } = await res.json();
        
        localStorage.setItem("authToken", token);
        router.push("/"); // Navigate to dashboard or protected area
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Erro desconhecido");
      }
    } catch (error) {
      setError("Erro na conexão com o servidor"); 
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-3/4 max-w-[448px] gap-6"
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
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center space-x-2 ml-1">
            <Checkbox id="terms" className="" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Lembre-se de mim
            </label>
          </div>
          <Link
            href="/login/forgot-password"
            className="font-bold text-sm lg:text-base text-blue-800 underline-offset-[3px] underline decoration-blue-800 hover:decoration-blue-800/80 hover:text-blue-800/8hover:decoration-blue-800/80"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <Button className="h-14" type="submit">
          Entrar
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
