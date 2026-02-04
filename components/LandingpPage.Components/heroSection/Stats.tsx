// components/hero/Stats.tsx

export default function Stats() {
  return (
<div
  className="
    absolute
    left-[60px]
    top-[467px]
    w-[608px]
    h-[83px]
    flex
    items-start
    gap-[40px]
    font-[Creato_Display] 
  "
>
  {/* +300 */}
  <div className="w-[150px] h-[81px] flex flex-col gap-[10px] pt-[6px]">
    <div className="text-[48px] leading-[29px] font-medium uppercase">
      <span className="text-[#BB9CFB]">+</span>
      <span className="text-[#1E1E1E]">300</span>
    </div>
    <div className="text-[16px] leading-[19px] font-medium uppercase text-[rgba(30,30,30,0.6)] text-right">
      Success Project
    </div>
  </div>

  {/* Divider */}
  <div className="w-[2px] h-[83px] bg-[linear-gradient(180deg,_rgba(217,217,217,0.3)_0%,_#D9D9D9_50.96%,_rgba(217,217,217,0.3)_95.19%)]" />

  {/* +200 */}
  <div className="w-[164px] h-[83px] flex flex-col gap-[10px] pt-[6px]">
    <div className="text-[48px] leading-[29px] font-medium uppercase">
      <span className="text-[#BB9CFB]">+</span>
      <span className="text-[#1E1E1E]">200</span>
    </div>
    <div className="text-[16px] leading-[19px] font-medium uppercase text-[rgba(30,30,30,0.6)] text-right">
      Product Launches
    </div>
  </div>

  {/* Divider */}
  <div className="w-[2px] h-[83px] bg-[linear-gradient(180deg,_rgba(217,217,217,0.3)_0%,_#D9D9D9_50.96%,_rgba(217,217,217,0.3)_95.19%)]" />

  {/* +100 */}
  <div className="w-[130px] h-[83px] flex flex-col gap-[10px] pt-[6px]">
    <div className="text-[48px] leading-[29px] font-medium uppercase">
      <span className="text-[#BB9CFB]">+</span>
      <span className="text-[#1E1E1E]">100</span>
    </div>
    <div className="text-[16px] leading-[19px] whitespace-nowrap font-medium uppercase text-[rgba(30,30,30,0.6)] text-right">
      Startup Raised
    </div>
  </div>
</div>
  );
}
