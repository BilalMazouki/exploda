import ActiveCountriesAgencies from "./ActiveCountriesAgencies";
import CountryDiamond from "./CountryDiamond";

export default function CountriesSection() {
  return (
    <section className="w-full flex justify-center bg-[#F5F4F7]">
      {/* 
        RESPONSIVE CONTAINER (MD and above):
        - Mobile (< 768px): Your existing mobile version
        - Tablet (768px - 1023px): 768px width, stacked layout
        - Desktop (1024px - 1439px): 1024px width, side-by-side
        - Large Desktop (1440px+): Fixed 1440px (Figma)
      */}
      <div
        className="
          relative
          w-[1440px]
          md:w-[768px]
          lg:w-[1024px]
          xl:w-full
          h-auto
          md:h-auto
          lg:h-[650px]
          xl:h-[808px]
          bg-[#F5F4F7]
          overflow-hidden
          py-[60px]
          md:py-[50px]
          lg:py-[0px]
          xl:py-[0px]
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            absolute
            md:static
            lg:absolute
            xl:absolute
            left-0
            md:left-0
            lg:left-[40px]
            xl:left-[76px]
            top-0
            md:top-0
            lg:top-[13px]
            xl:top-[13px]
            w-full
            md:w-full
            lg:w-[500px]
            xl:w-[568px]
            px-[30px]
            md:px-[30px]
            lg:px-[0px]
            xl:px-[0px]
          "
        >
          <ActiveCountriesAgencies />
        </div>

        {/* ================= RIGHT CONTENT (DIAMOND) ================= */}
        <div
          className="
            hidden
            lg:block
            absolute
            left-[524px]
            lg:left-[524px]
            xl:left-[644px]
            top-[0px]
          "
        >
          <CountryDiamond />
        </div>
      </div>
    </section>
  );
}