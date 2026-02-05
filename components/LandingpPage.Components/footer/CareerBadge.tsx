export default function CareerBadge() {
  return (
    <div
      className="
        absolute
        left-[60px] top-[56px]
        flex items-center gap-[8px]
        w-[149px] h-[22px]
      "
    >
      {/* Circle */}
      <div
        className="
          box-border
          flex items-center justify-center
          w-[22px] h-[22px]
          border-[1.69231px] border-[#898989]
          rounded-[15.2308px]
          p-[3.38462px]
        "
      >
        <span
          className="
            text-[13.5385px] leading-[16px]
            font-medium uppercase
            tracking-[0.01em]
            text-[#898989]
          "
        >
          C
        </span>
      </div>

      {/* Text */}
      <span
        className="
          text-[18px] leading-[21px]
          font-medium uppercase
          tracking-[0.01em]
          text-white/50
          whitespace-nowrap
        "
      >
        Career 2025
      </span>
    </div>
  );
}
