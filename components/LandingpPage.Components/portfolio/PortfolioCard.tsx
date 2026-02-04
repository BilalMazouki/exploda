import Image from "next/image";

export default function PortfolioCard() {
  return (
    <div
      className="
        bg-white
        rounded-[20px]
        p-[16px]
        border
        border-gray-100
      "
    >
      {/* Preview */}
      <div className="rounded-[16px] overflow-hidden mb-[16px]">
        <Image
          src="/portfolio-placeholder.png"
          alt=""
          width={400}
          height={260}
          className="w-full h-auto"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between mb-[12px]">
        <span className="text-[14px] font-medium uppercase">
          Slack
        </span>

        <span className="text-[12px] text-gray-400 uppercase">
          1 Month
        </span>
      </div>

      {/* Tags */}
      <div className="flex gap-[8px] flex-wrap">
        {["UIUX DESIGN", "WEBSITE DESIGN", "DEVELOPMENT"].map(tag => (
          <span
            key={tag}
            className="
              px-[12px]
              py-[6px]
              text-[10px]
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
