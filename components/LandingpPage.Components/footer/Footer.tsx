import TurningIdeasText from "./TurningIdeasText";
import CareerBadge from "./CareerBadge";
import GetInTouchRow from "./GetInTouchRow";
import GetInTouchButton from "./GetInTouchButton";
import RightMenu from "./RightMenu";
import ExplodaMask from "./ExplodaMask";
import FloatingTags from "./FloatingTags";

export default function Footer() {
  return (
    <section className="w-full flex justify-center bg-[#121212] overflow-hidden">
      <div
        className="
          relative
          w-[1440px]
          md:w-[768px]
          lg:w-[1024px]
          xl:w-[1440px]
          h-[585px]
          md:h-[420px]
          lg:h-[500px]
          xl:h-[585px]
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
      </div>
    </section>
  );
}