import { createClient } from "@/utils/supabase/server";

export async function verifyUser(requiredRole?: string) {
  const supabase = await createClient(); // server client

  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return { user: null, response: { success: false, message: "Not authenticated" } };
  }

  // role check
  if (requiredRole) {
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("uuid", user.id)
      .single();

    if (profileError || !profile || profile.role !== requiredRole) {
      return { user: null, response: { success: false, message: "Access denied" } };
    }
  }

  return { user, supabase };
}
