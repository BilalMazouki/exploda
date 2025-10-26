import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const supabase = await createClient();

    // Sign out server-side session
    const { error } = await supabase.auth.signOut();
    if (error) {
      return NextResponse.json(
        { message: "Error while signing out" },
        { status: 400 }
      );
    }

    // Clear cookies
    const res = NextResponse.json(
      { message: "Sign-out successful" },
      { status: 200 }
    );
    res.headers.append(
      "Set-Cookie",
      `access_token=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
    );
    res.headers.append(
      "Set-Cookie",
      `refresh_token=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
    );

    return res;
  } catch (err) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
