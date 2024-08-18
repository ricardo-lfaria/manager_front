import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import facebookSVG from "../../public/facebook.svg";
import instagramSVG from "../../public/instagram.svg";
export function Footer() {
  return (
    <footer className="bottom-0 pt-3 w-full bg-white border-t border-neutral-100">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center p-2">
        <div className="pl-10 flex  items-start justify-between gap-12 w-full ">
          <div className="flex gap-4">
            <Link href="/manager/" className="stroke-blue-800">
              <Image src={facebookSVG} alt="facebook" />
            </Link>
            <Link href="/manager/" className="">
              <Image src={instagramSVG} alt="instagram" />
            </Link>
            <Link href="/manager/" className="">
              <Globe />
            </Link>
          </div>
        </div>
        <div className="text-xs font-light px-6 py-4 self-end w-full lg:w-3/5">
          <p>
            InterREP Manager Copyright © 2024 Todos os direitos reservados pela
            República Demoro.
          </p>
          <p>Desenvolvido por: Ricardo Faria</p>
        </div>
      </div>
    </footer>
  );
}
