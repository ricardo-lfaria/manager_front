"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { logoutAction } from '@/app/actions/logout-action'; // Adjust the path as needed

export default function LogoutButton() {

  const handleLogout = async () => {
    try {
      await logoutAction();
    } catch (error) {
      console.error("Logout failed:", error); 
    }
  };

  return (
    <Button onClick={handleLogout} className="bg-transparent border-none">
      <LogOut strokeWidth={2} size={36} color="red" />
    </Button>
  );
}