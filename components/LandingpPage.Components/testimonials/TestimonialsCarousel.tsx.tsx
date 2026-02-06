"use client";

import { useRef } from "react";
import RatingCard from "./RatingCard";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsCarousel() {
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

  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;

    const scrollAmount = 420; // ≈ one card width
    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative">
      {/* NAVIGATION */}
      <div className="flex justify-end gap-3 mb-6">
        <button onClick={() => scroll("left")}>←</button>
        <button onClick={() => scroll("right")}>→</button>
      </div>

      {/* VIEWPORT */}
      <div className="overflow-x-hidden">
        <div
          ref={trackRef}
          className="
            flex
            gap-[32px]
            overflow-x-auto
            scroll-smooth
            no-scrollbar
            px-[24px]
          "
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
