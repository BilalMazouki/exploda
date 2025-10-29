// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";

// Reuse the same rate limiting and security functions from login
const signupAttempts = new Map<string, { count: number; lastAttempt: number }>();
const commonPasswords = [
  '123456', 'password', '12345678', 'qwerty', '123456789', 
  '12345', '1234', '111111', '1234567', 'dragon', 
  '123123', 'baseball', 'abc123', 'football', 'monkey',
  'letmein', 'shadow', 'master', '666666', 'qwertyuiop',
  '123321', 'mustang', '1234567890', 'michael', '654321',
  'superman', '1qaz2wsx', '7777777', 'fuckyou', '121212'
];

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 100);
}

function checkRateLimit(identifier: string, maxAttempts: number = 3, windowMs: number = 60 * 60 * 1000): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const attemptData = signupAttempts.get(identifier);
  
  if (attemptData && now - attemptData.lastAttempt > windowMs) {
    signupAttempts.delete(identifier);
  }
  
  if (!attemptData) {
    signupAttempts.set(identifier, { count: 1, lastAttempt: now });
    return { allowed: true, remaining: maxAttempts - 1 };
  }
  
  if (attemptData.count >= maxAttempts) {
    return { allowed: false, remaining: 0 };
  }
  
  attemptData.count++;
  attemptData.lastAttempt = now;
  return { allowed: true, remaining: maxAttempts - attemptData.count };
}

function isPasswordStrong(password: string): boolean {
  if (commonPasswords.includes(password.toLowerCase())) return false;
  if (password.length < 8) return false; // Stronger requirement for signup
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
  return true;
}
function securityHeaders(res: NextResponse) {
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  return res;
}

const signupSchema = z.object({
  email: z.string()
    .email({ message: "Please enter a valid email address" })
    .transform(s => s.toLowerCase().trim())
    .refine(email => email.length <= 100, "Email is too long"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, { message: "Password must include at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must include at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must include at least one number" })
    .refine(pass => !commonPasswords.includes(pass.toLowerCase()), "Password is too common and easily guessable"),
    // .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "Password must include at least one special character" }) 
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name is too long" })
    .transform(s => s.trim())
    .refine(name => name.length <= 50, "Name is too long"),
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
    
    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedName = sanitizeInput(name);

    // Rate limiting for signup
    const clientIp = req.headers.get('x-forwarded-for') || 'unknown';
    const rateLimit = checkRateLimit(`${sanitizedEmail}_${clientIp}`, 3, 60 * 60 * 1000); // 3 attempts per hour
    
    if (!rateLimit.allowed) {
      return NextResponse.json({ 
        success: false,
        message: "Too many signup attempts. Please wait an hour and try again." 
      }, { status: 429 });
    }

    // Additional password strength check
    if (!isPasswordStrong(password)) {
      return NextResponse.json({
        success: false,
        message: "Password is too weak. Please use a stronger password with at least 8 characters including uppercase, lowercase and numbers"
      }, { status: 400 });
    }

    const supabase = await createClient();

    const { data: user, error } = await supabase.auth.signUp({
      email: sanitizedEmail,
      password: password,
      options: {
        data: { 
          name: sanitizedName,
          signup_date: new Date().toISOString()
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/email-confirmation`,
      },
    });

    if (error) {
      let userMessage = "We couldn't create your account. Please try again.";
      
      // Generic messages to avoid revealing existing accounts
      switch (error.message) {
        case "User already registered":
          userMessage = "If an account with this email exists, we've sent a password reset link.";
          break;
        case "Password should be at least 8 characters":
          userMessage = "Please choose a stronger password.";
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
        message: userMessage,
        remainingAttempts: rateLimit.remaining
      }, { status: 400 });
    }

    // Create user profile (moved outside the if(!error) block for better structure)
    if (user.user) {
      const { error: profileError } = await supabase.from('profiles').insert({
        uuid: user.user.id,
        role: 'user',
        name: sanitizedName, 
      });

      if (profileError) {
        console.error("Profile creation error:", profileError);
        // Don't fail the signup if profile creation fails, but log it
      }
    }

    // Check if email confirmation is required
    if (user.user && user.user.identities && user.user.identities.length === 0) {
      return NextResponse.json({
        success: false,
        message: "If an account with this email exists, we've sent a password reset link."
      }, { status: 409 });
    }

    return securityHeaders( NextResponse.json({
      success: true,
      message: "Welcome aboard! We've sent a verification link to your email. Please check your inbox (and spam folder) to activate your account.",
      requiresVerification: true,
      user: {
        id: user.user?.id,
        email: user.user?.email
      }
    }, { status: 201 }))


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