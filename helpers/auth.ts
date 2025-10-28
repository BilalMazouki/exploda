// helpers/auth.ts
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { authCookies } from "@/lib/authCookies";
import { NextResponse } from "next/server";

// Rate limiting for auth verification
const authAttempts = new Map<string, { count: number; lastAttempt: number }>();

function checkAuthRateLimit(identifier: string): boolean {
  const now = Date.now();
  const attemptData = authAttempts.get(identifier);
  const windowMs = 5 * 60 * 1000; // 5 minutes
  
  if (attemptData && now - attemptData.lastAttempt > windowMs) {
    authAttempts.delete(identifier);
    return true;
  }
  
  if (!attemptData) {
    authAttempts.set(identifier, { count: 1, lastAttempt: now });
    return true;
  }
  
  if (attemptData.count > 10) { // 10 attempts per 5 minutes
    return false;
  }
  
  attemptData.count++;
  attemptData.lastAttempt = now;
  return true;
}

/**
 * Verify user authentication & optionally role.
 * @param requiredRole - e.g. "admin" or "teacher"
 */
export async function verifyUser(requiredRole?: string) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;

  // Rate limiting by tokens to prevent brute force
  const clientIdentifier = accessToken?.substring(0, 10) || 'unknown';
  if (!checkAuthRateLimit(clientIdentifier)) {
    return { user: null, response: unauthorized("Too many authentication attempts") };
  }

  if (!accessToken) {
    return { user: null, response: unauthorized("Authentication required") };
  }

  const supabase = await createClient();

  // 1️⃣ Verify token validity
  const { data: userData, error } = await supabase.auth.getUser(accessToken);

  if (error || !userData?.user) {
    // try to refresh if access token expired
    if (!refreshToken) {
      return { user: null, response: unauthorized("Session expired. Please log in again.") };
    }

    const { data: refreshed, error: refreshError } = await supabase.auth.refreshSession({
      refresh_token: refreshToken,
    });

    if (refreshError || !refreshed.session) {
      return { user: null, response: unauthorized("Session expired. Please log in again.") };
    }

    // USE YOUR EXISTING AUTHCOOKIES FUNCTION
    const { accessCookie, refreshCookie } = authCookies(
      refreshed.session.access_token,
      refreshed.session.refresh_token
    );

    const res = NextResponse.next();
    res.headers.append("Set-Cookie", accessCookie);
    res.headers.append("Set-Cookie", refreshCookie);

    // get updated user
    const updatedUser = refreshed.user;
    return { user: updatedUser, supabase, response: res };
  }

  const user = userData.user;

  // 2️⃣ Role-based check (from your profiles table)
  if (requiredRole) {
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("uuid", user.id)
      .single();

    if (profileError || !profile) {
      return { user: null, response: unauthorized("Unable to verify user role.") };
    }

    if (profile.role !== requiredRole) {
      return { user: null, response: unauthorized("Access denied. Insufficient permissions.") };
    }
  }

  // ✅ Auth & role check passed
  return { user, supabase };
}

function unauthorized(message: string) {
  return NextResponse.json({ success: false, message }, { status: 401 });
}