export default function BlogHeader() {
  return (
    <section
      className="
        mx-auto
        max-w-[1320px]
        px-[24px]
        md:px-[30px]
        lg:px-[45px]
        xl:px-[60px]
        flex
        flex-col
        lg:flex-row
        justify-between
        items-start
        lg:items-end
        gap-[52px]
        md:gap-[24px]
        lg:gap-[36px]
        xl:gap-[52px]
      "
    >
      {/* ================= LEFT (TITLE BLOCK) ================= */}
      <div
        className="
          w-full
          lg:max-w-[530px]
          flex
          flex-col
          gap-[12px]
          md:gap-[8px]
          lg:gap-[10px]
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
            bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
            bg-clip-text
            text-transparent
          "
        >
          Read our blogs
        </span>

        {/* Title */}
        <h2
          className="
            text-[64px]
            md:text-[36px]
            lg:text-[48px]
            xl:text-[64px]
            leading-[76px]
            md:leading-[42px]
            lg:leading-[56px]
            xl:leading-[76px]
            font-medium
            uppercase
            text-[#1E1E1E]
            text-left
            lg:text-center
          "
        >
          Blog &amp; Insights
        </h2>
      </div>

      {/* ================= RIGHT (BUTTON) ================= */}
      <div className="flex flex-col items-center isolate">
        {/* Button */}
        <button
          className="
            w-[132px]
            md:w-[110px]
            lg:w-[120px]
            xl:w-[132px]
            h-[44px]
            md:h-[38px]
            lg:h-[40px]
            xl:h-[44px]
            flex
            items-center
            justify-center
            gap-[8px]
            bg-[#1E1E1E]
            rounded-[8px]
            z-10
            -mt-[15px]
            md:-mt-[12px]
            lg:-mt-[13px]
          "
        >
          <span
            className="
              text-[16px]
              md:text-[12px]
              lg:text-[14px]
              xl:text-[16px]
              font-medium
              uppercase
              tracking-[0.01em]
              bg-[linear-gradient(91.04deg,_#FFF5F5_9.68%,_#E6E5FF_48.35%,_#D4C6F5_78.09%,_#FFFFFF_98.06%)]
              bg-clip-text
              text-transparent
            "
          >
            All blogs
          </span>
        </button>

        {/* Glow */}
        <div
          className="
            w-[119px]
            md:w-[95px]
            lg:w-[105px]
            xl:w-[119px]
            h-[20px]
            bg-[linear-gradient(90deg,_#8B63E8_0%,_#60B7E3_100%)]
            blur-[16.9px]
          "
        />
      </div>
    </section>
  );
}
