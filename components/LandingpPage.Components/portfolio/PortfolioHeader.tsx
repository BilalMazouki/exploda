export default function PortfolioHeader() {
  return (
    <div className="text-center mb-[100px]">
      <h2
        className="
          text-[56px]
          leading-[68px]
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
          text-[12px]
          uppercase
          tracking-[0.2em]
          text-purple-400
        "
      >
        Portfolio
      </p>
    </div>
  );
}
