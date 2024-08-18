import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tournament",
};
export default function TournamentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className=" flex flex-row">
      <div className="flex flex-col w-full md:px-12">{children}</div>
    </div>
  );
}
