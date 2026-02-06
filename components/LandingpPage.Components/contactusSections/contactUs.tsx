import Cta from "./Cta";
import GuidanceText from "./GuidanceText";
import QuoteForm from "./QuoteForm";
import QuoteHeadline from "./QuoteHeadline";
import StatsRow from "./StatsRow";
import StatusBadge from "./StatusBadge";

export default function ContactUsHero() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7] overflow-hidden">
      {/* 
        RESPONSIVE CONTAINER (MD and above):
        - Mobile (< 768px): Your existing mobile version
        - Tablet (768px - 1023px): 768px width, SIDE-BY-SIDE layout
        - Desktop (1024px - 1439px): 1024px width
        - Large Desktop (1440px+): Fixed 1440px (Figma)
      */}
      <div className="
        relative 
        w-[1440px]
        md:w-[768px]
        lg:w-[1024px]
          xl:w-full
        h-[868px]
        md:h-[700px]
        lg:h-[780px]
        xl:h-[868px]
        overflow-hidden
      ">
        
        {/* QuoteHeadline - left side */}
        <div className="
          absolute
          left-[60px]
          md:left-[30px]
          lg:left-[40px]
          xl:left-[60px]
          top-[124px]
          md:top-[80px]
          lg:top-[100px]
          xl:top-[124px]
        ">
          <QuoteHeadline />
        </div>
        
        {/* GuidanceText - right side, above form */}
        <div className="
          absolute
          left-[1067px]
          md:left-[420px]
          lg:left-[580px]
          xl:left-[1067px]
          top-[124px]
          md:top-[80px]
          lg:top-[100px]
          xl:top-[124px]
        ">
          <GuidanceText />
        </div>
        
        {/* QuoteForm - right side */}
        <div className="
          absolute
          left-[878px]
          md:left-[360px]
          lg:left-[510px]
          xl:left-[878px]
          top-[224px]
          md:top-[180px]
          lg:top-[200px]
          xl:top-[224px]
        ">
          <QuoteForm />
        </div>
        
        {/* StatusBadge - bottom right, before CTA */}
        <div className="
          absolute
          left-[877px]
          md:left-[360px]
          lg:left-[510px]
          xl:left-[877px]
          top-[720px]
          md:top-[580px]
          lg:top-[650px]
          xl:top-[720px]
        ">
          <StatusBadge />
        </div>
        
        {/* Cta - bottom right */}
        <div className="
          absolute
          left-[1224px]
          md:left-[600px]
          lg:left-[820px]
          xl:left-[1224px]
          top-[705px]
          md:top-[565px]
          lg:top-[635px]
          xl:top-[705px]
        ">
          <Cta />
        </div>
        
        {/* StatsRow - bottom left */}
        <div className="
          absolute
          left-[60px]
          md:left-[30px]
          lg:left-[40px]
          xl:left-[60px]
          top-[668px]
          md:top-[540px]
          lg:top-[600px]
          xl:top-[668px]
        ">
          <StatsRow />
        </div>
        
      </div>
    </section>
  );
}