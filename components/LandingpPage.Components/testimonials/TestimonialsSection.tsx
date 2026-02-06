"use client";

import { useState, useEffect, useRef } from "react";
import RatingCard from "./RatingCard";
import TestimonialCard from "./TestimonialCard";

/**
 * TestimonialsSection (fixed)
 *
 * Key constants to edit:
 *  - SECTION_TOP_PADDING  (px)
 *  - HEADER_BOTTOM_MARGIN(px)
 *  - CARD_GAP_PX         (px)
 *  - VIEWPORT_PADDING    (px)  -> left/right padding inside the page container
 *
 * Behavior:
 *  - The outer page box has overflow: visible to allow card rounded corners/shadows to render.
 *  - The inner viewport (overflow-hidden) clips the sliding track.
 *  - translateX is computed and clamped between [minTranslate, 0] so the first/last cards are never cut.
 */

export default function TestimonialsSection() {
  const testimonials = [
    { id: 1, name: "Leslie Alexander", role: "CEO, Google", avatar: "/images/user-1.jpg", rating: 5, message: "Great UI/UX design significantly enhances user engagement and improves overall experience." },
    { id: 2, name: "Leslie Alexander", role: "CEO, Google", avatar: "/images/user-2.jpg", rating: 5, message: "Great UI/UX design significantly enhances user engagement and improves overall experience." },
    { id: 3, name: "Leslie Alexander", role: "CEO, Google", avatar: "/images/user-3.jpg", rating: 5, message: "Great UI/UX design significantly enhances user engagement and improves overall experience." },
    { id: 4, name: "Leslie Alexander", role: "CEO, Google", avatar: "/images/user-4.jpg", rating: 5, message: "Great UI/UX design significantly enhances user engagement and improves overall experience." },
  ];

  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [translateX, setTranslateX] = useState(0);

  // -------------------------
  // EDITABLE LAYOUT CONSTANTS
  // -------------------------
  const SECTION_TOP_PADDING = 72; // px - space above heading
  const HEADER_BOTTOM_MARGIN = 28; // px - space under header/title
  const CARD_GAP_PX = 24; // px - gap between cards
  const VIEWPORT_PADDING = 60; // px - left/right padding inside the page container (matches px-[60])
  // -------------------------

  // Recompute translate whenever index changes or size changes
  useEffect(() => {
    const updateTranslate = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      // Total track width (actual content width)
      const trackWidth = track.scrollWidth;
      // Viewport inner width that can show track (clientWidth already excludes vertical scrollbar)
      const viewportWidth = viewport.clientWidth;

      // Determine card full width (card width + gap) from first child (robust to responsive widths)
      const firstChild = track.children[0] as HTMLElement | undefined;
      let cardFullWidth = 0;
      if (firstChild) {
        const childW = firstChild.offsetWidth;
        cardFullWidth = childW + CARD_GAP_PX;
      } else {
        // fallback to a reasonable value
        cardFullWidth = 420 + CARD_GAP_PX;
      }

      // Desired translate based on index (negative moving left)
      const desired = -index * cardFullWidth;

      // Compute minimum translate so the right-most track edge is not moved left beyond viewport
      // minTranslate is negative or zero. If trackWidth <= viewportWidth then minTranslate = 0 (no scrolling)
      const minTranslate = Math.min(0, viewportWidth - trackWidth);

      // Also ensure the first card is never pushed right beyond 0
      const clamped = Math.max(minTranslate, Math.min(0, desired));

      setTranslateX(clamped);
    };

    updateTranslate();
    window.addEventListener("resize", updateTranslate);
    return () => window.removeEventListener("resize", updateTranslate);
  }, [index, CARD_GAP_PX]);

  return (
    // OUTER PAGE BOX: allow overflow so rounded corners/shadows are not clipped
    <section
      className="mx-auto"
      style={{
        width: "1440px",
        // let height be auto; the page's overall canvas constraints live in parent
        transform: `rotate(0deg)`,
        opacity: 1,
        overflow: "visible", // allow card corners/shadows to render
        background: "#F5F4F7",
      }}
    >
      {/* Container with left/right padding (VIEWPORT_PADDING) */}
      <div
        className="relative mx-auto"
        style={{
          width: "1440px",
          paddingLeft: VIEWPORT_PADDING,
          paddingRight: VIEWPORT_PADDING,
          paddingTop: SECTION_TOP_PADDING,
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between" style={{ marginBottom: HEADER_BOTTOM_MARGIN }}>
          <div className="w-full text-center">
            <p className="text-xs text-[#BB9CFB] tracking-[0.02em] uppercase mb-4">Testimonials</p>
            <h2 className="text-[48px] md:text-[36px] lg:text-[48px] xl:text-[64px] font-medium uppercase text-[#1E1E1E]">
              WHAT OUR CLIENT SAYS
            </h2>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex md:items-center md:gap-3 lg:gap-4 xl:gap-4">
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={() => setIndex((i) => Math.min(i + 1, Math.max(0, testimonials.length - 1)))}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* VIEWPORT: clips the track; keep overflow-hidden here */}
        <div ref={viewportRef} className="overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex items-stretch transition-transform duration-600 ease-out"
            style={{
              gap: `${CARD_GAP_PX}px`,
              transform: `translateX(${translateX}px)`,
            }}
          >
            {/* Cards */}
            <RatingCard />
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} data={t} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-[#8B63E8]" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}