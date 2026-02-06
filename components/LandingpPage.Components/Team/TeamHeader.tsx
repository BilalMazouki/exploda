export default function TeamHeader() {
  return (
    <div
      className="
        absolute
        left-1/2
        -translate-x-1/2
        top-[98px]
        md:top-[60px]
        lg:top-[75px]
        xl:top-[98px]
        w-[1320px]
        md:w-[720px]
        lg:w-[950px]
        xl:w-[1320px]
        h-auto
        flex
        flex-col
        justify-center
        items-center
        pl-[74px]
        md:pl-[40px]
        lg:pl-[55px]
        xl:pl-[74px]
        gap-[20px]
        md:gap-[14px]
        lg:gap-[17px]
        xl:gap-[20px]
        isolate
      "
    >
     {/* Main title */}
<div
  className="
    font-creato
    uppercase
    text-[#1E1E1E]
    z-0
  "
>
  {/* Line 1 */}
  <h1
    className=" pl-28
      w-full
      md:w-[600px]
      lg:w-[750px]
      xl:w-[876px]
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

  {/* Line 2 */}
  <h1
    className="
      w-full
      md:w-[600px]
      lg:w-[750px]
      xl:w-[876px]
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
</div>

      {/* OUR TEAM label */}
      <span
        className="
          absolute
          left-[887px]
          md:left-[590px]
          lg:left-[730px]
          xl:left-[887px]
          top-[120px]
          md:top-[85px]
          lg:top-[100px]
          xl:top-[120px]
          w-[94px]
          md:w-[70px]
          lg:w-[80px]
          xl:w-[94px]
          h-[21px]
          md:h-[18px]
          lg:h-[20px]
          xl:h-[21px]
          flex
          items-center
          font-creato
          font-bold
          text-[18px]
          md:text-[13px]
          lg:text-[15px]
          xl:text-[18px]
          leading-[21px]
          md:leading-[16px]
          lg:leading-[18px]
          xl:leading-[21px]
          uppercase
          bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
          bg-clip-text
          text-transparent
          z-10
        "
      >
        OUR TEAM
      </span>
    </div>
  );
}