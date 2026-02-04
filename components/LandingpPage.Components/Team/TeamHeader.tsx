// components/team/TeamHeader.tsx
export default function TeamHeader() {
  return (
    <div
      className="
        absolute
        left-1/2
        -translate-x-1/2
        top-[98px]
        w-[1320px]
        h-[152px]
        flex
        flex-col
        justify-center
        items-center
        pl-[74px]
        gap-[20px]
        isolate
      "
    >
      {/* Main title */}
      <h1
        className="
          w-[876px]
          h-[152px]
          font-creato
          font-medium
          text-[64px]
          leading-[76px]
          uppercase
          text-[#1E1E1E]
          z-0
        "
      >
        Creative mind behind exploda
      </h1>

      {/* OUR TEAM label */}
      <span
        className="
          absolute
          left-[887px]
          top-[120px]
          w-[94px]
          h-[21px]
          flex
          items-center
          font-creato
          font-bold
          text-[18px]
          leading-[21px]
          uppercase
          bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
          bg-clip-text
          text-transparent
          z-10
        "
      >
        OUR TEAM
      </span>
    </div>
  );
}
