import Cta from "./Cta";
import GuidanceText from "./GuidanceText";
import QuoteForm from "./QuoteForm";
import QuoteHeadline from "./QuoteHeadline";
import StatsRow from "./StatsRow";
import StatusBadge from "./StatusBadge";

export default function ContactUsHero() {
    return (
        <div className="w-[1440px] h-[868px]">
<section className="px-[60px] py-24">
  <StatsRow />
</section>
<section className="px-[60px] pt-[124px]">
  <QuoteHeadline />
</section>
<section className="flex justify-end px-[60px] pt-[124px]">
  <GuidanceText />
</section>
<section className="flex justify-end px-[60px] pt-56">
  <QuoteForm />
</section>
<section className="px-[60px] pt-[720px]">
  <StatusBadge />
</section>
<section className="flex justify-end px-[60px] pt-[705px]">
  <Cta />
</section>




        </div>
    )}
