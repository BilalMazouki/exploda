export default function TeamHeader() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[1440px]
        mx-auto

        pt-[98px]
        md:pt-[60px]
        lg:pt-[75px]
        xl:pt-[98px]

        px-[60px]
        md:px-[30px]
        lg:px-[45px]
        xl:px-[60px]

        flex
        flex-col
        items-center
        gap-[20px]
        md:gap-[14px]
        lg:gap-[17px]
        xl:gap-[20px]
      "
    >
      {/* Main title */}
      <div className="font-creato uppercase text-[#1E1E1E] relative">
        <h1
          className="
            pl-28
            w-full
            max-w-[876px]
            font-medium
            text-[64px]
            md:text-[36px]
            lg:text-[48px]
            xl:text-[64px]
            leading-[76px]
            md:leading-[42px]
            lg:leading-[56px]
            xl:leading-[76px]
          "
        >
          Creative mind
        </h1>

        <h1
          className="
            w-full
            max-w-[876px]
            font-medium
            text-[64px]
            md:text-[36px]
            lg:text-[48px]
            xl:text-[64px]
            leading-[76px]
            md:leading-[42px]
            lg:leading-[56px]
            xl:leading-[76px]
          "
        >
          Behind{" "}
          <span className="font-light italic">
            Exploda
          </span>
        </h1>

        {/* OUR TEAM label (decorative, relative to title) */}
        <span
          className="
            absolute
            right-[0px]
            top-[120px]
            md:top-[85px]
            lg:top-[100px]
            xl:top-[120px]

            font-creato
            font-bold
            text-[18px]
            md:text-[13px]
            lg:text-[15px]
            xl:text-[18px]
            uppercase
            bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
            bg-clip-text
            text-transparent
            whitespace-nowrap
          "
        >
          OUR TEAM
        </span>
      </div>
    </div>
  );
}
