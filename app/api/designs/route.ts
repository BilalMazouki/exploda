  import { NextResponse } from "next/server";
  import { z } from "zod";
  import sanitizeHtml from "sanitize-html";
  import { createClient } from "@/utils/supabase/server";


  /* ---------------- VALIDATION ---------------- */

  const postSchema = z.object({
    title: z.string().min(1).max(120),

    description: z
      .string()
      .min(1)
      .max(20_000)
      .refine(v => !/<script|iframe|object|embed/i.test(v), {
        message: "Invalid HTML",
      })
      .refine(v => v.replace(/<[^>]+>/g, "").trim().length > 10, {
        message: "Empty content",
      }),

   images: z.array(
  z.instanceof(File)
   .refine(f => f.size <= 5 * 1024 * 1024)
   .refine(f => ["image/png","image/jpeg","image/webp"].includes(f.type))
).min(1)

  });

  /* ---------------- SANITIZER ---------------- */

  function sanitizeTipTap(html: string) {
    return sanitizeHtml(html, {
      allowedTags: [
        "p","b","strong","i","em","u",
        "h1","h2","h3",
        "ul","ol","li",
        "blockquote","code","pre",
        "a","br"
      ],
      allowedAttributes: {
        a: ["href", "target", "rel"],
      },
    });
  }

  /* ---------------- POST HANDLER ---------------- */

export async function POST(req: Request) {
  const form = await req.formData();

  const raw = {
    title: form.get("title"),
    description: form.get("description"),
    images: form.getAll("images"),
  };
  const schema = z.object({
    title: z.string().min(1).max(120),

    description: z.string().min(1).max(20_000),

    images: z.array(
      z.instanceof(File)
        .refine(f => f.size <= 5 * 1024 * 1024)
        .refine(f =>
          ["image/png","image/jpeg","image/webp"].includes(f.type)
        )
    ).min(1),
  });

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    console.log(parsed.error.flatten());
    return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });
  }

  const supabase = await createClient();

  const uploadedUrls = [];

  for (const image of parsed.data.images) {
    const path = `posts/${crypto.randomUUID()}.${image.name.split(".").pop()}`;

    const {error} =   await supabase.storage.from("images").upload(path, image);
    const { data } = supabase.storage.from("images").getPublicUrl(path);
    console.log(error);
    uploadedUrls.push(data.publicUrl);
  }

  const cleanDescription = sanitizeTipTap(parsed.data.description);

  await supabase.from("posts").insert({
    title: parsed.data.title,
    description: cleanDescription,
    images: uploadedUrls,
  });

  return NextResponse.json({ success: true });
}


export async function GET() {
  const supabase = await createClient();

  const { data : designs, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to load posts" },
      { status: 500 }
    );
  }

  return NextResponse.json({ designs } );
}
