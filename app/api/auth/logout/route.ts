// app/api/auth/logout/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const supabase = await createClient();

    // Sign out server-side session
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error("Logout error:", error);
      
      return NextResponse.json(
        { 
          success: false,
          message: "We encountered an issue while signing you out. You may need to clear your browser cookies manually." 
        },
        { status: 400 }
      );
    }

    // Clear cookies with explicit expiration
    const res = NextResponse.json(
      { 
        success: true,
        message: "You've been successfully signed out. See you again soon!" 
      },
      { status: 200 }
    );
    
    res.headers.append(
      "Set-Cookie",
      `access_token=; Path=/; HttpOnly; Secure; SameSite=Lax; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
    );
    res.headers.append(
      "Set-Cookie",
      `refresh_token=; Path=/; HttpOnly; Secure; SameSite=Lax; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
    );

    return res;
    
  } catch (err) {
    console.error("Logout exception:", err);
    
    return NextResponse.json(
      { 
        success: false,
        message: "We're experiencing technical difficulties. You may need to clear your browser cookies or try again later." 
      },
      { status: 500 }
    );
  }
}