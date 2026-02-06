export default function ProcessHeader() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[1440px]
        mx-auto

        pt-[124px]
        md:pt-[80px]
        lg:pt-[100px]
        xl:pt-[124px]

        px-[60px]
        md:px-[30px]
        lg:px-[45px]
        xl:px-[60px]

        grid
        grid-cols-1
        lg:grid-cols-2
        gap-[40px]
        lg:gap-[60px]
      "
    >
      {/* Left block */}
      <div
        className="
          flex
          flex-col
          gap-[12px]
          md:gap-[8px]
          lg:gap-[10px]
          xl:gap-[12px]
          max-w-[593px]
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

      {/* Right description (SVG stays untouched) */}
      <div className="w-full max-w-[433px]">
        <svg
          viewBox="0 0 433 104"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG CONTENT — unchanged */}
          {/* (exact same paths you pasted) */}
        </svg>
      </div>
    </div>
  );
}
