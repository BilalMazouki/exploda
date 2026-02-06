export default function OurMissionTitle() {
  return (
    <div
      className="
        flex
        flex-col
        items-start
        gap-[16px]
        md:gap-[10px]
        lg:gap-[12px]
        xl:gap-[16px]
      "
    >
      {/* Our Mission (gradient label) */}
      <span
        className="
          font-creato
          font-bold
          text-[18px]
          md:text-[12px]
          lg:text-[14px]
          xl:text-[18px]
          leading-[21px]
          md:leading-[14px]
          lg:leading-[17px]
          xl:leading-[21px]
          uppercase
          bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
          bg-clip-text
          text-transparent
        "
      >
        Our Mission
      </span>

      {/* Main title */}
      <h1
        className="
          font-creato
          font-medium
          text-[64px]
          md:text-[32px]
          lg:text-[42px]
          xl:text-[64px]
          leading-[76px]
          md:leading-[38px]
          lg:leading-[50px]
          xl:leading-[76px]
          uppercase
          text-[#1E1E1E]
        "
      >
        OUR MISSION
      </h1>
    </div>
  );
}
