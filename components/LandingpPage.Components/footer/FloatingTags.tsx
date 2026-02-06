import Image from "next/image";

export default function FloatingTags() {
  return (
    <>
      {/* UIUX Design */}
      <Image
        src="/ux.png"
        alt=""
        width={115}
        height={32}
        className="
          absolute
          left-[644px]
          md:left-[340px]
          lg:left-[450px]
          xl:left-[644px]
          top-[293px]
          md:top-[230px]
          lg:top-[260px]
          xl:top-[293px]
          w-[115px]
          md:w-[80px]
          lg:w-[85px]
          xl:w-[115px]
          h-auto
        "
        priority
      />

      {/* Website design */}
      <Image
        src="/website.png"
        alt=""
        width={140}
        height={32}
        className="
          absolute
          left-[796px]
          md:left-[440px]
          lg:left-[590px]
          xl:left-[796px]
          top-[286px]
          md:top-[235px]
          lg:top-[264px]
          xl:top-[286px]
          w-[140px]
          md:w-[90px]
          lg:w-[95px]
          xl:w-[140px]
          h-auto
        "
        priority
      />

      {/* App Design */}
      <Image
        src="/design.png"
        alt=""
        width={112}
        height={32}
        className="
          absolute
          left-[1032px]
          md:left-[550px]
          lg:left-[745px]
          xl:left-[1032px]
          top-[303px]
          md:top-[235px]
          lg:top-[274px]
          xl:top-[303px]
          w-[112px]
          md:w-[85px]
          lg:w-[75px]
          xl:w-[112px]
          h-auto
        "
        priority
      />

      {/* Development */}
      <Image
        src="/development.png"
        alt=""
        width={129}
        height={32}
        className="
          absolute
          left-[1251px]
          md:left-[650px]
          lg:left-[890px]
          xl:left-[1251px]
          top-[293px]
          md:top-[230px]
          lg:top-[265px]
          xl:top-[293px]
          w-[129px]
          md:w-[95px]
          lg:w-[85px]
          xl:w-[129px]
          h-auto
        "
        priority
      />
    </>
  );
}