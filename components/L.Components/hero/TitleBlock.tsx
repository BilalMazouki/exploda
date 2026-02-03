// components/hero/TitleBlock.tsx

export default function TitleBlock() {
  return (
    <div
      className="
          whitespace-nowrap
        flex-col
        font-[Creato_Display]
        uppercase
      "
    >
      {/* World Class */}
      <div
        className="
         absolute
         top-[614px]
         left-[60px]
          text-[120px]
          leading-[120px]
          
          text-[#1E1E1E]
        "
      >
        World Class
      </div>

      {/* Ui Ux Design */}
      <div
        className="
         absolute
         top-[735px]
         left-[85px]
          text-[120px]
          leading-[120px]
          
          text-[#1E1E1E]
        "
      >
        Ui Ux Design.
      </div>
    </div>
  );
}
