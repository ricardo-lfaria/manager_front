import { ReactNode } from "react";
import Image from "next/image";
import { Logo } from "@/components/logo";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center lg:justify-normal w-full">
      <Image
        width={720}
        height={1024}
        alt="login image"
        src="/login_image2.png"
        className="hidden lg:flex"
      />

      <div className="px-4 mt-20 lg:mt-0 flex flex-col items-center justify-center w-full lg:w-1/2 gap-12">
        <Logo className="w-[448px] shadow-sm" />
        {children}
      </div>
    </div>
  );
}
