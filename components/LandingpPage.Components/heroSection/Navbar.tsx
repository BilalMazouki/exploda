import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative w-full h-[88px]">

      {/* Logo - scale proportionally on md/lg */}
      <Image
        src="/logo.svg"
        alt="Logo"
        width={51}
        height={48}
        className="
          absolute 
          left-[59px]
          md:left-[30px]
          lg:left-[45px]
          xl:left-[59px]
          top-[29px]
          md:top-[24px]
          lg:top-[27px]
          xl:top-[29px]
          w-[51.54px]
          md:w-[35px]
          lg:w-[43px]
          xl:w-[51.54px]
          h-[48px]
          md:h-[33px]
          lg:h-[40px]
          xl:h-[48px]
          z-20
        "
        priority
      />

      {/* Social pill - proportional positioning */}
      <div
        className="
          absolute
          left-[654px]
          md:left-[350px]
          lg:left-[490px]
          xl:left-[654px]
          top-[32px]
          md:top-[28px]
          lg:top-[30px]
          xl:top-[32px]
          w-[132px]
          md:w-[100px]
          lg:w-[115px]
          xl:w-[132px]
          h-[44px]
          md:h-[36px]
          lg:h-[40px]
          xl:h-[44px]
          px-[20px]
          md:px-[12px]
          lg:px-[16px]
          xl:px-[20px]
          py-[2px]
          flex
          items-center
          justify-center
          gap-[16px]
          md:gap-[10px]
          lg:gap-[13px]
          xl:gap-[16px]
          rounded-[42px]
          bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
        "
      >
        <Image 
          src="/behance.svg" 
          alt="Behance" 
          width={18} 
          height={18}
          className="md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px] xl:w-[18px] xl:h-[18px]"
        />
        <Image 
          src="/instagram.svg" 
          alt="Instagram" 
          width={18} 
          height={18}
          className="md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px] xl:w-[18px] xl:h-[18px]"
        />
        <Image 
          src="/dribbble.svg" 
          alt="Dribbble" 
          width={18} 
          height={18}
          className="md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px] xl:w-[18px] xl:h-[18px]"
        />
      </div>

      {/* CTA Button */}
      <div
        className="
          absolute
          left-[1207px]
          md:left-[640px]
          lg:left-[855px]
          xl:left-[1207px]
          top-[32px]
          md:top-[28px]
          lg:top-[30px]
          xl:top-[32px]
          flex
          flex-col
          items-center
          isolate
          w-[156px]
          md:w-[110px]
          lg:w-[130px]
          xl:w-[156px]
          h-[55px]
        "
      >
        {/* Button */}
        <div
          className="
            w-[214px]
            md:w-[150px]
            lg:w-[180px]
            xl:w-[214px]
            h-[44px]
            md:h-[36px]
            lg:h-[40px]
            xl:h-[44px]
            flex
            items-center
            justify-center
            gap-[8px]
            px-[20px]
            md:px-[12px]
            lg:px-[16px]
            xl:px-[20px]
            py-[13px]
            md:py-[10px]
            lg:py-[12px]
            xl:py-[13px]
            rounded-[8px]
            z-[1]
            bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_rgba(175,141,255,0.05)_0%,_rgba(109,94,248,0.05)_45.67%,_rgba(187,158,255,0.05)_100%)]
          "
        >
          <span
            className="
              text-[12px]
              md:text-[9px]
              lg:text-[10px]
              xl:text-[12px]
              leading-[14px]
              font-bold
              uppercase
              tracking-[0.01em]
              bg-[linear-gradient(90.88deg,_#1E1E1E_0.76%,_#2D3C83_53.26%,_#220D4B_100.04%)]
              bg-clip-text
              text-transparent
            "
          >
            GET IN TOUCH
          </span>
        </div>

        {/* Blur ellipse */}
        <div
          className="
            w-[156px]
            md:w-[110px]
            lg:w-[130px]
            xl:w-[156px]
            h-[21px]
            bg-[rgba(117,86,189,0.15)]
            blur-[15.7px]
            -mt-[10px]
            z-0
          "
        />
      </div>
    </nav>
  );
}