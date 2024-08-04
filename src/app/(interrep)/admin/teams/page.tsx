import { TeamCard } from "@/components/cards/team-card";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "admin - teams",
};

export default async function AdminTeamsPage() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <div>
        <h1 className="font-semibold text-xl">Times</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
      </div>
    </div>
  );
}
