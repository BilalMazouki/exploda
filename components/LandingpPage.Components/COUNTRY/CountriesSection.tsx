// components/countries/CountriesSection.tsx

import ActiveCountriesAgencies from "./ActiveCountriesAgencies";
import CountryDiamond from "./CountryDiamond";
export default function CountriesSection() {
  /**
   * 👉 REAL BACK-END / CMS DATA
   *
   * - Section title
   * - Agency titles
   * - Country names
   * - Flags / images
   *
   * All can later come from API or CMS.
   */

  return (
    <section
      className="
        relative
        w-[1440px]
        h-[808px]
        bg-[#F5F4F7]
        overflow-hidden
      "
    >
     
      {/* ================= LEFT CONTENT ================= */}
      <div
        className="
         absolute
          left-[76px]
          top-[13px]
          w-[568px]
        "
      >
        <ActiveCountriesAgencies />
      </div>
      {/* ================= RIGHT CONTENT ================= */}
      <div
        className="
          absolute
          left-[644px]
          top-[0px]
         ">
<CountryDiamond />
        </div>

     

    </section>
  );
}
