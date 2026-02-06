"use client";

import { useRef } from "react";
import BlogCard from "./BlogCard";

export default function BlogSlider() {
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

  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;

    trackRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        w-full
        py-[80px]
        md:py-[50px]
        lg:py-[65px]
        xl:py-[80px]
      "
    >
      {/* ================= HEADER ROW ================= */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-[48px]
          md:mb-[32px]
          lg:mb-[40px]
          xl:mb-[48px]
        "
      >
        <p
          className="
            text-sm
            md:text-xs
            lg:text-sm
            uppercase
            tracking-wide
            text-gray-400
          "
        >
          Creativity · Attention to detail
        </p>

        {/* NAVIGATION */}
        <div className="flex gap-3 md:gap-2">
          <button
            onClick={() => scroll("left")}
            className="
              w-10 h-10
              md:w-8 md:h-8
              rounded-full
              bg-white
              shadow
              flex
              items-center
              justify-center
              hover:bg-gray-50
              transition-colors
            "
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="
              w-10 h-10
              md:w-8 md:h-8
              rounded-full
              bg-white
              shadow
              flex
              items-center
              justify-center
              hover:bg-gray-50
              transition-colors
            "
          >
            →
          </button>
        </div>
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div
        className="
          flex
          gap-[80px]
          md:gap-[40px]
          lg:gap-[60px]
          flex-col
          lg:flex-row
        "
      >
        {/* LEFT TEXT COLUMN */}
        <div
          className="
            w-full
            lg:w-[340px]
            xl:w-[420px]
            shrink-0
          "
        >
          {/* Tags */}
          <div className="flex gap-3 mb-6 md:mb-4 lg:mb-5">
            <span className="px-4 py-2 rounded-full bg-gray-100 text-sm md:text-xs">
              Trendy
            </span>
            <span className="px-4 py-2 rounded-full bg-gray-100 text-sm md:text-xs">
              Most read
            </span>
          </div>

          {/* Headline */}
          <h2
            className="
              text-[40px]
              md:text-[24px]
              lg:text-[32px]
              xl:text-[40px]
              leading-[48px]
              md:leading-[28px]
              lg:leading-[38px]
              xl:leading-[48px]
              font-semibold
            "
          >
            Discover trends,
            <br />
            and <span className="italic font-light">creativity</span> from
            <br />
            the world
          </h2>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={trackRef}
            className="
              flex
              gap-[32px]
              md:gap-[24px]
              overflow-x-auto
              scroll-smooth
              no-scrollbar
              pr-[24px]
            "
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.id} data={blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
