import Link from "next/link";

export default function CountryButtons() {
  return (
    <div className="
      flex 
      flex-wrap 
      w-full
      md:w-full
      lg:w-[490px]
      xl:w-[490px]
      h-auto
      md:h-auto
      lg:h-[96px]
      xl:h-[96px]
      gap-2
      md:gap-2
      lg:gap-0
      xl:gap-0
    ">
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
            w-[160px]
            md:w-[140px]
            lg:w-[155px]
            xl:w-[160px]
            h-[48px]
            md:h-[42px]
            lg:h-[46px]
            xl:h-[48px]
            flex 
            items-center 
            justify-center
            rounded-[8px]
            md:rounded-[6px]
            lg:rounded-[7px]
            xl:rounded-[8px]
            bg-white/70
            border 
            border-white/80
            shadow-[0_4px_20px_rgba(255,255,255,0.35)]
            backdrop-blur-sm
            text-[16px]
            md:text-[13px]
            lg:text-[14px]
            xl:text-[16px]
            leading-[19px]
            md:leading-[16px]
            lg:leading-[17px]
            xl:leading-[19px]
            font-bold 
            uppercase
            bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,#9F7BF0_0%,#CAAEFB_45.67%,#C2C7FA_81.25%,#BB9EFF_100%)]
            bg-clip-text 
            text-transparent
            hover:scale-105
            transition-transform
          "
        >
          {label}
        </Link>
      ))}
    </div>
  );
}