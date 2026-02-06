export default function RightMenu() {
  return (
    <div
      className="
        absolute
        left-[640px]
       lg:left-[520px]
       md:left-[350px]
        top-[56px]
        md:top-[28px]
        lg:top-[40px]
        xl:top-[56px]
        -translate-x-1/2
        md:translate-x-[200px]
        lg:translate-x-[300px]
        xl:translate-x-[584.5px]
        w-[220px]
        md:w-[180px]
        lg:w-[151px]
        xl:w-[151px]
        h-auto
        flex
        flex-col
        items-end
        justify-center
        gap-[10px]

      "
    >
      {/* Our Projects + */}
      <div className="flex items-center justify-end gap-[2px] w-full">
        <div
          className="
            text-[18px]
            md:text-[12px]
            lg:text-[15px]
            xl:text-[18px]
            leading-[21px]
            md:leading-[14px]
            lg:leading-[18px]
            xl:leading-[21px]
            font-medium
            uppercase
            tracking-[0.01em]
            text-white
          "
        >
          Our Projects
        </div>
        <div
          className="
            text-[24px]
            md:text-[16px]
            lg:text-[20px]
            xl:text-[24px]
            leading-[29px]
            md:leading-[20px]
            lg:leading-[24px]
            xl:leading-[29px]
            font-medium
            uppercase
            text-[#BB9CFB]
          "
        >
          +
        </div>
      </div>

      {/* Design */}
      <div
        className="
          w-[71px]
          md:w-[50px]
          lg:w-[60px]
          xl:w-[71px]
          text-[18px]
          md:text-[12px]
          lg:text-[15px]
          xl:text-[18px]
          leading-[21px]
          md:leading-[14px]
          lg:leading-[18px]
          xl:leading-[21px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-right
          text-[GRAY]
        "
      >
        Design
      </div>

      {/* Development */}
      <div
        className="
          w-[133px]
          md:w-[90px]
          lg:w-[110px]
          xl:w-[133px]
          text-[18px]
          md:text-[12px]
          lg:text-[15px]
          xl:text-[18px]
          leading-[21px]
          md:leading-[14px]
          lg:leading-[18px]
          xl:leading-[21px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-right
                    text-[GRAY]

        "
      >
        Development
      </div>

      {/* About Us */}
      <div
        className="
          w-[91px]
          md:w-[62px]
          lg:w-[75px]
          xl:w-[91px]
          text-[18px]
          md:text-[12px]
          lg:text-[15px]
          xl:text-[18px]
          leading-[21px]
          md:leading-[14px]
          lg:leading-[18px]
          xl:leading-[21px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-right
                    text-[GRAY]

        "
      >
        About Us
      </div>

      {/* Get in Touch */}
      <div
        className="
          w-[129px]
          md:w-[88px]
          lg:w-[106px]
          xl:w-[129px]
          text-[18px]
          md:text-[12px]
          lg:text-[15px]
          xl:text-[18px]
          leading-[21px]
          md:leading-[14px]
          lg:leading-[18px]
          xl:leading-[21px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-right
                    text-[GRAY]

        "
      >
        Get in Touch
      </div>
      

    </div>
  );
}