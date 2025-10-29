// app/api/user/profile/route.ts
import { NextResponse } from "next/server";
import { verifyUser } from "@/helpers/auth";

export async function GET() {
  try {
    const { user, supabase, response } = await verifyUser();
    
    if (!user) {
      return response; // This returns the 401 unauthorized response
    }

    // Fetch additional user data from profiles table
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('uuid', user.id)
      .single();

    if (profileError) {
      console.error("Profile fetch error:", profileError);
      // Continue with basic user data even if profile fetch fails
    }

    // Return safe user data (exclude sensitive tokens)
    const safeUserData = {
      id: user.id,
      email: user.email,
      email_confirmed_at: user.email_confirmed_at,
      metadata: user.user_metadata,
      profile: profile || null,
      last_sign_in_at: user.last_sign_in_at,
      created_at: user.created_at
    };

    return NextResponse.json({
      success: true,
      user: safeUserData
    });

  } catch (error) {
    console.error("Profile API error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Unable to fetch user profile" 
      },
      { status: 500 }
    );
  }
}