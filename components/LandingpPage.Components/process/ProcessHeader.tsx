export default function ProcessHeader() {
  return (
    <>
      {/* Left block (Our process + title) */}
      <div
        className="
          absolute
          left-[60px]
          md:left-[30px]
          lg:left-[45px]
          xl:left-[60px]
          top-[124px]
          md:top-[80px]
          lg:top-[100px]
          xl:top-[124px]
          w-[593px]
          md:w-[350px]
          lg:w-[450px]
          xl:w-[593px]
          h-[185px]
          md:h-auto
          lg:h-auto
          xl:h-[185px]
          flex
          flex-col
          gap-[12px]
          md:gap-[8px]
          lg:gap-[10px]
          xl:gap-[12px]
          opacity-100
        "
      >
        <p
          className="
            text-[12px]
            md:text-[10px]
            lg:text-[11px]
            xl:text-[12px]
            uppercase
            tracking-[0.2em]
            md:tracking-[0.15em]
            lg:tracking-[0.18em]
            xl:tracking-[0.2em]
            text-purple-400
          "
        >
          Our process
        </p>

        <h2
          className="
            text-[56px]
            md:text-[32px]
            lg:text-[42px]
            xl:text-[56px]
            leading-[68px]
            md:leading-[38px]
            lg:leading-[50px]
            xl:leading-[68px]
            uppercase
            font-medium
            text-black
          "
        >
          How do we
          <br />
          make our pieces.
        </h2>
      </div>

      {/* Right description block */}
      <div
        className="
          absolute
          left-[947px]
          md:left-[400px]
          lg:left-[520px]
          xl:left-[947px]
          top-[190px]
          md:top-[130px]
          lg:top-[160px]
          xl:top-[190px]
          w-[433px]
          md:w-[330px]
          lg:w-[450px]
          xl:w-[433px]
          h-[104px]
          md:h-auto
          lg:h-auto
          xl:h-[104px]
          flex
          flex-col
          gap-[4px]
          opacity-100
        "
      >
        <p className="
          text-[14px]
          md:text-[11px]
          lg:text-[12px]
          xl:text-[14px]
          uppercase 
          text-black
        ">
          Over the years,
        </p>

        <p
          className="
            text-[14px]
            md:text-[11px]
            lg:text-[12px]
            xl:text-[14px]
            uppercase
            leading-[22px]
            md:leading-[18px]
            lg:leading-[20px]
            xl:leading-[22px]
            text-gray-400
          "
        >
          We've perfected a design process delivering top-tier web and mobile app
          experiences every single time
        </p>
      </div>
    </>
  );
}