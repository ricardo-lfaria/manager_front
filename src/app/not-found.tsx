import { Logo } from "@/components/logo";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col m-auto space-y-5 text-center">
        <Logo />
        <h1 className="text-3xl font-bold ">Não Encontrado</h1>
        <p>Parece que a página não existe</p>
        <Link href="/manager/" className="text-blue-800">
          Volte para página inicial
        </Link>
      </div>
    </div>
  );
}
