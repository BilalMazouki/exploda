// app/api/auth/logout/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { clearAuthCookies } from "@/lib/authCookies"; // Your existing function

// Security headers function
function securityHeaders(res: NextResponse) {
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "no-referrer");
  return res;
}

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

    // USE YOUR EXISTING CLEARAUTHCOOKIES FUNCTION
    const { accessCookie, refreshCookie } = clearAuthCookies();
    
    const res = NextResponse.json(
      { 
        success: true,
        message: "You've been successfully signed out. See you again soon!" 
      },
      { status: 200 }
    );
    
    res.headers.append("Set-Cookie", accessCookie);
    res.headers.append("Set-Cookie", refreshCookie);

    return securityHeaders(res);
    
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