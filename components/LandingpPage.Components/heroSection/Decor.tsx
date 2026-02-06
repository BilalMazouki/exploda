import Image from "next/image";

/**
 * Decor.tsx — responsive decorative blobs used in the Hero.
 *
 * - I kept the same images and shadow styles.
 * - Positions and sizes are responsive:
 *   - Mobile: blobs are smaller and centered so they don't overflow the viewport.
 *   - md/lg: moved toward the sides with larger sizes.
 *   - xl: original Figma-like offsets restored with exact px values.
 *
 * Tweak points:
 * - LEFT_TOP, RIGHT_TOP: edit the top offsets per breakpoint below if you need nudges.
 * - LEFT_NEG_XL and RIGHT_NEG_XL: original negative offsets preserved only at xl.
 */

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
          left-1/2 -translate-x-1/2
          top-[72px]

          md:left-[-50px] md:top-[50px]
          lg:left-[-50px] lg:top-[80px]
          xl:left-[-50px] xl:top-[172px]

          w-[180px] md:w-[220px] lg:w-[280px] xl:w-[333px]
          h-auto

          z-0
          pointer-events-none

          drop-shadow-[0_120px_48px_rgba(153,135,251,0.02)]
          drop-shadow-[0_67px_40px_rgba(153,135,251,0.08)]
          drop-shadow-[0_30px_30px_rgba(153,135,251,0.13)]
          drop-shadow-[0_7px_16px_rgba(153,135,251,0.15)]
        "
        priority
      />

      {/* Right blob */}
      <Image
        src="/blob-right.png"
        alt=""
        width={514}
        height={514}
        className="
          absolute
          right-1/2 translate-x-1/2
          top-[420px]
          rotate-75

          md:right-[60px]  md:top-[420px] md:rotate-[75deg]
          lg:right-[80px] lg:top-[500px] lg:rotate-[75deg]
          xl:right-[120px] xl:top-[660px] xl:rotate-[75deg]

          w-[160px] md:w-[240px] lg:w-[380px] xl:w-[514px]
          h-auto

          pointer-events-none
          z-0

          drop-shadow-[9px_-8px_44px_rgba(203,154,229,0.2)]
          drop-shadow-[106px_-32px_80px_rgba(203,154,229,0.2)]
          drop-shadow-[98px_-127px_128px_rgba(203,154,229,0.2)]
          drop-shadow-[90px_142px_140px_rgba(203,154,229,0.2)]
        "
        priority
      />
    </>
  );
}