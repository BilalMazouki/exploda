export default function ProcessHeader() {
  return (
    <>
      {/* Left block (Our process + title) */}
      <div
        className="
          absolute
          left-[60px]
          top-[124px]
          w-[593px]
          h-[185px]
          flex
          flex-col
          gap-[12px]
          opacity-100
        "
      >
        <p
          className="
            text-[12px]
            uppercase
            tracking-[0.2em]
            text-purple-400
          "
        >
          Our process
        </p>

        <h2
          className="
            text-[56px]
            leading-[68px]
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
          top-[190px]
          w-[433px]
          h-[104px]
          flex
          flex-col
          gap-[4px]
          opacity-100
        "
      >
        <p className="text-[14px] uppercase text-black">
          Over the years,
        </p>

        <p
          className="
            text-[14px]
            uppercase
            leading-[22px]
            text-gray-400
          "
        >
          We’ve perfected a design process delivering top-tier web and mobile app
          experiences every single time
        </p>
      </div>
    </>
  );
}
