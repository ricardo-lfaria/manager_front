"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="interrep manager logo"
      className={cn("h-auto w-auto", className)}
      width={100}
      height={100}
      quality={100}
      {...props}
    />
  );
}
