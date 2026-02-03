// components/hero/TitleBlock.tsx

export default function TitleBlock() {
  return (
    <div
      className="
        absolute
        left-[60px]
        top-[614px]
        w-[962px]
        h-[206px]
        flex
          whitespace-nowrap
        flex-col
        font-[Creato_Display]
      "
    >
      {/* World Class */}
      <div
        className="
          w-[839px]
          h-[85px]
          text-[120px]
          leading-[120px]
          font-normal
          uppercase
        
          text-[#1E1E1E]
        "
      >
        World Class
      </div>

      {/* Ui Ux Design */}
      <div
        className="
          w-[757px]
          h-[85px]
          mt-[36px]
          text-[120px]
          leading-[120px]
          font-normal
          uppercase
          text-[#1E1E1E]
        "
      >
        Ui Ux Design.
      </div>
    </div>
  );
}
