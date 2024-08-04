import Image from "next/image";
import { CirclePlus } from "lucide-react";

export function Field() {
  return (
    <div className="max-md:hidden flex flex-col items-center justify-center w-full py-4 max-w-[700px]">
      <div className="relative w-full h-[900px] xl:w-3/4 ">
        <Image
          src="/campo.png"
          quality={100}
          alt="Background"
          fill
          className=""
        />
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
              <CirclePlus className="text-white" />
            </div>
            <span className="mt-2 text-white">Pivô</span>
          </div>
        </div>
        <div className="absolute top-[40%] left-[15%] transform -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
              <CirclePlus className="text-white" />
            </div>
            <span className="mt-2 text-white">Ala Direita</span>
          </div>
        </div>
        <div className="absolute top-[40%] right-[15%] transform -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
              <CirclePlus className="text-white" />
            </div>
            <span className="mt-2 text-white">Ala Esquerda</span>
          </div>
        </div>
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
              <CirclePlus className="text-white" />
            </div>
            <span className="mt-2 text-white">Fixo</span>
          </div>
        </div>
        <div className="absolute top-[87%] left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
              <CirclePlus className="text-white" />
            </div>
            <span className="mt-2 text-white">Goleiro</span>
          </div>
        </div>
      </div>
    </div>
  );
}
