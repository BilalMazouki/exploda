import Logos from "./Logos";
import MissionDescription from "./MissionDescription";
import MissionImage from "./MissionImage";
import OurMissionTitle from "./OurMissionTitle";

export default function MissionPage() {
  return (
    <section>
    <main
      className="
        relative
        w-[1440px]
        h-[902px]
        overflow-hidden
        bg-[#F5F4F7]
      "
    >
      <OurMissionTitle />
      <MissionDescription />
      <MissionImage />
    </main>
    <Logos />
</section>
  );
}
