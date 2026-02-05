import CountryButtons from "./CountryButtons";

export default function ActiveCountries() {
  return (
    <section className="w-[568px] flex flex-col gap-[22px]">
      {/* Title */}
      <div className="flex flex-col gap-8">
        <h2 className="text-[64px] leading-[76px] font-medium uppercase text-[#1E1E1E]">
          Country we are Active in
        </h2>

        <p className="text-[21px] leading-[25px] font-medium uppercase text-[#1E1E1E]">
          Website design agency
        </p>
        <CountryButtons />
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-8">
        <p className="text-[21px] leading-[25px] font-medium uppercase text-[#1E1E1E]">
          Mobile app design agency
        </p>

        <CountryButtons />
      </div>

      {/* UI/UX */}
      <div className="flex flex-col gap-8">
        <p className="text-[21px] leading-[25px] font-medium uppercase text-[#1E1E1E]">
          UI UX design agency
        </p>

        <CountryButtons />
      </div>
    </section>
  );
}

