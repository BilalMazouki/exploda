import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { z } from "zod";

// ✅ Zod schema (strict, no extra fields)
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 🛡 Validate request body with Zod
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      const errors = parsed.error.issues.map((e) => e.message);
      return NextResponse.json(
        { message: "Validation failed", errors },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;
    const supabase = await createClient();

    // 🔐 Try to log in
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // ✅ Grab tokens safely
    const accessToken = data.session?.access_token;
    const refreshToken = data.session?.refresh_token;
    if (!accessToken || !refreshToken) {
      return NextResponse.json(
        { error: "No session returned" },
        { status: 500 }
      );
    }

    // 🍪 Secure cookies
    const accessCookie = serialize("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60, // 1h
      path: "/",
    });

    const refreshCookie = serialize("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    const res = NextResponse.json({ message: "Login successful" });
    res.headers.append("Set-Cookie", accessCookie);
    res.headers.append("Set-Cookie", refreshCookie);
    res.headers.set("X-Content-Type-Options", "nosniff");
    res.headers.set("X-Frame-Options", "DENY");
    res.headers.set("X-XSS-Protection", "1; mode=block");
    return res;
  } catch (err: any) {
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
