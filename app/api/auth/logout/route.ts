import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

function securityHeaders(res: NextResponse) {
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  return res;
}

export async function POST() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout error:", error);
    const res = NextResponse.json(
      { success: false, message: "Sign-out failed. Try clearing cookies manually." },
      { status: 400 }
    );
    return securityHeaders(res);
  }

  const res = NextResponse.json(
    { success: true, message: "Signed out successfully." },
    { status: 200 }
  );
  return securityHeaders(res);
}
