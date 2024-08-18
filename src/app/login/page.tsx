import LoginForm from "@/components/forms/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default async function LoginPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold">Login</h1>
      <LoginForm />
    </div>
  );
}
