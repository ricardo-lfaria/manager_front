import { Nav } from "@/components/navigation/nav";
import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" flex flex-row">
      <Nav />
      <div className="flex flex-col w-full px-4 md:py-16 md:px-9 lg:px-12 gap-6 mt-20 md:mt-1 ">
        {children}
      </div>
    </div>
  );
}
