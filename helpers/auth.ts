import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { authCookies } from "@/lib/authCookies";
import { NextResponse } from "next/server";

/**
 * Verify user authentication & optionally role.
 * @param requiredRole - e.g. "admin" or "teacher"
 */
export async function verifyUser(requiredRole?: string) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;

  if (!accessToken) {
    return { user: null, response: unauthorized("No access token found") };
  }

  const supabase = await createClient();

  // 1️⃣ Verify token validity
  const { data: userData, error } = await supabase.auth.getUser(accessToken);

  if (error || !userData?.user) {
    // try to refresh if access token expired
    if (!refreshToken) {
      return { user: null, response: unauthorized("No refresh token found") };
    }

    const { data: refreshed, error: refreshError } = await supabase.auth.refreshSession({
      refresh_token: refreshToken,
    });

    if (refreshError || !refreshed.session) {
      return { user: null, response: unauthorized("Session expired. Please log in again.") };
    }

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
