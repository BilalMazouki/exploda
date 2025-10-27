// app/auth/layout.tsx
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ModeToggle } from "@/components/ThemeButton";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // If user is logged in, redirect to home
  if (user) {
    redirect("/"); // ✅ server redirect
  }

  // Otherwise, render auth pages
  return <>  {children}</>;
}
