'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "/hero1.jpg", alt: "Surfing at Mersawi Beach" },
    { id: 2, image: "/hero5.jpg", alt: "Surf lessons at Mersawi" },
    { id: 3, image: "/hero3.jpg", alt: "Mersawi accommodation" },
    { id: 4, image: "/hero.jpg", alt: "Yoga and surf retreat" },
    { id: 5, image: "/hero4.jpg", alt: "Surf!" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="relative h-screen  w-full overflow-hidden ">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-wide font-mw">
            Mersawi Surf Experience
          </h1>

          {/* Services Grid */}
          <div className="mt-12" >
            <h4>ACCOMMODATION - SURF LESSONS - SURF PACKAGES - RETREATS - YOGA</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
