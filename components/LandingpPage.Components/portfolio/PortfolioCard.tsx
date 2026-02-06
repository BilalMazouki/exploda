import Image from "next/image";

export default function PortfolioCard() {
  return (
    <div
      className="
        bg-white
        border
        border-gray-100

        rounded-[16px]
        lg:rounded-[16px]
        xl:rounded-[20px]

        p-[12px]
        lg:p-[14px]
        xl:p-[16px]

        transition
        hover:shadow-sm
      "
    >
      {/* Preview */}
      <div
        className="
          relative
          aspect-[400/260]
          overflow-hidden

          rounded-[12px]
          lg:rounded-[14px]
          xl:rounded-[16px]

          mb-[12px]
          lg:mb-[14px]
          xl:mb-[16px]
        "
      >
        <Image
          src="/portfolio-placeholder.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Meta */}
      <div
        className="
          flex
          items-center
          justify-between

          mb-[8px]
          lg:mb-[10px]
          xl:mb-[12px]
        "
      >
        <span
          className="
            text-[11px]
            lg:text-[12px]
            xl:text-[14px]

            font-medium
            uppercase
          "
        >
          Slack
        </span>

        <span
          className="
            text-[10px]
            lg:text-[11px]
            xl:text-[12px]

            text-gray-400
            uppercase
          "
        >
          1 Month
        </span>
      </div>

      {/* Tags */}
      <div
        className="
          flex
          flex-wrap
          gap-[6px]
          lg:gap-[7px]
          xl:gap-[8px]
        "
      >
        {["UIUX DESIGN", "WEBSITE DESIGN", "DEVELOPMENT"].map((tag) => (
          <span
            key={tag}
            className="
              px-[8px]
              lg:px-[10px]
              xl:px-[12px]

              py-[4px]
              lg:py-[5px]
              xl:py-[6px]

              text-[8px]
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
