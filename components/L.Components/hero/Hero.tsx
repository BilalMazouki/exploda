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
      <div className="relative w-screen h-[997px] overflow-hidden">
        <Decor />
        <Navbar />
        <Stats />
        <TitleBlock />
        <RightMenu />
        <SideText />
        <Services />
      </div>
    </section>
  );
}
