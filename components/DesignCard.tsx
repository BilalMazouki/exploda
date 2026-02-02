"use client";
import Link from "next/link";

export type Design = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
};

export default function DesignCard({ design }: { design: Design }) {
  return (
    <div className="rounded-2xl border bg-white/80 p-4 shadow-xl transition hover:shadow-2xl hover:-translate-y-1">
      <div className="h-44 w-full rounded-xl bg-gradient-to-r from-purple-100 to-fuchsia-100 mb-3 flex items-center justify-center overflow-hidden">
        {design.imageUrl ? (
          <img src={design.imageUrl} alt={design.title} className="object-cover w-full h-full rounded-xl" />
        ) : (
          <div className="w-16 h-16 bg-white/70 rounded-xl shadow" />
        )}
      </div>
      <h3 className="text-base font-semibold text-gray-900">{design.title}</h3>
      <p className="mt-1 text-xs text-gray-500">{design.description}</p>
      <div className="mt-4 flex justify-end">
        <Link
          href={`/designs/${design.id}`}
          className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow hover:scale-105 transition"
        >
          View Post
        </Link>
      </div>
    </div>
  );
}