import RegisterForm from "@/components/forms/register-form";

export default async function RegisterPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold">Cadastro</h1>
      <RegisterForm />
    </div>
  );
}
