// components/blog/BlogHeader.tsx

export default function BlogHeader() {
  return (
    <section
      className="
        w-[1320px]
        h-[109px]
        flex
        flex-row
        justify-between
        items-end
        gap-[52px]
        
        

      "
    >
      {/* ================= LEFT (TITLE BLOCK) ================= */}
      <div
        className="
          w-[530px]
          h-[109px]
          flex
          flex-col
          justify-center
          items-start
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
            w-full
            h-[76px]
            text-[64px]
            leading-[76px]
            font-medium
            uppercase
            text-center
            text-[#1E1E1E]
          "
        >
          Blog & Insights
        </h2>
      </div>

      {/* ================= RIGHT (BUTTON) ================= */}
      <div
        className="
          w-[132px]
          h-[49px]
          flex
          flex-col
          items-center
          isolate
          
          relative
        "
      >
        {/* Button */}
        <button
          className="
            w-[132px]
            h-[44px]
            flex
            items-center
            justify-center
            gap-[8px]
            py-[13px]
            bg-[#1E1E1E]
            rounded-[8px]
            z-10
            -mt-[15px]
          "
        >
          <span
            className="
              text-[16px]
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

        {/* Glow / Ellipse */}
        <div
          className="
            w-[119px]
            h-[20px]
            bg-[linear-gradient(90deg,_#8B63E8_0%,_#60B7E3_100%)]
            blur-[16.9px]
            z-0
          "
        />
      </div>
    </section>
  );
}
