import PerfilForm from "@/components/forms/perfil-form";
import { UserPerfil } from "@/types/user-perfil";

async function getLoggedUserinformation(
  prefilId: string
): Promise<UserPerfil | null> {
  try {
    const res = await fetch(
      `https://667e1d1d297972455f6723ea.mockapi.io/auth/${prefilId}`,
      {
        cache: "no-cache",
        //   next: { revalidate: 259200 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch perfil data. Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching perfil:", error);

    return null;
  }
}

export default async function PerfilPage() {
  const perfil = await getLoggedUserinformation("1");
  const perfilFormData = {
    name: perfil?.name,
    email: perfil?.email,
    password: perfil?.password,
    team: perfil?.team,
    avatar: perfil?.avatar,
  };
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <p className="text-2xl font-bold self-start">Configurações</p>

      <PerfilForm {...perfilFormData}></PerfilForm>
    </div>
  );
}
