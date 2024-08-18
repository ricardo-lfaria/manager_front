import ForgotPasswordForm from "@/components/forms/forgot-password-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
};

export default async function ForgotPasswordPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold">Esqueceu sua senha?</h1>
      <p>Insira o email cadastrado que enviaremos um link para redefinição.</p>
      <ForgotPasswordForm />
    </div>
  );
}
