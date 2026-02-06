import Navbar from "./Navbar";
import Stats from "./Stats";
import TitleBlock from "./TitleBlock";
import RightMenu from "./RightMenu";
import SideText from "./SideText";
import Services from "./Services";
import Decor from "./Decor";

export default function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7] overflow-x-hidden">
      {/*
        RESPONSIVE STRATEGY (UNCHANGED CONTENT)
        - Mobile: fluid height, natural scroll
        - Tablet: constrained width
        - Desktop: Figma-based fixed canvas
      */}
      <div
        className="
          relative
          w-full
          md:w-[768px]
          lg:w-[1024px]
          xl:w-[1440px]
          min-h-[100vh]
          md:min-h-[900px]
          lg:min-h-[1100px]
          xl:min-h-[1300px]
        "
      >
        {/* Decorative background (desktop only visual) */}
        <div className="hidden xl:block">
          <Decor />
        </div>

        <Navbar />

        <Stats />

        <TitleBlock />

        <RightMenu />

        <SideText />

        <Services />

        {/* Bottom decorative image */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            bottom-0
            w-full
          "
        >
          <img
            src="/Frame28.png"
            alt="decorative frame"
            width={1440}
            height={279}
            className="w-full h-auto pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
