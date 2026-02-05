import TurningIdeasText from "./TurningIdeasText";
import CareerBadge from "./CareerBadge";
import GetInTouchRow from "./GetInTouchRow";
import GetInTouchButton from "./GetInTouchButton";
import RightMenu from "./RightMenu";
import ExplodaMask from "./ExplodaMask";
import FloatingTags from "./FloatingTags";

export default function OurDesignProcess() {
  return (
    <section
      className="
        relative
        w-[1440px] h-[585px]
        bg-[#121212]
        overflow-hidden
      "
    >
      <TurningIdeasText />
      <CareerBadge />
      <GetInTouchRow />
      <GetInTouchButton />
      <RightMenu />
      <ExplodaMask />
      <FloatingTags />
    </section>
  );
}
