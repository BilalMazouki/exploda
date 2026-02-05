"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogSlider() {
  /**
   * 👉 REAL BACK-END DATA SOURCE
   *
   * Replace this static array with:
   * - API fetch (REST / GraphQL)
   * - CMS (Sanity, Strapi, Contentful, etc.)
   * - Server Component props
   *
   * Example later:
   * const blogs = await fetch("/api/blogs").then(res => res.json())
   */
  const blogs = [
    {
      id: 1,
      title: "THE FUTURE OF 3D DESIGN",
      image: "/images/blog-1.png",
      tag: "THE FUTURE OF 3D DESIGN",
    },
    {
      id: 2,
      title: "THE FUTURE OF 3D DESIGN",
      image: "/images/blog-2.png",
      tag: "THE FUTURE OF 3D DESIGN",
    },
    {
      id: 3,
      title: "THE FUTURE OF 3D DESIGN",
      image: "/images/blog-3.png",
      tag: "THE FUTURE OF 3D DESIGN",
    },
  ];

  /**
   * 👉 SLIDER STATE
   * index = which card is currently visible
   * This value could also be controlled externally if needed
   */
  const [index, setIndex] = useState(0);

  /**
   * 👉 CARD WIDTH MATH (IMPORTANT)
   * Must match BlogCard width + gap
   */
  const CARD_WIDTH = 420 + 32;
  const maxIndex = blogs.length - 1;

  return (
    <section className="relative w-full px-[80px] py-[80px]">
      {/* ================= HEADER ROW ================= */}
      <div className="flex items-center justify-between mb-[48px]">
        {/* 👉 REAL DATA: section meta text */}
        <p className="text-sm uppercase tracking-wide text-gray-400">
          Creativity · Attention to detail
        </p>

        {/* NAVIGATION */}
        <div className="flex gap-3">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            ←
          </button>

          <button
            onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="flex gap-[80px]">
        {/* LEFT TEXT COLUMN */}
        <div className="w-[420px] shrink-0">
          {/* 👉 REAL DATA: category filters / tags */}
          <div className="flex gap-3 mb-6">
            <span className="px-4 py-2 rounded-full bg-gray-100 text-sm">
              Trendy
            </span>
            <span className="px-4 py-2 rounded-full bg-gray-100 text-sm">
              Most read
            </span>
          </div>

          {/* 👉 REAL DATA: marketing headline */}
          <h2 className="text-[40px] leading-[48px] font-semibold">
            Discover trends,
            <br />
            and <span className="italic font-light">creativity</span> from
            <br />
            the world
          </h2>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-[32px] transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
          >
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                data={blog} // 👉 REAL DATA PASSED TO CARD
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
