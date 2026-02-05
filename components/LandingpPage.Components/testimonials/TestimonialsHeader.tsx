// components/testimonials/TestimonialsHeader.tsx

export default function TestimonialsHeader() {
  return (
    <section
      className="
        absolute
        left-1/2
        top-[124px]
        -translate-x-1/2
        w-[739px]
        h-[109px]
        flex
        flex-col
        items-center
        gap-[12px]
        
      "
    >
      {/* Subtitle */}
      <span
        className="
          w-full
          h-[21px]
          text-[18px]
          font-bold
          uppercase
          text-center
          bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
          bg-clip-text
          text-transparent
        "
      >
        Testimonials
      </span>

      {/* Title */}
      <h2
        className="
          w-full
          h-[76px]
          text-[64px]
          font-medium
          leading-[76px]
          uppercase
          text-center
          text-[#1E1E1E]
        "
      >
        What our client says
      </h2>
    </section>
  );
}
