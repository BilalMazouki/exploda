"use client";

import { useState } from "react";
import ServicesList from "./ServicesList";

export default function ServicesSection() {
  // controls which service index is open
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full flex justify-center bg-[#F5F4F7]">
      {/*
        RESPONSIVE STRATEGY
        - Mobile: fluid width
        - Tablet: max 768px
        - Desktop: max 1024px
        - XL: max 1440px (Figma)
      */}
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto

          px-4
          md:px-[30px]
          lg:px-[45px]
          xl:px-[60px]
        "
      >
        <ServicesList
          activeIndex={activeIndex}
          onChange={setActiveIndex}
        />
      </div>
    </section>
  );
}
