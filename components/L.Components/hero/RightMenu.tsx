// components/hero/RightMenu.tsx

export default function RightMenu() {
  return (
    <div
      className="
        absolute
        top-[222px]
        left-[1239px]
        w-[151px]
        h-[153px]
        flex
        flex-col
        items-end
        gap-[12px]
      "
    >
      {/* Our Projects + */}
      <div className="flex items-center justify-end gap-[2px] w-full">
        <div
          className="
            text-[18px]
            leading-[21px]
            font-medium
            uppercase
            tracking-[0.01em]
            text-[#1E1E1E]
          "
        >
          Our Projects
        </div>
        <div
          className="
            text-[24px]
            leading-[29px]
            font-medium
            uppercase
            text-[#BB9CFB]
          "
        >
          +
        </div>
      </div>

      {/* Design */}
      <div
        className="
          w-[71px]
          text-[18px]
          leading-[21px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-[rgba(30,30,30,0.5)]
          text-right
        "
      >
        Design
      </div>

      {/* Development */}
      <div
        className="
          w-[133px]
          text-[18px]
          leading-[21px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-[rgba(30,30,30,0.5)]
          text-right
        "
      >
        Development
      </div>

      {/* About Us */}
      <div
        className="
          w-[91px]
          text-[18px]
          leading-[21px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-[rgba(30,30,30,0.5)]
          text-right
        "
      >
        About Us
      </div>

      {/* Get in Touch */}
      <div
        className="
          w-[129px]
          text-[18px]
          leading-[21px]
          font-medium
          uppercase
          tracking-[0.01em]
          text-[rgba(30,30,30,0.5)]
          text-right
        "
      >
        Get in Touch
      </div>
    </div>
  );
}
