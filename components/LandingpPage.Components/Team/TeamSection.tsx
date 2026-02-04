// components/team/TeamSection.tsx
import TeamGrid from "./TeamGrid";
import TeamHeader from "./TeamHeader";

export default function TeamSection() {
  return (
    <section
      className="
        relative
        w-[1440px]
        h-[1684px]
        mx-auto
        bg-[#F5F4F7]
        overflow-hidden
      "
    >
      {/* Header */}
      <TeamHeader />

      {/* Team grid */}
      <TeamGrid />
    </section>
  );
}
