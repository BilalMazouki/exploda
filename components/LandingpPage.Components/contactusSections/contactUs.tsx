import Cta from "./Cta";
import GuidanceText from "./GuidanceText";
import QuoteForm from "./QuoteForm";
import QuoteHeadline from "./QuoteHeadline";
import StatsRow from "./StatsRow";
import StatusBadge from "./StatusBadge";

export default function ContactUsHero() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7] overflow-hidden">
      <div className="relative w-[1440px] h-[868px] overflow-hidden">
        
        {/* StatsRow - top left with 60px margin */}
        <div className="absolute left-[60px] top-[668px]">
          <StatsRow />
        </div>
        
        {/* QuoteHeadline - left aligned */}
        <div className="absolute left-[60px] top-[124px]">
          <QuoteHeadline />
        </div>
        
        {/* GuidanceText - right aligned */}
        <div className="absolute left-[1067px] top-[124px]">
          <GuidanceText />
        </div>
        
        {/* QuoteForm - right aligned */}
        <div className="absolute left-[878px] top-[224px]">
          <QuoteForm />
        </div>
        
        {/* StatusBadge - bottom left */}
        <div className="absolute left-[877px] top-[720px]">
          <StatusBadge />
        </div>
        
        {/* Cta - bottom right */}
        <div className="absolute left-[1224px] top-[705px]">
          <Cta />
        </div>
        
      </div>
    </section>
  );
}