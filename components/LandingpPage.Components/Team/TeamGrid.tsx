import TeamCard from "./TeamCard";

export default function TeamGrid() {
  return (
    <div className="absolute left-[60px] top-[314px] w-[1320px] flex flex-col gap-[16px]">
      {/* Row 1: image | image */}
      <div className="flex gap-[16px]">
        <TeamCard image="/dummy.png" layout="image-left" />
        <TeamCard image="/dummy.png" layout="image-left" />
      </div>

      {/* Row 2: text-left | image-right */}
      <div className="flex gap-[16px]">
        <TeamCard image="/dummy.png" layout="image-right" />
        <TeamCard image="/dummy.png" layout="image-left" />
      </div>

      {/* Row 3: image | image */}
      <div className="flex gap-[16px]">
        <TeamCard image="/dummy.png" layout="image-left" />
        <TeamCard image="/dummy.png" layout="image-left" />
      </div>

      {/* Row 4: image-left | text-right */}
      <div className="flex gap-[16px]">
        <TeamCard image="/dummy.png" layout="image-left" />
        <TeamCard image="/dummy.png" layout="image-right" />
      </div>
    </div>
  );
}
