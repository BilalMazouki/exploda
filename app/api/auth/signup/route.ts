import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";

const signupSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }).transform(s => s.toLowerCase().trim()),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain an uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain a lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain a number" }),
  name: z.string().min(3, { message: "Name must be at least 3 characters" }).max(32).transform(s => s.trim()),
});


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.issues.map(i => i.message);
      return NextResponse.json({ message: "Validation failed", errors }, { status: 400 });
    }

    const { email, password, name } = parsed.data;
    const supabase = await createClient();

   
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/verify-email` // optional redirect
      },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    
    return NextResponse.json({
      message: "User created. Check your email to verify your account before logging in."
    }, { status: 201 });

  } catch (err: any) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
