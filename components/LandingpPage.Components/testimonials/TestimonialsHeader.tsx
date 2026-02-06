export default function TestimonialsHeader() {
  return (
    <div
      className="
        mx-auto
        max-w-[739px]
        md:max-w-[600px]
        lg:max-w-[700px]
        xl:max-w-[739px]
        flex
        flex-col
        items-center
        gap-[12px]
        md:gap-[8px]
        lg:gap-[10px]
        xl:gap-[12px]
      "
    >
      {/* Subtitle */}
      <span
        className="
          text-[18px]
          md:text-[13px]
          lg:text-[15px]
          xl:text-[18px]
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
          text-[64px]
          md:text-[36px]
          lg:text-[48px]
          xl:text-[64px]
          font-medium
          leading-[76px]
          md:leading-[42px]
          lg:leading-[56px]
          xl:leading-[76px]
          uppercase
          text-center
          text-[#1E1E1E]
        "
      >
        What our client says
      </h2>
    </div>
  );
}
