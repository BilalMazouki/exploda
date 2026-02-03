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
      <div className="relative w-[1440px] h-[1400px] overflow-hidden">

        <div className="">
          <Decor />
        </div>

        <div className=" flex">
          <Navbar />
        </div>

        <div className="">
          <Stats />
        </div>

        <div className="">
          <TitleBlock />
        </div>

        <div className="">
          <RightMenu />
        </div>

        <div className="">
          <SideText />
        </div>

        <div className="">
          <Services />
        </div>
        <div className="absolute top-[1121px]">
          <img src="./Frame28.png" alt="sdd" width={1440} height={279}
            className="w-full h-auto pointer-events-none" />

        </div>

      </div>
    </section>
  );
}