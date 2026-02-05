export default function RightMenu() {
  return (
    <div
      className="
        absolute
        left-1/2 top-[56px]
        translate-x-[584.5px]
        w-[151px] h-[186px]
        flex flex-col
        items-end
        justify-center
        gap-[12px]
      "
    >
      {/* Our Projects + */}
      <div className="flex items-start justify-end gap-[2px] w-[151px] h-[21px]">
        <span
          className="
            text-[18px] leading-[21px]
            font-medium uppercase
            tracking-[0.01em]
            text-white
          "
        >
          Our Projects
        </span>
        <span
          className="
            text-[24px] leading-[29px]
            font-medium uppercase
            text-[#BB9CFB]
          "
        >
          +
        </span>
      </div>

      {/* Design */}
      <span
        className="
          text-[18px] leading-[21px]
          font-medium uppercase
          tracking-[0.01em]
          text-white/50
        "
      >
        Design
      </span>

      {/* Development */}
      <span
        className="
          text-[18px] leading-[21px]
          font-medium uppercase
          tracking-[0.01em]
          text-white/50
        "
      >
        Development
      </span>

      {/* Leave a review */}
      <span
        className="
          text-[18px] leading-[21px]
          font-medium uppercase
          tracking-[0.01em]
          text-white/50
        "
      >
        Leave a review
      </span>

      {/* About Us */}
      <span
        className="
          text-[18px] leading-[21px]
          font-medium uppercase
          tracking-[0.01em]
          text-white/50
        "
      >
        About Us
      </span>

      {/* Get in Touch */}
      <span
        className="
          text-[18px] leading-[21px]
          font-medium uppercase
          tracking-[0.01em]
          text-white/50
        "
      >
        Get in Touch
      </span>
    </div>
  );
}
