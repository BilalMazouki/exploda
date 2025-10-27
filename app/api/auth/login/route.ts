// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { authCookies } from "@/lib/authCookies";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }).transform(s => s.toLowerCase().trim()),
  password: z.string().min(1, { message: "Password is required" }),
});

function securityHeaders(res: NextResponse) {
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set("Permissions-Policy", "geolocation=(), microphone=()");
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  return res;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.issues.map(i => i.message);
      return NextResponse.json({ 
        success: false,
        message: "Please check your information", 
        errors 
      }, { status: 400 });
    }

    const { email, password } = parsed.data;
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      // User-friendly error messages for common cases
      let userMessage = "Unable to sign in. Please try again.";
      
      switch (error.message) {
        case "Invalid login credentials":
          userMessage = "The email or password you entered is incorrect. Please try again.";
          break;
        case "Email not confirmed":
          userMessage = "Please verify your email address before signing in. Check your inbox for the verification link.";
          break;
        case "Too many requests":
          userMessage = "Too many login attempts. Please wait a few minutes and try again.";
          break;
        default:
          if (error.message.includes("network") || error.message.includes("connection")) {
            userMessage = "Network connection issue. Please check your internet and try again.";
          }
      }

      return NextResponse.json({ 
        success: false,
        message: userMessage 
      }, { status: 401 });
    }

    // Check if email is verified
    if (!data.user?.email_confirmed_at) {
      return NextResponse.json({ 
        success: false,
        message: "Please verify your email address before signing in. We've sent a verification link to your email.",
        needsVerification: true
      }, { status: 403 });
    }

    const accessToken = data.session?.access_token;
    const refreshToken = data.session?.refresh_token;

    if (!accessToken || !refreshToken) {
      return NextResponse.json({ 
        success: false,
        message: "We encountered an issue creating your session. Please try signing in again." 
      }, { status: 401 });
    }

    const { accessCookie, refreshCookie } = authCookies(accessToken, refreshToken);
    const res = NextResponse.json({ 
      success: true,
      message: "Welcome back! You've been successfully signed in." 
    }, { status: 200 });
    
    res.headers.append("Set-Cookie", accessCookie);
    res.headers.append("Set-Cookie", refreshCookie);

    return securityHeaders(res);

  } catch (err: any) {
    console.error("Login error:", err);
    
    let userMessage = "We're experiencing technical difficulties. Please try again in a few moments.";
    
    if (err.message?.includes("JSON")) {
      userMessage = "Invalid request format. Please try refreshing the page.";
    }

    return NextResponse.json({ 
      success: false,
      message: userMessage 
    }, { status: 500 });
  }
}