import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { authCookies } from "@/lib/authCookies";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }).transform(s => s.toLowerCase().trim()),
  password: z.string().min(8, { message: "Invalid password" }),
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
      return NextResponse.json({ message: "Validation failed", errors }, { status: 400 });
    }

    const { email, password } = parsed.data;
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return NextResponse.json({ message: "Error login" }, { status: 401 });
    }

    // check if email is verified
    if (!data.user?.email_confirmed_at) {
      return NextResponse.json({ error: "Please verify your email before logging in." }, { status: 401 });
    }

    const accessToken = data.session?.access_token;
    const refreshToken = data.session?.refresh_token;

    if (!accessToken || !refreshToken) {
      return NextResponse.json({ error: "No session returned" } , { status: 401 });
    }

    const { accessCookie, refreshCookie } = authCookies(accessToken, refreshToken);
    const res = NextResponse.json({ message: "Login successful" }, { status: 200 });
    res.headers.append("Set-Cookie", accessCookie);
    res.headers.append("Set-Cookie", refreshCookie);

    return securityHeaders(res);

  } catch (err: any) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
