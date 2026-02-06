import MissionDescription from "./MissionDescription";
import OurMissionTitle from "./OurMissionTitle";

export default function MissionPage() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7]">
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto

          px-[60px]
          md:px-[30px]
          lg:px-[45px]
          xl:px-[60px]

          py-[160px]
          md:py-[90px]
          lg:py-[120px]
          xl:py-[160px]

          bg-[#F5F4F7]
          overflow-hidden
        "
      >
        <OurMissionTitle />

        <div
          className="
            mt-[80px]
            md:mt-[40px]
            lg:mt-[60px]
            xl:mt-[80px]

            grid
            grid-cols-1
            lg:grid-cols-2
            gap-[60px]
            md:gap-[32px]
            lg:gap-[48px]
            xl:gap-[60px]
            items-center
          "
        >
          <MissionDescription />
        </div>
      </div>
    </section>
  );
}
