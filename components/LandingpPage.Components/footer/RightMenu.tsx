export default function RightMenu() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[56px]
        md:top-[28px]
        lg:top-[40px]
        xl:top-[56px]
        -translate-x-1/2
        md:translate-x-[200px]
        lg:translate-x-[300px]
        xl:translate-x-[584.5px]
        w-[220px]
        md:w-[180px]
        lg:w-[151px]
        xl:w-[151px]
        h-auto
        flex
        flex-col
        items-end
        justify-center
        gap-[10px]
      "
    >
      {/* Our Projects + */}
      <div className="flex items-start justify-end gap-[6px] w-full h-auto">
        <span className="text-[16px] md:text-[13px] lg:text-[18px] font-medium uppercase tracking-[0.01em] text-white">
          Our Projects
        </span>
        <span className="text-[20px] md:text-[18px] lg:text-[24px] text-[#BB9CFB]">+</span>
      </div>

      <span className="text-[14px] md:text-[11px] lg:text-[18px] text-white/50 uppercase">Design</span>
      <span className="text-[14px] md:text-[11px] lg:text-[18px] text-white/50 uppercase">Development</span>
      <span className="text-[14px] md:text-[11px] lg:text-[18px] text-white/50 uppercase">Leave a review</span>
      <span className="text-[14px] md:text-[11px] lg:text-[18px] text-white/50 uppercase">About Us</span>
      <span className="text-[14px] md:text-[11px] lg:text-[18px] text-white/50 uppercase">Get in Touch</span>
    </div>
  );
}