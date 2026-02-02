import { NextResponse } from "next/server";
import z, { any } from "zod";

export async function GET(request: Request) {
  return NextResponse.json({ message: "Designs loaded successfully" });
}
const designValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  images : z.array(z.string().url("Each image must be a valid URL")).min(1, "At least one image is required"),
  description: z.string().min(1, "Description is required"),
});
export async function POST(request: Request) {
     try {
        const body = await request.json();
        const { success, data, error } = designValidationSchema.safeParse(body);

        if (!success) {
          return NextResponse.json({ message: "Invalid design data", errors: error.issues }, { status: 400 });
        }

        const { title, description, images } = data;

    } catch (error : any) {
      return NextResponse.json({ message: "Failed to create design", error: error.message }, { status: 500 });
    }
  return NextResponse.json({ message: "Design created successfully" });
}