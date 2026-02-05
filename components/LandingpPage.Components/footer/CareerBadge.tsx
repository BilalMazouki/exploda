export default function CareerBadge() {
  return (
    <div
      className="
        absolute
        left-[60px]
        md:left-[20px]
        lg:left-[35px]
        xl:left-[60px]
        top-[56px]
        md:top-[16px]
        lg:top-[28px]
        xl:top-[56px]
        flex items-center gap-[8px]
        md:gap-[6px]
        lg:gap-[7px]
      "
    >
      <div className="box-border flex items-center justify-center w-[22px] md:w-[14px] lg:w-[18px] xl:w-[22px] h-[22px] md:h-[14px] lg:h-[18px] xl:h-[22px] border-[1.7px] md:border-[1px] rounded-[12px] border-[#898989]">
        <span className="text-[13px] md:text-[9px] lg:text-[11px] text-[#898989]">C</span>
      </div>

      <span className="text-[18px] md:text-[11px] lg:text-[14px] text-white/50 uppercase">
        Career 2025
      </span>
    </div>
  );
}