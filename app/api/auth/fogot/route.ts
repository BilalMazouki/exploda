// app/api/auth/forgot/route.ts (Next.js app router)
import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server"; // your server supabase helper

const bodySchema = z.object({
  email: z.string().email()
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    const { email } = parsed.data;
    const supabase = await createClient();

    // IMPORTANT: do not reveal whether the email exists — return a generic response
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`
    });

    if (error) {
      // log real error server-side
      console.error("resetPasswordForEmail error:", error);
      // return generic response to avoid user enumeration
    }

    return NextResponse.json({
      message: "If an account exists for that email, a password reset link was sent."
    }, { status: 200 });
  } catch (err) {
    console.error("forgot password error:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
