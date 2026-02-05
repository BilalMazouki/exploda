export default function PortfolioHeader() {
  return (
    <div className="
      text-center 
      mb-[100px]
      md:mb-[50px]
      lg:mb-[75px]
      xl:mb-[100px]
    ">
      <h2
        className="
          text-[56px]
          md:text-[32px]
          lg:text-[42px]
          xl:text-[56px]
          leading-[68px]
          md:leading-[38px]
          lg:leading-[52px]
          xl:leading-[68px]
          uppercase
          font-medium
          text-black
        "
      >
        Some of{" "}
        <span className="italic font-light">the impact</span>
        <br />
        we have made.
      </h2>

      <p
        className="
          mt-[12px]
          md:mt-[8px]
          lg:mt-[10px]
          xl:mt-[12px]
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
        Portfolio
      </p>
    </div>
  );
}