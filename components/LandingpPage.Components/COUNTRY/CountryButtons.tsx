import Link from "next/link";

export default function CountryButtons() {
  return (
    <div className="flex flex-wrap w-[490px] h-[96px]">
      {[
        ["FRANCE", "/france"],
        ["GERMANY", "/germany"],
        ["DUBAI", "/dubai"],
        ["CANADA", "/canada"],
        ["NETHERLANDS", "/netherlands"],
      ].map(([label, href]) => (
        <Link
          key={label}
          href={href}
          className="
            w-[160px] h-[48px]
            flex items-center justify-center
            rounded-[8px]

            bg-white/70
            border border-white/80
            shadow-[0_4px_20px_rgba(255,255,255,0.35)]
            backdrop-blur-sm

            text-[16px] leading-[19px] font-bold uppercase
            bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,#9F7BF0_0%,#CAAEFB_45.67%,#C2C7FA_81.25%,#BB9EFF_100%)]
            bg-clip-text text-transparent
          "
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
