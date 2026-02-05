"use client";

import { useState, useEffect } from "react";
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

  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(452); // 420 + 32 gap for xl

  // Update card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth >= 1440) {
        setCardWidth(452); // 420 + 32
      } else if (window.innerWidth >= 1024) {
        setCardWidth(337); // 305 + 32
      } else if (window.innerWidth >= 768) {
        setCardWidth(264); // 240 + 24
      } else {
        setCardWidth(452);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const maxIndex = blogs.length - 1;

  return (
    <section className="
      relative 
      w-full 
      px-[80px]
      md:px-[30px]
      lg:px-[45px]
      xl:px-[80px]
      py-[80px]
      md:py-[50px]
      lg:py-[65px]
      xl:py-[80px]
    ">
      {/* ================= HEADER ROW ================= */}
      <div className="
        flex 
        items-center 
        justify-between 
        mb-[48px]
        md:mb-[32px]
        lg:mb-[40px]
        xl:mb-[48px]
      ">
        <p className="
          text-sm
          md:text-xs
          lg:text-sm
          xl:text-sm
          uppercase 
          tracking-wide 
          text-gray-400
        ">
          Creativity · Attention to detail
        </p>

        {/* NAVIGATION */}
        <div className="flex gap-3 md:gap-2 lg:gap-2 xl:gap-3">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            className="
              w-10 h-10
              md:w-8 md:h-8
              lg:w-9 lg:h-9
              xl:w-10 xl:h-10
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
            onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
            className="
              w-10 h-10
              md:w-8 md:h-8
              lg:w-9 lg:h-9
              xl:w-10 xl:h-10
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
      <div className="
        flex 
        gap-[80px]
        md:gap-[40px]
        lg:gap-[60px]
        xl:gap-[80px]
        flex-col
        md:flex-col
        lg:flex-row
        xl:flex-row
      ">
        {/* LEFT TEXT COLUMN */}
        <div className="
          w-full
          md:w-full
          lg:w-[340px]
          xl:w-[420px]
          shrink-0
        ">
          {/* Category filters / tags */}
          <div className="
            flex 
            gap-3
            md:gap-2
            lg:gap-2
            xl:gap-3
            mb-6
            md:mb-4
            lg:mb-5
            xl:mb-6
          ">
            <span className="
              px-4 py-2
              md:px-3 md:py-1.5
              lg:px-3 lg:py-1.5
              xl:px-4 xl:py-2
              rounded-full 
              bg-gray-100 
              text-sm
              md:text-xs
              lg:text-xs
              xl:text-sm
            ">
              Trendy
            </span>
            <span className="
              px-4 py-2
              md:px-3 md:py-1.5
              lg:px-3 lg:py-1.5
              xl:px-4 xl:py-2
              rounded-full 
              bg-gray-100 
              text-sm
              md:text-xs
              lg:text-xs
              xl:text-sm
            ">
              Most read
            </span>
          </div>

          {/* Marketing headline */}
          <h2 className="
            text-[40px]
            md:text-[24px]
            lg:text-[32px]
            xl:text-[40px]
            leading-[48px]
            md:leading-[28px]
            lg:leading-[38px]
            xl:leading-[48px]
            font-semibold
          ">
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
            className="
              flex 
              gap-[32px]
              md:gap-[24px]
              lg:gap-[32px]
              xl:gap-[32px]
              transition-transform 
              duration-500 
              ease-out
            "
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
            }}
          >
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                data={blog}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}