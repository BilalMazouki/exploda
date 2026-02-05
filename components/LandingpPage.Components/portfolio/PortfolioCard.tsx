import Image from "next/image";

export default function PortfolioCard() {
  return (
    <div
      className="
        bg-white
        rounded-[20px]
        md:rounded-[14px]
        lg:rounded-[16px]
        xl:rounded-[20px]
        p-[16px]
        md:p-[12px]
        lg:p-[14px]
        xl:p-[16px]
        border
        border-gray-100
      "
    >
      {/* Preview */}
      <div className="
        rounded-[16px]
        md:rounded-[12px]
        lg:rounded-[14px]
        xl:rounded-[16px]
        overflow-hidden 
        mb-[16px]
        md:mb-[12px]
        lg:mb-[14px]
        xl:mb-[16px]
      ">
        <Image
          src="/portfolio-placeholder.png"
          alt=""
          width={400}
          height={260}
          className="w-full h-auto"
        />
      </div>

      {/* Meta */}
      <div className="
        flex 
        items-center 
        justify-between 
        mb-[12px]
        md:mb-[8px]
        lg:mb-[10px]
        xl:mb-[12px]
      ">
        <span className="
          text-[14px]
          md:text-[11px]
          lg:text-[12px]
          xl:text-[14px]
          font-medium 
          uppercase
        ">
          Slack
        </span>

        <span className="
          text-[12px]
          md:text-[10px]
          lg:text-[11px]
          xl:text-[12px]
          text-gray-400 
          uppercase
        ">
          1 Month
        </span>
      </div>

      {/* Tags */}
      <div className="
        flex 
        gap-[8px]
        md:gap-[6px]
        lg:gap-[7px]
        xl:gap-[8px]
        flex-wrap
      ">
        {["UIUX DESIGN", "WEBSITE DESIGN", "DEVELOPMENT"].map(tag => (
          <span
            key={tag}
            className="
              px-[12px]
              md:px-[8px]
              lg:px-[10px]
              xl:px-[12px]
              py-[6px]
              md:py-[4px]
              lg:py-[5px]
              xl:py-[6px]
              text-[10px]
              md:text-[8px]
              lg:text-[9px]
              xl:text-[10px]
              uppercase
              rounded-full
              border
              border-purple-200
              text-purple-400
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}