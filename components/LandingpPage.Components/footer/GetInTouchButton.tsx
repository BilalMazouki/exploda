export default function GetInTouchButton() {
  return (
    <div
      className="
        absolute
        left-[540px]
        md:left-[320px]
        lg:left-[430px]
        xl:left-[540px]
        top-[220px]
        md:top-[110px]
        lg:top-[150px]
        xl:top-[220px]
        w-[156px] md:w-[110px] lg:w-[130px] xl:w-[156px]
        h-[49px] md:h-[34px] lg:h-[40px] xl:h-[49px]
        flex flex-col items-center isolate
      "
    >
      <div className="z-[1] w-full h-full flex items-center justify-center rounded-[8px] md:rounded-[6px] bg-[rgba(30,30,30,0.2)] -mt-[15px] md:-mt-[8px] lg:-mt-[12px]">
        <span className="text-[16px] md:text-[11px] lg:text-[13px] text-transparent bg-clip-text bg-[linear-gradient(91.04deg,#FFF5F5_9.68%,#E6E5FF_48.35%,#D4C6F5_78.09%)] uppercase font-medium">Get in touch</span>
      </div>
      <div className="z-0 mt-2 w-[119px] md:w-[80px] lg:w-[100px] xl:w-[119px] h-[20px] md:h-[12px] lg:h-[14px] bg-[linear-gradient(90deg,#8B63E8_0%,#60B7E3_100%)] blur-[16.9px] md:blur-[9px] lg:blur-[12px]" />
    </div>
  );
}