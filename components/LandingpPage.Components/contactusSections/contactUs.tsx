import Cta from "./Cta";
import GuidanceText from "./GuidanceText";
import QuoteForm from "./QuoteForm";
import QuoteHeadline from "./QuoteHeadline";
import StatsRow from "./StatsRow";
import StatusBadge from "./StatusBadge";

export default function ContactUsHero() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7] overflow-hidden">
      <div
        className="
          relative
          w-[1440px]
          md:w-[768px]
          lg:w-[1024px]
          xl:w-full
          min-h-[868px]
          md:min-h-[700px]
          lg:h-[780px]
          xl:h-[868px]
        "
      >
        {/* STACK on mobile + md */}
        <div className="flex flex-col justify-center items-center gap-[40px] md:gap-[48px] lg:block">

          {/* QuoteHeadline */}
          <div
            className="
              lg:absolute
              lg:left-[40px]
              xl:left-[60px]
              lg:top-[100px]
              xl:top-[124px]
            "
          >
            <QuoteHeadline />
          </div>

          {/* GuidanceText */}
          <div
            className="
              lg:absolute
              lg:left-[580px]
              xl:left-[1067px]
              lg:top-[100px]
              xl:top-[124px]
            "
          >
            <GuidanceText />
          </div>

          {/* QuoteForm */}
          <div
            className="
              lg:absolute
              lg:left-[510px]
              xl:left-[878px]
              lg:top-[200px]
              xl:top-[224px]
            "
          >
            <QuoteForm />
          </div>

          {/* Status + CTA row on md */}
          <div className="flex gap-4 lg:contents">
            {/* StatusBadge */}
            <div
              className="
                lg:absolute
                lg:left-[510px]
                xl:left-[877px]
                lg:top-[650px]
                xl:top-[720px]
              "
            >
              <StatusBadge />
            </div>

            {/* CTA */}
            <div
              className="
                lg:absolute
                lg:left-[820px]
                xl:left-[1224px]
                lg:top-[635px]
                xl:top-[705px]
              "
            >
              <Cta />
            </div>
          </div>

          {/* StatsRow */}
          <div
            className="
              lg:absolute
              lg:left-[40px]
              xl:left-[60px]
              lg:top-[600px]
              xl:top-[668px]
            "
          >
            <StatsRow />
          </div>

        </div>
      </div>
    </section>
  );
}
