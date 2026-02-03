export default function StatsRow() {
  return (
    <div className="flex items-center gap-[63px]">

      {/* STAT 1 */}
      <div className="flex h-[100px] w-[192px] flex-col justify-center gap-[12px]">
        <div className="text-[48px] font-medium uppercase leading-[57px] text-[#BB9CFB]">
          +2016
        </div>
        <div className="text-[18px] font-medium uppercase leading-[21px] text-[#1E1E1E]">
          Years of establish
        </div>
      </div>

      {/* STAT 2 */}
      <div className="flex h-[100px] w-[202px] flex-col justify-center gap-[12px]">
        <div className="text-[48px] font-medium uppercase leading-[57px] text-[#BB9CFB]">
          +199
        </div>
        <div className="text-[18px] font-medium uppercase leading-[21px] text-[#1E1E1E]">
          Clients are satisfied
        </div>
      </div>

      {/* STAT 3 */}
      <div className="flex h-[100px] w-[183px] flex-col justify-center gap-[12px]">
        <div className="text-[48px] font-medium uppercase leading-[57px] text-[#BB9CFB]">
          +23
        </div>
        <div className="text-[18px] font-medium uppercase leading-[21px] text-[#1E1E1E]">
          Projects in works
        </div>
      </div>

    </div>
  );
}
