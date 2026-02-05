import Navbar from "./Navbar";
import Stats from "./Stats";
import TitleBlock from "./TitleBlock";
import RightMenu from "./RightMenu";
import SideText from "./SideText";
import Services from "./Services";
import Decor from "./Decor";

export default function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7] overflow-hidden">
      {/* 
        RESPONSIVE CONTAINER STRATEGY (MD and above only):
        - Mobile (< 768px): Your existing mobile version
        - Tablet (768px - 1023px): 768px width
        - Desktop (1024px - 1439px): 1024px width
        - Large Desktop (1440px+): Fixed 1440px width (Figma design)
      */}
      <div className="
        relative 
        w-[1440px]
        md:w-[768px] 
        lg:w-[1024px] 
        xl:w-[1440px]
        h-[1300px]
        md:h-[900px]
        lg:h-[1100px]
        xl:h-[1300px]
        overflow-hidden
      ">

        {/* Background decorative blobs - show only on xl */}
        <div className="hidden xl:block">
          <Decor />
        </div>

        <div>
          <Navbar />
        </div>

        <div>
          <Stats />
        </div>

        <div>
          <TitleBlock />
        </div>

        <div>
          <RightMenu />
        </div>

        <div>
          <SideText />
        </div>

        <div>
          <Services />
        </div>

        <div className="absolute top-[1121px] md:top-[750px] lg:top-[900px] xl:top-[1121px]">
          <img 
            src="./Frame28.png" 
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