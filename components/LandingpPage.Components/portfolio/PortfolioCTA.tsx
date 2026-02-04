export default function PortfolioCTA() {
  return (
    <div
      className="
        col-span-2
        rounded-[24px]
        p-[60px]
        bg-gradient-to-br
        from-purple-200
        via-purple-300
        to-purple-400
        flex
        flex-col
        justify-between
      "
    >
      <h3
        className="
          text-[48px]
          leading-[58px]
          uppercase
          text-white
          font-medium
          max-w-[520px]
        "
      >
        Explore some of
        <br />
        our works
      </h3>

      <button
        className="
          mt-[40px]
          w-fit
          px-[32px]
          py-[14px]
          rounded-full
          border
          border-white/40
          text-white
          uppercase
          text-[12px]
        "
      >
        Explore portfolio
      </button>
    </div>
  );
}
