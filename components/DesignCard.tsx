"use client";
import Link from "next/link";

export type Design = {
  id: string;
  slug: string;
  title: string;
  description: string;
  images?: string[];
};

export default function DesignCard({ design }: { design: Design }) {
  return (
    <div className="relative rounded-2xl border bg-white/80 p-4 shadow-xl transition hover:shadow-2xl hover:-translate-y-1 h-90">
      <div className="w-full rounded-xl bg-linear-to-r from-purple-100 to-fuchsia-100 mb-3 flex items-center justify-center overflow-hidden h-40">
        {design.images && design.images.length > 0 ? (
          <img src={design.images[0]} alt={design.title} className="object-cover w-full h-full rounded-xl" />
        ) : (
          <div className="w-16 h-16 bg-white/70 rounded-xl shadow" />
        )}
      </div>
      <h3 className="text-base font-semibold text-gray-900">{design.title}</h3>
      <div 
        className="mt-1 text-xs line-clamp-2" 
        dangerouslySetInnerHTML={{ __html: design.description }}
      />
      <div className="mt-4 flex justify-end">
        <Link
          href={`/designs/${design.slug}`}
          className="absolute right-2 bottom-2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow hover:scale-105 transition"
        >
          View Post
        </Link>
      </div>
    </div>
  );
}
