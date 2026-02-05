export default function GetInTouchButton() {
  return (
    <div
      className="
        absolute
        left-[540px] top-[220px]
        w-[156px] h-[49px]
        flex flex-col items-center
        isolate
      "
    >
      {/* Button */}
      <div
        className="
          z-[1]
          w-[156px] h-[44px]
          flex items-center justify-center
          px-[20px] py-[13px] pr-[25px]
          gap-[8px]
          rounded-[8px]
          bg-[rgba(30,30,30,0.2)]
          mt-[-15px]
        "
      >
        <span
          className="
            text-[16px] leading-[19px]
            font-medium uppercase
            tracking-[0.01em]
            text-center
            bg-[linear-gradient(91.04deg,#FFF5F5_9.68%,#E6E5FF_48.35%,#D4C6F5_78.09%,#FFFFFF_98.06%)]
            bg-clip-text text-transparent
          "
        >
          Get in touch
        </span>
      </div>

      {/* Glow */}
      <div
        className="
          z-0
          w-[119px] h-[20px]
          bg-[linear-gradient(90deg,#8B63E8_0%,#60B7E3_100%)]
          blur-[16.9px]
        "
      />
    </div>
  );
}
