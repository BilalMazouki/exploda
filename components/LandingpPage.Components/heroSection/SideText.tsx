export default function SideText() {
  return (
    <div
      className="
        absolute
        left-[1104px]
        md:left-[590px]
        lg:left-[780px]
        xl:left-[1104px]
        top-[611px]
        md:top-[480px]
        lg:top-[570px]
        xl:top-[611px]
        w-[286px]
        md:w-[165px]
        lg:w-[200px]
        xl:w-[286px]
        h-[72px]
        md:h-[50px]
        lg:h-[60px]
        xl:h-[72px]
      "
    >
      <div
        className="
          text-[20px]
          md:text-[12px]
          lg:text-[16px]
          xl:text-[20px]
          leading-[24px]
          md:leading-[14px]
          lg:leading-[19px]
          xl:leading-[24px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-[#1E1E1E]
        "
      >
        Turning ideas <br className="flex justify-end"></br>into{" "}
        <span
          className="
            text-[20px]
            md:text-[12px]
            lg:text-[16px]
            xl:text-[20px]
            leading-[24px]
            md:leading-[14px]
            lg:leading-[19px]
            xl:leading-[24px]
            font-medium
            uppercase
            tracking-[0.01em]
            text-[rgba(30,30,30,0.4)]
          "
        >
          powerful online
        </span>
        <br></br>
        <div className="flex justify-end mr-12 md:mr-8 lg:mr-10 xl:mr-12">
          <span className="">presence</span>
        </div>
      </div>
    </div>
  );
}