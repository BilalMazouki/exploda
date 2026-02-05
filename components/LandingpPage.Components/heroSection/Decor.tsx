// components/hero/Decor.tsx
import Image from "next/image";

export default function Decor() {
  return (
    <>
      {/* Left blob */}
      <Image
        src="/blob-left.png"
        alt=""
        width={333}
        height={333}
        className="
          absolute
          left-[-185px]
          top-[172px]
         
          z-0
          pointer-events-none
          drop-shadow-[0_120px_48px_rgba(153,135,251,0.02)]
          drop-shadow-[0_67px_40px_rgba(153,135,251,0.08)]
          drop-shadow-[0_30px_30px_rgba(153,135,251,0.13)]
          drop-shadow-[0_7px_16px_rgba(153,135,251,0.15)]
        "
      />

      {/* Right blob */}
      <Image
        src="/blob-right.png"
        alt=""
        width={514}
        height={514}
        className="
          absolute
          right-[-120px]
          top-[660px]
          rotate-[75deg]
          pointer-events-none
          z-0

          drop-shadow-[9px_-8px_44px_rgba(203,154,229,0.2)]
          drop-shadow-[106px_-32px_80px_rgba(203,154,229,0.2)]
          drop-shadow-[98px_-127px_128px_rgba(203,154,229,0.2)]
          drop-shadow-[90px_142px_140px_rgba(203,154,229,0.2)]
        "
      />
    </>
  );
}