import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { string, z } from "zod";


export async function POST(req: Request) {
    const schema = z.object({
        email: z.string().email({ message: "Invalid email format" }),
        password: z
          .string()
          .min(6, { message: "Password must be at least 6 characters" }),
        name : string().min(3, { message: "Name must be at least 3 characters" }).max(12, { message: "Name must be at most 12 characters" }),
    })
    const body = await req.json()
    const safebody = schema.safeParse(body)
    if (!safebody.success) {
        return NextResponse.json({ message: "Validation failed", errors: safebody.error.issues.map((e) => e.message) }, { status: 400 })
    }
    try {
        const {email , password , name} = safebody.data
    const supabase = await createClient()

    const {data , error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name
            }
        }
    })
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
    const access_token = data.session?.access_token!
    const refresh_token = data.session?.refresh_token!
    const access_cookie = serialize("access_token", access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 ,
        path: "/",
    })
    const refresh_cookie = serialize("refresh_token", refresh_token, {
        httpOnly : true,
        secure : process.env.NODE_ENV === "production",
        sameSite : "strict",
        maxAge : 60 * 60 * 24 * 7,
        path : "/"
    })
    const res = NextResponse.json({ message: "User created successfully" }, { status: 200 })
    res.headers.append("Set-Cookie", access_cookie)
    res.headers.append("Set-Cookie", refresh_cookie)
    
    return res
    } catch (err) {
        return NextResponse.json({ message: "Something went wrong" , err}, { status: 500 })
    }
    
}