import TeamCard from "./TeamCard";

export default function TeamGrid() {
  return (
    <div className="
      absolute 
      left-[60px]
      md:left-[30px]
      lg:left-[40px]
      xl:left-[60px]
      top-[314px]
      md:top-[200px]
      lg:top-[250px]
      xl:top-[314px]
      w-[1320px]
      md:w-[720px]
      lg:w-[950px]
      xl:w-[1320px]
      flex 
      flex-col 
      gap-[16px]
      md:gap-[12px]
      lg:gap-[14px]
      xl:gap-[16px]
    ">
      {/* Row 1: image | image */}
      <div className="flex gap-[16px] md:gap-[12px] lg:gap-[14px] xl:gap-[16px]">
        <TeamCard image="/dummy.png" layout="image-left" />
        <TeamCard image="/dummy.png" layout="image-left" />
      </div>

      {/* Row 2: text-left | image-right */}
      <div className="flex gap-[16px] md:gap-[12px] lg:gap-[14px] xl:gap-[16px]">
        <TeamCard image="/dummy.png" layout="image-right" />
        <TeamCard image="/dummy.png" layout="image-left" />
      </div>

      {/* Row 3: image | image */}
      <div className="flex gap-[16px] md:gap-[12px] lg:gap-[14px] xl:gap-[16px]">
        <TeamCard image="/dummy.png" layout="image-left" />
        <TeamCard image="/dummy.png" layout="image-left" />
      </div>

      {/* Row 4: image-left | text-right */}
      <div className="flex gap-[16px] md:gap-[12px] lg:gap-[14px] xl:gap-[16px]">
        <TeamCard image="/dummy.png" layout="image-left" />
        <TeamCard image="/dummy.png" layout="image-right" />
      </div>
    </div>
  );
}