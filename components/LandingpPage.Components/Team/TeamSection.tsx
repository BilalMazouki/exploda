import TeamGrid from "./TeamGrid";
import TeamHeader from "./TeamHeader";

export default function TeamSection() {
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
          relative
          w-[1440px]
          md:w-[768px]
          lg:w-[1024px]
          xl:w-[1440px]
          h-[1684px]
          md:h-[1200px]
          lg:h-[1400px]
          xl:h-[1684px]
          mx-auto
          bg-[#F5F4F7]
          overflow-hidden
        "
      >
        {/* Header */}
        <TeamHeader />

        {/* Team grid */}
        <TeamGrid />
      </div>
    </section>
  );
}