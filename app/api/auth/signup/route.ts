// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";

const signupSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }).transform(s => s.toLowerCase().trim()),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, { message: "Password must include at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must include at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must include at least one number" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50, { message: "Name is too long" }).transform(s => s.trim()),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.issues.map(i => i.message);
      return NextResponse.json({ 
        success: false,
        message: "Please fix the following issues:", 
        errors 
      }, { status: 400 });
    }

    const { email, password, name } = parsed.data;
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { 
          name,
          signup_date: new Date().toISOString()
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/email-confirmation`,

      },
    });

    if (error) {
      let userMessage = "We couldn't create your account. Please try again.";
      
      switch (error.message) {
        case "User already registered":
          userMessage = "An account with this email already exists. Please try signing in or use a different email.";
          break;
        case "Password should be at least 8 characters":
          userMessage = "Please choose a password that's at least 8 characters long.";
          break;
        case "Invalid email":
          userMessage = "Please enter a valid email address.";
          break;
        default:
          if (error.message.includes("rate limit")) {
            userMessage = "Too many signup attempts. Please wait a few minutes and try again.";
          }
      }

      return NextResponse.json({ 
        success: false,
        message: userMessage 
      }, { status: 400 });
    }

    // Check if email confirmation is required
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      return NextResponse.json({
        success: false,
        message: "An account with this email already exists. Please try signing in instead."
      }, { status: 409 });
    }

    return NextResponse.json({
      success: true,
      message: "Welcome aboard! We've sent a verification link to your email. Please check your inbox (and spam folder) to activate your account.",
      requiresVerification: true,
      user: {
        id: data.user?.id,
        email: data.user?.email
      }
    }, { status: 201 });

  } catch (err: any) {
    console.error("Signup error:", err);
    
    let userMessage = "We're having trouble creating your account. Please try again in a few moments.";
    
    if (err.message?.includes("JSON")) {
      userMessage = "Invalid request format. Please check your information and try again.";
    }

    return NextResponse.json({ 
      success: false,
      message: userMessage 
    }, { status: 500 });
  }
}