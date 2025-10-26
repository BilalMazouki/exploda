
import { serialize } from "cookie";

const ONE_HOUR = 60 * 60;
const SEVEN_DAYS = 60 * 60 * 24 * 7;

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
};

export function authCookies(accessToken: string, refreshToken: string) {
  const accessCookie = serialize(
    "access_token",
    accessToken,
    { ...cookieOptions, maxAge: ONE_HOUR }
  );

  const refreshCookie = serialize(
    "refresh_token",
    refreshToken,
    { ...cookieOptions, maxAge: SEVEN_DAYS }
  );

  return { accessCookie, refreshCookie };
}

export function clearAuthCookies() {
  const expired = new Date(0).toUTCString();
  const accessCookie = serialize("access_token", "", { ...cookieOptions, expires: new Date(0) });
  const refreshCookie = serialize("refresh_token", "", { ...cookieOptions, expires: new Date(0) });
  return { accessCookie, refreshCookie };
}
