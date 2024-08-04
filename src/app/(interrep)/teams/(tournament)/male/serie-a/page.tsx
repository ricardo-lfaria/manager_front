import { Field } from "@/components/field";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Dialogtable } from "@/components/dialogs/table-players-dialog";
import Link from "next/link";
import { UserCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "teams - serie a",
};

export default async function SerieAPage() {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white flex flex-col lg:flex-row lg:self-start w-full lg:justify-between px-4 py-2 items-center h-fit lg:h-20">
        <Link href="/" className="flex gap-3 items-center">
          <UserCircle
            strokeWidth={2}
            size={36}
            className="w-5 h-5 lg:w-9 lg:h-9"
          />
          <span className="text-lg lg:text-xl font-semibold">
            Time de Ricardo
          </span>
        </Link>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <p className="text-sm lg:text-lg font-bold text-blue-800">
            Pontuação Temporada :
          </p>
          <p className="text-sm lg:text-lg font-semibold">500</p>
          <p className="text-sm lg:text-lg font-bold text-emerald-600">
            Última Pontuação :
          </p>
          <p className="text-sm lg:text-lg font-semibold">200</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <Field></Field>
        <div className="flex flex-col w-full h-[750px] justify-stretch gap-2 md:px-2 self-center font-semibold text-lg py-4 lg:w-[50%] xl:w-[60%]">
          {["Piv", "Ala E", "Ala D", "Fix", "Gol"].map((position) => (
            <div
              key={position}
              className="flex items-center bg-white justify-between p-4 h-20 rounded-lg"
            >
              <span>{position}</span>
              <Dialogtable></Dialogtable>
            </div>
          ))}
          <div className="flex justify-between p-4  bg-white flex-col xl:flex-row">
            <div>
              <span className="text-green-600 font-semibold px-2">Resta:</span>
              <span className="font-semibold">$10000</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold px-2">Preço:</span>
              <span className="font-bold">$00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <Button className="bg-white font-semibold p-4 max-w-[240px] h-12 text-red-600 border border-red-600 rounded-lg text-center lg:w-1/4">
          Vender Todos
        </Button>
        <Button className="p-4 max-w-[240px] h-12  rounded-lg text-center w-1/3 lg:w-1/4">
          Salvar
        </Button>
      </div>
    </div>
  );
}
