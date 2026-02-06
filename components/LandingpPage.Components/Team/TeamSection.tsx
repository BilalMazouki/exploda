import TeamGrid from "./TeamGrid";
import TeamHeader from "./TeamHeader";

export default function TeamSection() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7]">
      <div
        className="
          relative
          w-full
          max-w-[1440px]
          mx-auto

          min-h-[1100px]
          md:min-h-[1200px]
          lg:min-h-[1400px]
          xl:min-h-[1684px]

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
