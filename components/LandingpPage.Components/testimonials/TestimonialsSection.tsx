"use client";

import { useState } from "react";
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

  const CARD_WIDTH = 452; // 420 + 32 gap

  return (
    <section className="relative pt-[297px]  px-[60px] ">
      {/* NAVIGATION */}
      <div className="flex justify-end  gap-3 mb-6">
        <button onClick={() => setIndex((i) => Math.max(i - 1, 0))}>←</button>
        <button
          onClick={() =>
            setIndex((i) => Math.min(i + 1, testimonials.length - 1))
          }
        >
          →
        </button>
      </div>

      {/* VIEWPORT */}
      <div className="overflow-hidden w-full">
        {/* TRACK */}
        <div
          className="flex gap-[32px] transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * CARD_WIDTH}px)`,
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
