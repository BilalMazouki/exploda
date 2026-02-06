import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative w-full h-[88px] overflow-x-hidden">
      {/* ================= DESKTOP / TABLET (Figma-based) ================= */}
      <div className="hidden sm:block relative w-full h-full max-w-[1440px] mx-auto">

        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={51}
          height={48}
          className="
            absolute
            left-[59px]
            lg:left-[45px]
            md:left-[30px]
            top-[29px]
            w-[51.54px]
            h-[48px]
            z-20
          "
          priority
        />

        {/* Social pill */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            top-[32px]
            w-[132px]
            h-[44px]
            px-[20px]
            flex
            items-center
            justify-center
            gap-[16px]
            rounded-[42px]
            bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
          "
        >
          <Image src="/behance.svg" alt="Behance" width={18} height={18} />
          <Image src="/instagram.svg" alt="Instagram" width={18} height={18} />
          <Image src="/dribbble.svg" alt="Dribbble" width={18} height={18} />
        </div>

        {/* CTA */}
        <div
          className="
            absolute
            right-[59px]
            top-[32px]
            flex
            flex-col
            items-center
            isolate
            w-[156px]
            h-[55px]
          "
        >
          <div
            className="
              w-[214px]
              h-[44px]
              flex
              items-center
              justify-center
              gap-[8px]
              px-[20px]
              py-[13px]
              rounded-[8px]
              z-[1]
              bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_rgba(175,141,255,0.05)_0%,_rgba(109,94,248,0.05)_45.67%,_rgba(187,158,255,0.05)_100%)]
            "
          >
            <span
              className="
                text-[12px]
                leading-[14px]
                font-bold
                uppercase
                tracking-[0.01em]
                bg-[linear-gradient(90.88deg,_#1E1E1E_0.76%,_#2D3C83_53.26%,_#220D4B_100.04%)]
                bg-clip-text
                text-transparent
              "
            >
              Book free consultaion
            </span>
          </div>

          <div
            className="
              w-[156px]
              h-[21px]
              bg-[rgba(117,86,189,0.15)]
              blur-[15.7px]
              -mt-[10px]
              z-0
            "
          />
        </div>
      </div>

      {/* ================= MOBILE (SAFE FALLBACK, SAME CONTENT) ================= */}
      <div className="sm:hidden flex items-center justify-between px-4 h-full">
        <Image src="/logo.svg" alt="Logo" width={40} height={38} priority />

        <div className="flex items-center gap-3">
          <Image src="/behance.svg" alt="Behance" width={16} height={16} />
          <Image src="/instagram.svg" alt="Instagram" width={16} height={16} />
          <Image src="/dribbble.svg" alt="Dribbble" width={16} height={16} />
        </div>
      </div>
    </nav>
  );
}
