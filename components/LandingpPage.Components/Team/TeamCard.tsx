import Image from "next/image";

type Layout = "image-left" | "image-right";

interface Props {
  image: string;
  layout: Layout;
}

export default function TeamCard({ image, layout }: Props) {
  const isImageLeft = layout === "image-left";

  return (
    <div className="
      w-[652px]
      md:w-[354px]
      lg:w-[468px]
      xl:w-[652px]
      h-[290px]
      md:h-[200px]
      lg:h-[240px]
      xl:h-[290px]
      p-[8px]
      md:p-[6px]
      lg:p-[7px]
      xl:p-[8px]
      bg-white/10 
      rounded-[12px]
      md:rounded-[8px]
      lg:rounded-[10px]
      xl:rounded-[12px]
    ">
      <div
        className={`flex h-full rounded-[8px] md:rounded-[6px] lg:rounded-[7px] xl:rounded-[8px] ${
          isImageLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Image */}
        <div className="
          relative 
          w-[268px]
          md:w-[145px]
          lg:w-[195px]
          xl:w-[268px]
          h-full 
          bg-white 
          rounded-[8px]
          md:rounded-[6px]
          lg:rounded-[7px]
          xl:rounded-[8px]
          overflow-hidden
        ">
          <Image src={image} alt="" fill className="object-cover" />
        </div>

        {/* Text */}
        <div className="
          w-[368px]
          md:w-[197px]
          lg:w-[260px]
          xl:w-[368px]
          h-full 
          flex 
          flex-col 
          justify-between 
          p-[24px]
          md:p-[14px]
          lg:p-[18px]
          xl:p-[24px]
        ">
          <div className="
            flex 
            flex-col 
            gap-[8px]
            md:gap-[6px]
            lg:gap-[7px]
            xl:gap-[8px]
          ">
            <h3 className="
              text-[24px]
              md:text-[16px]
              lg:text-[20px]
              xl:text-[24px]
              uppercase 
              font-medium 
              text-[#1E1E1E]
            ">
              Evrahimovic
            </h3>

            <span
              className="
                text-[18px]
                md:text-[13px]
                lg:text-[15px]
                xl:text-[18px]
                uppercase
                font-bold
                bg-[radial-gradient(107.28%_107.28%_at_-7.28%_0%,_#A480F5_0%,_#CEB2FF_45.67%,_#C6CBFE_81.25%,_#BB9EFF_100%)]
                bg-clip-text
                text-transparent
              "
            >
              CEO
            </span>
          </div>

          <p className="
            text-[16px]
            md:text-[11px]
            lg:text-[13px]
            xl:text-[16px]
            uppercase 
            text-[#1E1E1E]/50
          ">
            Lorem ipsum dolor sit amet consectetur. Magna id urna est.
          </p>
        </div>
      </div>
    </div>
  );
}