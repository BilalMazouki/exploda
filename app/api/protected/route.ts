import { verifyUser } from "@/helpers/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { user, response } = await verifyUser('admin');
  if (!user) return response;

  return NextResponse.json({
    success: true,
    message: `Welcome ${user.user_metadata.name || user.email}!`,
  });
}
