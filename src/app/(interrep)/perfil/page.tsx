import PerfilForm from "@/components/forms/perfil-form";

export default function PerfilPage() {
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <p className="text-2xl font-bold self-start">Configurações</p>

      <PerfilForm></PerfilForm>
    </div>
  );
}
