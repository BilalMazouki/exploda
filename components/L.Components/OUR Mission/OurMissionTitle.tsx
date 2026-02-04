export default function OurMissionTitle() {
  return (
    <div
      className="
        absolute
        left-[60px]
        top-[124px]
       
        flex
        flex-col
        items-start
        gap-[16px]
        
      "
    >
      {/* Our Mission (gradient label) */}
      <div
        className="
          
          flex
          
          font-creato
          font-bold
          text-[18px]
          leading-[21px]
          uppercase
          bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
          bg-clip-text
          text-transparent
          flex-none
          self-stretch
        "
      >
        Our Mission
      </div>

      {/* OUR Mission (title) */}
      <h1
        className="
          w-[410px]
          h-[76px]
          font-creato
          font-medium
          text-[64px]
          leading-[76px]
          text-center
          uppercase
          text-[#1E1E1E]
          flex-none
          whitespace-pre"
      >
        OUR Mission
      </h1>
    </div>
  );
}
