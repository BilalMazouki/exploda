"use client";

import { useState, useEffect } from "react";
import RatingCard from "./RatingCard";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Leslie Alexander",
      role: "CEO, Google",
      avatar: "/images/user-1.jpg",
      rating: 5,
      message: "Great UI/UX design significantly enhances user.",
    },
    {
      id: 2,
      name: "Leslie Alexander",
      role: "CEO, Google",
      avatar: "/images/user-2.jpg",
      rating: 5,
      message: "Great UI/UX design significantly enhances user.",
    },
    {
      id: 3,
      name: "Leslie Alexander",
      role: "CEO, Google",
      avatar: "/images/user-3.jpg",
      rating: 5,
      message: "Great UI/UX design significantly enhances user.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(452); // 420 + 32 gap for xl

  // Update card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth >= 1440) {
        setCardWidth(417); // 385 + 32 gap for xl
      } else if (window.innerWidth >= 1024) {
        setCardWidth(316); // 285 + 31 gap for lg
      } else if (window.innerWidth >= 768) {
        setCardWidth(265); // 240 + 25 gap for md
      } else {
        setCardWidth(417);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  return (
    <section className="
      relative 
      pt-[297px]
      md:pt-[180px]
      lg:pt-[230px]
      xl:pt-[297px]
      px-[60px]
      md:px-[0px]
      lg:px-[20px]
      xl:px-[60px]
    ">
      {/* NAVIGATION */}
      <div className="
        flex 
        justify-end 
        gap-3
        md:gap-2
        lg:gap-2
        xl:gap-3
        mb-6
        md:mb-4
        lg:mb-5
        xl:mb-6
      ">
        <button 
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          className="
            w-10 h-10
            md:w-8 md:h-8
            lg:w-9 lg:h-9
            xl:w-10 xl:h-10
            flex items-center justify-center
            rounded-full
            border border-gray-300
            hover:bg-gray-100
            transition-colors
          "
        >
          ←
        </button>
        <button
          onClick={() =>
            setIndex((i) => Math.min(i + 1, testimonials.length - 1))
          }
          className="
            w-10 h-10
            md:w-8 md:h-8
            lg:w-9 lg:h-9
            xl:w-10 xl:h-10
            flex items-center justify-center
            rounded-full
            border border-gray-300
            hover:bg-gray-100
            transition-colors
          "
        >
          →
        </button>
      </div>

      {/* VIEWPORT */}
      <div className="overflow-hidden w-full">
        {/* TRACK */}
        <div
          className="
            flex 
            gap-[32px]
            md:gap-[20px]
            lg:gap-[26px]
            xl:gap-[32px]
            transition-transform 
            duration-500 
            ease-out
          "
          style={{
            transform: `translateX(-${index * cardWidth}px)`,
          }}
        >
          <RatingCard />

          {testimonials.map((item) => (
            <TestimonialCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}