"use client";

import { useState } from "react";
import ServicesList from "./ServicesList";

export default function ServicesSection() {
  // controls which service index is open
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full flex justify-center bg-[#F5F4F7]">
      {/*
        RESPONSIVE CONTAINER (MD and above):
        - Mobile (< 768px): Your existing mobile version
        - Tablet (768px - 1023px): 768px width
        - Desktop (1024px - 1439px): 1024px width
        - Large Desktop (1440px+): Fixed 1440px (Figma)
      */}
      <div
        className="
          w-[1440px]
          md:w-[768px]
          lg:w-[1024px]
        xl:w-full
          mx-auto
          px-[60px]
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
