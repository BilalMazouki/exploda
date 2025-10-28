// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { authCookies } from "@/lib/authCookies";

// Rate limiting storage (in production, use Redis instead)
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();

// Common passwords to block
const commonPasswords = [
  '123456', 'password', '12345678', 'qwerty', '123456789', 
  '12345', '1234', '111111', '1234567', 'dragon', 
  '123123', 'baseball', 'abc123', 'football', 'monkey',
  'letmein', 'shadow', 'master', '666666', 'qwertyuiop',
  '123321', 'mustang', '1234567890', 'michael', '654321',
  'superman', '1qaz2wsx', '7777777', 'fuckyou', '121212'
];

const loginSchema = z.object({
  email: z.string()
    .email({ message: "Please enter a valid email address" })
    .transform(s => s.toLowerCase().trim())
    .refine(email => email.length <= 100, "Email is too long"),
  password: z.string()
    .min(1, { message: "Password is required" })
    .refine(pass => pass.length <= 100, "Password is too long"),
});

function securityHeaders(res: NextResponse) {
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "no-referrer");
  res.headers.set("Permissions-Policy", "geolocation=(), microphone=()");
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  return res;
}

// Input sanitization function
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') 
    .substring(0, 100); // Limit length
}

// Rate limiting check
function checkRateLimit(identifier: string, maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const attemptData = loginAttempts.get(identifier);
  
  // Clean up old entries
  if (attemptData && now - attemptData.lastAttempt > windowMs) {
    loginAttempts.delete(identifier);
  }
  
  if (!attemptData) {
    loginAttempts.set(identifier, { count: 1, lastAttempt: now });
    return { allowed: true, remaining: maxAttempts - 1 };
  }
  
  if (attemptData.count >= maxAttempts) {
    return { allowed: false, remaining: 0 };
  }
  
  attemptData.count++;
  attemptData.lastAttempt = now;
  return { allowed: true, remaining: maxAttempts - attemptData.count };
}

// Password strength check
function isPasswordStrong(password: string): boolean {
  if (commonPasswords.includes(password.toLowerCase())) return false;
  if (password.length < 8) return false;
  return true;
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
    
    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);
    
    // Check password strength
    if (!isPasswordStrong(sanitizedPassword)) {
      return NextResponse.json({ 
        success: false,
        message: "Please use a stronger password" 
      }, { status: 400 });
    }

    // Rate limiting by IP
    const clientIp = req.headers.get('x-forwarded-for') || 'unknown';
    const rateLimit = checkRateLimit(`${sanitizedEmail}_${clientIp}`);
    
    if (!rateLimit.allowed) {
      return NextResponse.json({ 
        success: false,
        message: "Too many login attempts. Please wait 15 minutes and try again." 
      }, { status: 429 });
    }

    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({ 
      email: sanitizedEmail, 
      password: sanitizedPassword 
    });
    
    if (error) {
      // ALWAYS USE GENERIC MESSAGES
      let userMessage = "Invalid email or password. Please try again.";
      
      // Only differentiate for non-credential issues
      switch (error.message) {
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
        message: userMessage,
        remainingAttempts: rateLimit.remaining
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

    // USE YOUR EXISTING AUTHCOOKIES FUNCTION
    const { accessCookie, refreshCookie } = authCookies(accessToken, refreshToken);
    
    const res = NextResponse.json({ 
      success: true,
      message: "Welcome back! You've been successfully signed in." 
    }, { status: 200 });
    
    res.headers.append("Set-Cookie", accessCookie);
    res.headers.append("Set-Cookie", refreshCookie);

    // Clear rate limit on successful login
    loginAttempts.delete(`${sanitizedEmail}_${clientIp}`);

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