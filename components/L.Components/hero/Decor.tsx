// components/hero/Decor.tsx
import Image from "next/image";

export default function Decor() {
  return (
    <>
      {/* Left blob */}
      <Image
        src="/blob-left.svg"
        alt=""
        width={450}
        height={450}
        className="
          absolute
          left-[-150px]
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
      <img
        src="/blob-right.svg"
        alt=""
        className="
          absolute
          right-[0px]
          bottom-[0px]
        "
      />
    </>
  );
}
