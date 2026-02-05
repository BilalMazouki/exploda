import MissionDescription from "./MissionDescription";
import MissionImage from "./MissionImage";
import OurMissionTitle from "./OurMissionTitle";

export default function MissionPage() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7]">
      {/* 
        RESPONSIVE CONTAINER (MD and above):
        - Mobile (< 768px): Your existing mobile version
        - Tablet (768px - 1023px): 768px width
        - Desktop (1024px - 1439px): 1024px width
        - Large Desktop (1440px+): Fixed 1440px (Figma)
      */}
      <div
        className="
          relative
          w-[1440px]
          md:w-[768px]
          lg:w-[1024px]
          xl:w-[1440px]
          h-[902px]
          md:h-[600px]
          lg:h-[750px]
          xl:h-[902px]
          overflow-hidden
          bg-[#F5F4F7]
        "
      >
        <OurMissionTitle />
        <MissionDescription />
        <MissionImage />
      </div>
    </section>
  );
}