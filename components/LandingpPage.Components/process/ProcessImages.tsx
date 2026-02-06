import Image from "next/image";

interface Props {
  showMainOnly?: boolean;
}

export default function ProcessImages({ showMainOnly = false }: Props) {
  return (
    <div className="relative w-full h-full pointer-events-none">
      {/* Main process image */}
      <Image
        src="/process.png"
        alt=""
        width={488}
        height={488}
        className="
          absolute
          left-[60px]
          md:left-[30px]
          lg:left-[45px]
          xl:left-[60px]

          top-[394px]
          md:top-[280px]
          lg:top-[330px]
          xl:top-[394px]

          w-[488px]
          md:w-[280px]
          lg:w-[360px]
          xl:w-[488px]
          h-auto
        "
        priority
      />

      {/* Decorative floating images — XL only */}
      {!showMainOnly && (
        <>
          {/* 1 */}
          <Image
            src="/process1.png"
            alt=""
            width={178}
            height={178}
            className="
              absolute
              left-[1242px]
              top-[798px]
              rotate-[-26.93deg]
              drop-shadow-[-25px_67px_29px_rgba(164,80,170,0.01)]
              drop-shadow-[-14px_38px_24px_rgba(164,80,170,0.05)]
              drop-shadow-[-6px_17px_18px_rgba(164,80,170,0.09)]
              drop-shadow-[-2px_4px_10px_rgba(164,80,170,0.1)]
            "
          />

          {/* 2 */}
          <Image
            src="/process1.png"
            alt=""
            width={98}
            height={98}
            className="
              absolute
              left-[600px]
              top-[1359px]
              [transform:matrix(-0.89,-0.45,-0.45,0.89,0,0)]
              drop-shadow-[-10px_36px_15px_rgba(179,91,156,0.01)]
              drop-shadow-[-6px_20px_13px_rgba(179,91,156,0.05)]
              drop-shadow-[-2px_9px_9px_rgba(179,91,156,0.09)]
              drop-shadow-[-1px_2px_5px_rgba(179,91,156,0.1)]
            "
          />

          {/* 3 */}
          <Image
            src="/process1.png"
            alt=""
            width={76}
            height={76}
            className="
              absolute
              left-[1068px]
              top-[1707px]
              rotate-[-26.93deg]
              drop-shadow-[0px_33px_13px_rgba(160,75,141,0.01)]
              drop-shadow-[0px_19px_11px_rgba(160,75,141,0.05)]
              drop-shadow-[0px_8px_8px_rgba(160,75,141,0.09)]
              drop-shadow-[0px_2px_5px_rgba(160,75,141,0.1)]
            "
          />
        </>
      )}
    </div>
  );
}
