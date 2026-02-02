import { NextResponse } from "next/server";
import { z } from "zod";
import sanitizeHtml from "sanitize-html";
import { createClient } from "@/utils/supabase/server";

/* ---------------- SANITIZER ---------------- */

function sanitizeTipTap(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      "p","b","strong","i","em","u","s",
      "h1","h2","h3",
      "ul","ol","li",
      "blockquote","code","pre",
      "a","br","span","div",
      "sub","sup"
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      p: ["style"],
      h1: ["style"],
      h2: ["style"],
      h3: ["style"],
      span: ["style"],
      div: ["style"],
    },
    allowedStyles: {
      '*': {
        'color': [/^#[0-9a-fA-F]{3,6}$/, /^rgb\(/, /^rgba\(/],
        'text-align': [/^left$/, /^right$/, /^center$/, /^justify$/],
        'background-color': [/^#[0-9a-fA-F]{3,6}$/, /^rgb\(/, /^rgba\(/],
      }
    }
  });
}

/* ---------------- POST HANDLER ---------------- */

export async function POST(req: Request) {
  const form = await req.formData();

  const raw = {
    title: form.get("title"),
    slug: form.get("slug"),
    description: form.get("description"),
    blog: form.get("blog"),
    images: form.getAll("images"),
  };
  
  const schema = z.object({
    title: z.string().min(1).max(120),
    slug: z.string().min(1).max(120).regex(/^\S+$/, { message: "Slug must not contain whitespace" }),
    description: z.string().min(1).max(500),
    blog: z.string().min(1).max(50_000),
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

    const {error} = await supabase.storage.from("images").upload(path, image);
    const { data } = supabase.storage.from("images").getPublicUrl(path);
    console.log(error);
    uploadedUrls.push(data.publicUrl);
  }

  const cleanBlog = sanitizeTipTap(parsed.data.blog);

  const {error } =await supabase.from("posts").insert({
    title: parsed.data.title,
    description: parsed.data.description,
    slug: parsed.data.slug,
    blog: cleanBlog,
    images: uploadedUrls,
  });
  if (error?.code === "23505") {
    return NextResponse.json(
      { errors: { fieldErrors: { slug: ["Slug already exists"] } } },
      { status: 400 }
    );
  }
  return NextResponse.json({ success: true });
}

export async function GET() {
  const supabase = await createClient();

  const { data: designs, error } = await supabase
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

  return NextResponse.json({ designs });
}