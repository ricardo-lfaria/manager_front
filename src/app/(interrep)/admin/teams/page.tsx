import { TeamCard } from "@/components/cards/team-card";
import { Metadata } from "next";
import { Team } from "@/types/teams";

async function getSerieATeam(): Promise<Team[]> {
    const res = await fetch(
      "https://667e1d1d297972455f6723ea.mockapi.io/tournament/1/teams",
      {
        // cache: "no-cache"
        next: { revalidate: 10 },
      }
    );
    const data = await res.json();
    return data;
  }
  
  async function getSerieBTeam(): Promise<Team[]> {
    const res = await fetch(
      "https://667e1d1d297972455f6723ea.mockapi.io/tournament/2/teams",
      {
        // cache: "no-cache"
        next: { revalidate: 10 },
      }
    );
    const data = await res.json();
    return data;
  }
  
  async function getFemaleTeam(): Promise<Team[]> {
    const res = await fetch(
      "https://667e1d1d297972455f6723ea.mockapi.io/tournament/3/teams",
      {
        // cache: "no-cache"
        next: { revalidate: 10 },
      }
    );
    const data = await res.json();
    return data;
  }

export const metadata: Metadata = {
  title: "admin - teams",
};

export default async function AdminTeamsPage() {
    
  const seriesATeam = await getSerieATeam();
  const seriesBTeam = await getSerieBTeam();
  const femaleTeam = await getFemaleTeam();
  return (
    <div className="flex flex-col gap-6 justify-center">
      <div>
        <h1 className="font-semibold text-xl">Times</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2">
      {seriesATeam.map((team) => (
            <TeamCard key={team.id} href={`teams/${team.id}`} {...team} />
          ))}
      
        {seriesBTeam.map((team) => (
            <TeamCard key={team.id} href={`teams/${team.id}`} {...team} />
          ))}
        
         {femaleTeam.map((team) => (
            <TeamCard key={team.id} href={`/teams/${team.id}`} {...team} />
          ))}
        
      </div>
    </div>
  );
}
