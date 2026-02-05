import CountryButtons from "./CountryButtons";

export default function ActiveCountries() {
  return (
    <section className="
      w-full
      md:w-full
      lg:w-[500px]
      xl:w-[568px]
      flex 
      flex-col 
      gap-[22px]
      md:gap-[18px]
      lg:gap-[20px]
      xl:gap-[22px]
    ">
      {/* Title */}
      <div className="
        flex 
        flex-col 
        gap-8
        md:gap-6
        lg:gap-7
        xl:gap-8
      ">
        <h2 className="
          text-[64px]
          md:text-[36px]
          lg:text-[48px]
          xl:text-[64px]
          leading-[76px]
          md:leading-[42px]
          lg:leading-[56px]
          xl:leading-[76px]
          font-medium 
          uppercase 
          text-[#1E1E1E]
        ">
          Country we are Active in
        </h2>

        <p className="
          text-[21px]
          md:text-[16px]
          lg:text-[18px]
          xl:text-[21px]
          leading-[25px]
          md:leading-[19px]
          lg:leading-[22px]
          xl:leading-[25px]
          font-medium 
          uppercase 
          text-[#1E1E1E]
        ">
          Website design agency
        </p>
        <CountryButtons />
      </div>

      {/* Mobile */}
      <div className="
        flex 
        flex-col 
        gap-8
        md:gap-6
        lg:gap-7
        xl:gap-8
      ">
        <p className="
          text-[21px]
          md:text-[16px]
          lg:text-[18px]
          xl:text-[21px]
          leading-[25px]
          md:leading-[19px]
          lg:leading-[22px]
          xl:leading-[25px]
          font-medium 
          uppercase 
          text-[#1E1E1E]
        ">
          Mobile app design agency
        </p>

        <CountryButtons />
      </div>

      {/* UI/UX */}
      <div className="
        flex 
        flex-col 
        gap-8
        md:gap-6
        lg:gap-7
        xl:gap-8
      ">
        <p className="
          text-[21px]
          md:text-[16px]
          lg:text-[18px]
          xl:text-[21px]
          leading-[25px]
          md:leading-[19px]
          lg:leading-[22px]
          xl:leading-[25px]
          font-medium 
          uppercase 
          text-[#1E1E1E]
        ">
          UI UX design agency
        </p>

        <CountryButtons />
      </div>
    </section>
  );
}